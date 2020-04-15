FROM node:13-alpine

WORKDIR /app/src

COPY server.js package.json yarn.lock ./

RUN yarn

CMD [ "node", "./server.js" ]