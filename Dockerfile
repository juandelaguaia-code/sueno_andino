# Sitio estático Sueño Andino: nginx sirve los archivos tal cual (sin build).
FROM nginx:1.27-alpine

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html
RUN rm -rf /usr/share/nginx/html/docker

EXPOSE 80
