FROM node:20-alpine

WORKDIR /opt/app

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]
