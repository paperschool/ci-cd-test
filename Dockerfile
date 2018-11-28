FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

COPY /app .
COPY /src .
COPY webpack.config.js .

RUN npm install --production

RUN npm build

EXPOSE 3000

CMD [ "npm", "start" ]