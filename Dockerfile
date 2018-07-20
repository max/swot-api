FROM node:8.11

ENV HOME=/home/app
WORKDIR $HOME

COPY package*.json ./
RUN npm install

COPY . .

RUN npm test

EXPOSE 3000
CMD ["npm start"]
