FROM node:latest

WORKDIR /app
RUN mkdir -p views
RUN mkdir -p public/images

COPY package.json  .
COPY server.js  .
COPY views/index.ejs ./views/
COPY public/images/* ./public/images

RUN npm install


EXPOSE 80

CMD node server.js
