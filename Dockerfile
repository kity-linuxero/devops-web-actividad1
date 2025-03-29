FROM node:18-alpine

WORKDIR /app

COPY backend/package.json ./
RUN npm install --omit=dev

COPY backend ./backend
COPY frontend ./frontend
COPY .env .env

CMD ["node", "backend/server.js"]


