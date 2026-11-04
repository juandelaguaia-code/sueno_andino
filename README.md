# Sueño Andino — sitio web

Sitio estático (HTML + `support.js`) de la Fundación Sueño Andino.

## Estructura

| Archivo | Página |
|---|---|
| `index.html` | Inicio |
| `Nosotros.html` | Nosotros / equipo |
| `Blog.html` | Listado del blog |
| `Blog Post.html` | Artículo (`?post=<id>`) |
| `Imagenes.html` | Galería |
| `support.js` | Runtime que renderiza las páginas (necesario) |
| `images/` | Imágenes del sitio |

## Ver en local

```bash
python -m http.server 8000
```

Abrir http://localhost:8000

## Publicar en el servidor

Subir **todo el contenido de esta carpeta** (excepto `.git`, `README.md`) a la raíz pública del hosting (`public_html/`, `www/`, etc.). No requiere build.
