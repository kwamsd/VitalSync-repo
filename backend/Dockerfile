# Le multi-stage build utilise un premier stage pour installer et tester,
# puis un second plus léger qui ne garde que le nécessaire à l’exécution.
# Cela réduit la taille de l’image et limite la surface d’attaque en production.

FROM node:20-alpine AS test
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm test

FROM node:20-alpine AS production
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm install --omit=dev && npm cache clean --force

COPY server.js ./

USER node
EXPOSE 3000
CMD ["node", "server.js"]