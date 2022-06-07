FROM golang:alpine3.16 AS builder

WORKDIR /app

ADD go.mod .
ADD go.sum .
ADD main.go .

#Produces the main
RUN go build -o main main.go


FROM alpine:3.16
WORKDIR /app

#install curl
#RUN apk update && apk add curl

#Copy from=0
COPY --from=builder /app/main main
ADD public public
ADD templates templates

ENV PORT=3000
EXPOSE ${PORT}


#HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
#     CMD curl -s -f http://localhost:${APP_PORT}/healthz || exit 1

ENTRYPOINT [ "./main"]