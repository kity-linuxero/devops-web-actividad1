FROM postgres:latest

# Crear carpeta para los scripts de inicialización
WORKDIR /docker-entrypoint-initdb.d

# Copiar script SQL para inicializar la base de datos
COPY init-db.sql .

# Exponer el puerto de PostgreSQL
EXPOSE 5432

