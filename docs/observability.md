# Observabilidad

## Objetivo

La observabilidad del proyecto se implementa con archivos versionables para mantener una configuracion reproducible, auditable y alineada con practicas DevOps. Aunque el portfolio no cuenta con backend propio, el monitoreo permite validar la disponibilidad del sitio, el codigo HTTP de respuesta y el tiempo que tarda en responder.

El objetivo principal es dejar una base simple pero extensible para replicar estas practicas en otros proyectos. Monitorear el software despues del despliegue forma parte del ciclo de vida del desarrollo, porque permite detectar fallas, degradaciones de rendimiento y problemas de conectividad antes de que impacten de forma sostenida en los usuarios.

## Alcance actual

La solucion actual monitorea el servicio web del portfolio desde un stack local de observabilidad compuesto por:

- Blackbox Exporter, para ejecutar pruebas HTTP sinteticas contra el sitio.
- Prometheus, para recolectar y almacenar las metricas generadas por Blackbox Exporter.
- Grafana, para visualizar las metricas en dashboards provisionados desde archivos.

Las metricas principales del dashboard son:

- disponibilidad actual del sitio mediante `probe_success`;
- codigo HTTP devuelto mediante `probe_http_status_code`;
- tiempo de respuesta mediante `probe_duration_seconds`;
- porcentaje de disponibilidad en ventana movil de cinco minutos mediante `avg_over_time(probe_success[5m]) * 100`.

Se generó un test para simular tráfico y se realizaron pruebas manuales para verificar momentos en que el sistema este caído para comprobar que los dashboards consuman correctamente la información en todo momento.

## Arquitectura

El flujo de datos es el siguiente:

```text
Grafana -> Prometheus -> Blackbox Exporter -> Portfolio
```

Prometheus no consulta directamente el endpoint `/metrics` del portfolio. En su lugar, ejecuta un scrape sobre Blackbox Exporter usando `metrics_path: /probe`. Blackbox Exporter recibe como parametro el target `http://portfolio:8080`, realiza la prueba HTTP y expone el resultado como metricas Prometheus.

Grafana consulta a Prometheus usando el datasource provisionado con la URL interna `http://prometheus:9090`. Por ese motivo, Grafana y Prometheus deben estar conectados a la misma red de Docker Compose.

## Servicios

### Portfolio

Servicio web a monitorear. Se publica en el puerto `8080` del host y tambien queda disponible dentro de la red Docker como `http://portfolio:8080`.

El contenedor se ejecuta con restricciones de seguridad:

- filesystem de solo lectura mediante `read_only: true`;
- directorios temporales declarados como `tmpfs`;
- capabilities removidas mediante `cap_drop: ALL`;
- proteccion `no-new-privileges`;
- limites de procesos, memoria y CPU.

### Blackbox Exporter

Expone el puerto `9115` y utiliza la configuracion ubicada en:

```text
observability/blackbox/blackbox.yml
```

El modulo configurado es `http_2xx`, que ejecuta una prueba HTTP `GET` y considera valida solamente una respuesta `200`.

### Prometheus

Expone el puerto `9090` y utiliza la configuracion ubicada en:

```text
observability/prometheus/prometheus.yml
```

Su configuracion define:

- un job para Prometheus sobre `prometheus:9090`;
- un job `portfolio_blackbox` que consulta a Blackbox Exporter en `blackbox:9115`;
- relabeling para enviar el target real como parametro `target`;
- intervalo global de scrape de `15s`.

Prometheus guarda la serie temporal en el volumen Docker:

```text
prometheus_data:/prometheus
```

Esto evita perder el historial de metricas al recrear el contenedor.

### Grafana

Expone la interfaz web en:

```text
http://localhost:3001
```

El datasource de Prometheus se provisiona desde:

```text
observability/grafana/provisioning/datasources/prometheus.yml
```

Los dashboards se provisionan desde:

```text
observability/grafana/provisioning/dashboards/dashboards.yml
observability/grafana/dashboards/
```

Grafana guarda su estado interno en:

```text
grafana_data:/var/lib/grafana
```

El provisionado y los dashboards se montan como solo lectura para evitar modificaciones accidentales desde el contenedor. Si se necesita cambiar un dashboard, el cambio debe realizarse en el archivo JSON versionado.

