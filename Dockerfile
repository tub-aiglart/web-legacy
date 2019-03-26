FROM node:10

WORKDIR /opt/tub/website

COPY package*.json .

RUN npm install --quiet

COPY . .

EXPOSE 9876
