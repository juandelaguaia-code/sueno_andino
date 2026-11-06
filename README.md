# Sueño Andino — sitio web

Sitio estático (HTML + `support.js`) de la Fundación Sueño Andino.

## Estructura

| Archivo | Sección |
|---|---|
| `index.html` | Inicio |
| `Nosotros.html` | Nosotros: propósito, trayectoria y equipo |
| `Experiencia.html` | Nuestra experiencia: cuatro proyectos destacados |
| `Charlas.html` | Charlas y encuentros: galería de participaciones |
| `Educacion.html` | Educación: los tres cursos (con fotos) |
| `Alianzas.html` | Alianzas: organizaciones colaboradoras |
| `Blog.html` | Listado del blog |
| `Blog Post.html` | Artículo (`?post=<id>`) |
| `Imagenes.html` | Redirección a `Charlas.html` (URL antigua) |
| `support.js` | Runtime que renderiza las páginas (necesario) |
| `images/` | Imágenes del sitio (`images/educacion/<curso>/` = fotos de los cursos) |

## Ver en local

```bash
python -m http.server 8000
```

Abrir http://localhost:8000

## Publicar en el servidor

**Easypanel / Docker:** el repositorio incluye un `Dockerfile` (nginx sirviendo los archivos estáticos, config en `docker/nginx.conf`). En Easypanel usar el método de build **Dockerfile** con la rama que se quiera publicar y el puerto 80.

**Hosting tradicional:** subir **todo el contenido de esta carpeta** (excepto `.git`, `README.md`, `Dockerfile`, `docker/`) a la raíz pública del hosting (`public_html/`, `www/`, etc.). No requiere build.
