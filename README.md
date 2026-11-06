# Sueño Andino — sitio web

Sitio web de la Fundación Sueño Andino.

## Estructura

Sitio 100 % estático (HTML + CSS + JS mínimo, sin dependencias externas). nginx sirve las URLs limpias (`/alianzas` → `alianzas.html`) y redirige con 301 las URLs antiguas terminadas en `.html`.

| URL | Archivo | Sección |
|---|---|---|
| `/` | `index.html` | Inicio (incluye Instagram y contacto) |
| `/nosotros` | `nosotros.html` | Propósito, trayectoria y directorio |
| `/experiencia` | `experiencia.html` | Nuestra experiencia |
| `/charlas` | `charlas.html` | Charlas y encuentros |
| `/educacion` | `educacion.html` | Programas formativos |
| `/alianzas` | `alianzas.html` | Alianzas |
| `/blog`, `/blog/<id>` | `blog.html`, `blog/<id>.html` | Blog |
| — | `404.html` | Página no encontrada |
| — | `assets/` | `site.css`, `site.js` y fuentes (woff2) |
| — | `images/` | Fotos en WebP (`-sm.webp` = versión móvil) |
| — | `docker/nginx.conf` | Configuración del servidor |

## Ver en local

```bash
docker build -t sueno-andino . && docker run --rm -p 8080:80 sueno-andino
```

Abrir http://localhost:8080 (con `python -m http.server` las URLs limpias no funcionan; hay que agregar `.html`).

## Publicar en el servidor

**Easypanel / Docker:** el repositorio incluye un `Dockerfile` (nginx sirviendo los archivos estáticos, config en `docker/nginx.conf`). En Easypanel usar el método de build **Dockerfile** con la rama que se quiera publicar y el puerto 80.

**Hosting tradicional:** subir **todo el contenido de esta carpeta** (excepto `.git`, `README.md`, `Dockerfile`, `docker/`) a la raíz pública del hosting. Para las URLs limpias el servidor debe resolver `/ruta` → `ruta.html` (ver `docker/nginx.conf`).
