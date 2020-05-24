FROM node:12.16.1-buster-slim

MAINTAINER songbai.yang

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 8000

CMD ["npm", "start"]