## Red Docker

Todos los servicios del stack deben estar conectados a la red `monitoring`.

Esta regla es importante porque los nombres `prometheus`, `blackbox` y `portfolio` son nombres DNS internos de Docker. Si Grafana queda fuera de la red `monitoring`, el contenedor puede iniciar correctamente, pero el datasource `http://prometheus:9090` no puede resolver o consultar Prometheus. En ese caso, Grafana muestra dashboards sin datos aunque Blackbox Exporter y Prometheus esten funcionando.

Regla operativa:

```text
Si un servicio se consulta por nombre de servicio Docker, ambos contenedores deben compartir red.
```

## Provisioning

La configuracion de Grafana se define como archivos versionables. Esto permite:

- reconstruir el dashboard desde cero;
- revisar cambios por diff;
- mantener consistencia entre ambientes;
- evitar configuraciones manuales no documentadas;
- facilitar futuras migraciones a otros entornos o pipelines.

El datasource usa el UID fijo `prometheus`. Los paneles del dashboard referencian ese UID, por lo que debe mantenerse estable:

```yaml
datasources:
  - name: Prometheus
    uid: prometheus
    type: prometheus
    access: proxy
    url: http://prometheus:9090
```

## Seguridad y configuracion

Las credenciales de Grafana se inyectan por variables de entorno:

```text
GRAFANA_ADMIN_USER
GRAFANA_ADMIN_PASSWORD
```

La imagen del portfolio tambien se define por variable:

```text
PORTFOLIO_IMAGE
```

El stack desactiva reportes y chequeos automaticos de Grafana para reducir llamadas externas innecesarias:

```text
GF_ANALYTICS_REPORTING_ENABLED=false
GF_ANALYTICS_CHECK_FOR_UPDATES=false
GF_ANALYTICS_CHECK_FOR_PLUGIN_UPDATES=false
```

## Comandos utiles

Levantar el stack:

```bash
docker compose -f compose.monitoring.yml up -d
```

Validar la configuracion final renderizada por Docker Compose:

```bash
docker compose -f compose.monitoring.yml config
```

Verificar servicios:

```bash
docker compose -f compose.monitoring.yml ps
```

Consultar la metrica principal desde Prometheus:

```bash
curl "http://localhost:9090/api/v1/query?query=probe_success%7Bjob%3D%22portfolio_blackbox%22%7D"
```

Ver logs de Grafana:

```bash
docker compose -f compose.monitoring.yml logs --tail=80 grafana
```

## Validacion esperada

Luego de levantar el stack, se debe validar:

- que `blackbox-exporter`, `prometheus`, `grafana` y `portfolio-web` esten en estado `Up`;
- que Prometheus muestre el target `portfolio_blackbox` en estado `up`;
- que la query `probe_success{job="portfolio_blackbox"}` devuelva valor `1`;
- que el datasource de Grafana indique conexion correcta con Prometheus;
- que el dashboard `Portfolio Overview` muestre disponibilidad, codigo HTTP, tiempo de respuesta y porcentaje de disponibilidad.

## Troubleshooting

Si Blackbox Exporter responde correctamente en `9115`, pero Grafana no muestra datos, revisar primero:

- que Prometheus este recolectando metricas desde `portfolio_blackbox`;
- que Grafana y Prometheus compartan la red `monitoring`;
- que el datasource de Grafana apunte a `http://prometheus:9090`;
- que los paneles usen el UID `prometheus`;
- que exista al menos un scrape reciente de Prometheus.

Si Prometheus no muestra datos para `probe_success`, revisar:

- que el target configurado sea `http://portfolio:8080`;
- que el servicio `portfolio` este en la misma red que Blackbox Exporter;
- que el modulo `http_2xx` permita el codigo de respuesta esperado;
- que el contenedor del portfolio responda dentro de la red Docker, no solo desde el host.

## Evolucion futura

Esta base puede extenderse incorporando:

- alertas de disponibilidad y latencia;
- reglas de grabacion en Prometheus;
- dashboards por ambiente;
- monitoreo de recursos de contenedores;
- trazas y logs centralizados;
- healthchecks formales en Docker Compose;
- integracion futura con pipelines de CI/CD.



