FROM node:alpine

WORKDIR /server

COPY . .

EXPOSE 7878

CMD node server.js