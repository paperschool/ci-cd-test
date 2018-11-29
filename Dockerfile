FROM node:8

WORKDIR /home/

COPY package*.json ./

COPY /app ./app
COPY /src ./src
COPY webpack.config.js .

RUN npm install --production

RUN npm build

EXPOSE 3000

CMD [ "node", "app/index.js" ]