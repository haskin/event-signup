FROM node:12

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

# RUN npm run server

# CMD [ "node", "app.js" ]
# CMD ["npm run", "server"]
CMD npm run server && npm run client;