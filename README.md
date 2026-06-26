# Portfolio personal

Portfolio personal de Benjamín Briones, construido para presentar proyectos, experiencia técnica y canales de contacto.

## Tecnologías

- Astro
- Tailwind CSS
- TypeScript

## Desarrollo local

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:4321`.

## Validación de producción

```bash
npm run build
npm run preview
```

El build estático se genera en `dist/`.

## Despliegue en Vercel

El proyecto usa la salida estática predeterminada de Astro, compatible con Vercel sin configuración adicional.

1. Subir el repositorio a GitHub.
2. Importar el repositorio desde el panel de Vercel.
3. Mantener los valores detectados: framework `Astro`, comando de build `npm run build` y directorio de salida `dist`.
4. Ejecutar el despliegue.

No requiere variables de entorno para su funcionamiento actual.
