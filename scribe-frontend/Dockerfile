FROM node:18-alpine

RUN apk update
RUN apk upgrade
RUN apk add bash

WORKDIR /usr/app/scribe-frontend
COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

EXPOSE 3000

CMD ["yarn", "dev"]