# Utilizar imagen base de Node.js
FROM node:lts

# Crear y cambiar el directorio actual a /app
WORKDIR /app

# Copiamos el contenido del proyecto a /app
COPY . /app/

# Exponer puerto 80
EXPOSE 80

# Iniciar aplicación
CMD ["node", "app.js"]
