ARG VER=18.2.0

FROM node:${VER}

LABEL developer=chuk

## Building the image
#create a working directory and cd into it
WORKDIR /app

#install curl
RUN apt update && apt install curl

#copy file from local to container
ADD package.json .
ADD package-lock.json .
ADD public public
ADD views views
ADD main.js .

#install packages
RUN npm ci

## run the image
ENV APP_PORT=3000
EXPOSE ${APP_PORT}

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
     CMD curl -s -f http://localhost:${APP_PORT}/healthz || exit 1

## run the application
ENTRYPOINT [ "node", "main.js" ]



