FROM node:12.14

WORKDIR /usr/src/sdc

COPY package.json .

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get update && apt-get install -y nodejs
RUN npm install

COPY . .

EXPOSE 80
CMD [ "node", "server-Postgres/index.js" ]