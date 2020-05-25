FROM debian:stable-slim

RUN apt-get update && apt-get -y install vim git nodejs npm

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN git clone https://github.com/bohenmian/workshop

WORKDIR /usr/src/app/workshop/node

RUN npm install

EXPOSE 8000

CMD ["npm", "start"]



