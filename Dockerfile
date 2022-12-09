FROM node:9
RUN mkdir /app
WORKDIR /app
COPY main.js .
COPY package.json .
RUN npm install --save
EXPOSE 3000
CMD [ "npm", "start" ]

