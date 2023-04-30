FROM node:slim

LABEL maintainer="huyth"

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "start:prod"]

