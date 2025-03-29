# Usar la imagen oficial de Node.js 18 LTS
FROM node:18-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos necesarios al contenedor
COPY package.json  ./

# Instalar dependencias
RUN npm install --production

# Copiar el resto de los archivos al contenedor
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "server.js"]
