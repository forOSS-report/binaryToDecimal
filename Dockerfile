FROM bitnami/node:9 as builder
ENV NODE_ENV="production"
COPY . /app

WORKDIR /app

RUN npm install --save

FROM bitnami/node:9-prod
ENV NODE_ENV = "production"
COPY --from=builder /app /app
WORKDIR /app
ENV PORT 3000
EXPOSE 3000

CMD [ "node", "main.js" ]
