FROM node:11-alpine

WORKDIR /opt/tub/web

COPY package*.json .

RUN npm install --quiet

COPY . .

EXPOSE 1944

CMD [ "npm", "start" ]
