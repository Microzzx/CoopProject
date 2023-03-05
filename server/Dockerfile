FROM node:18.12.1-alpine as build
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
ENV NODE_ENV=production
CMD ["node", "main.js"]