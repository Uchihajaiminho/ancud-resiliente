# Despliegue en Vercel - Sembrando Salud Ancud

Este proyecto está optimizado para Next.js y Vercel. Sigue estos pasos para desplegarlo gratuitamente.

## 1. Preparación del Código
Asegúrate de tener este proyecto en tu GitHub:
1.  Crea un nuevo repositorio en GitHub (ej: `sembrando-salud-ancud`).
2.  Sube, desde la carpeta del proyecto, los archivos al repositorio.

## 2. Configuración en Vercel
1.  Entra a [vercel.com](https://vercel.com) e inicia sesión con GitHub.
2.  Haz clic en **"Add New..."** -> **"Project"**.
3.  Selecciona tu repositorio `sembrando-salud-ancud`.
4.  Haz clic en **"Import"**.

## 3. Configuración de Build
Vercel detectará automáticamente que es un proyecto **Next.js**.
-   **Framework Preset**: Next.js
-   **Root Directory**: `./` (Déjalo como está)
-   **Environment Variables**: No necesarias por ahora.

## 4. Finalizar
Haz clic en **"Deploy"**. Vercel instalará las dependencias y construirá el sitio.
En unos segundos, te dará una URL (ej: `sembrando-salud-ancud.vercel.app`) lista para compartir.

---
**Nota Técnica**:
Asegúrate de que `package.json` incluya las dependencias:
- `next`
- `react`
- `react-dom`
- `framer-motion`
- `recharts`
- `lucide-react` (si se usaron iconos)
