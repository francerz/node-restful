Guía para la creación de este repositorio
=========================================

Crear un directorio para contener el proyecto llamado `node-rest`.

Inicializar el repositorio de Git:

```sh
git init
```

Crear un archivo `/.gitignore` y colocar lo siguiente:

```
# Ignorear dependencias de Node.js
/node_modules
```

Crear un archivo `/Dockerfile` y colocar lo siguiente:

```
# Utilizar imagen base de Node.js
FROM node:lts-slim

# Crear y cambiar el directorio actual a /app
WORKDIR /app/

# Copiar el contenido del proyecto actual a /app
COPY . /app/

# Exponer puerto 80
EXPOSE 80
```

Crear un archivo `/.dockerignore` y colocar lo siguiente:

```
# Excluir directorio de dependencias de Node.js
node_modules
```

Crear un archivo `/.docker-compose.yml` y colocar lo siguiente:

```
version: '3'
services:
    web-service:
        build: .
        volumes:
            - .:/app
            - /app/node_modules
        ports:
            - 3100:80
```

Abrir una terminal y ejecutar lo siguiente:

```sh
docker-compose up -d
```

Una vez que estén iniciados los servicios, ejecutar lo siguiente:

```sh
docker run -it node-rest-web-service sh
```

> **NOTA**  
> El nombre del contenedor (`node-rest-web-service`) puede cambiar dependiendo
> del nombre que se le haya asignado al directorio del proyecto.

Una vez accediendo a la terminal ejecutar lo siguiente, que creará el archivo
package.json del proyecto:

```sh
npm init
```

Una vez creado el `package.json`, proceder son la instalación de los siguientes
módulos:

```sh
npm install express body-parser mysql2 knex
```

```sh
npm install -D express 
```