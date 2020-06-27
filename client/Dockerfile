FROM node:12

# RUN mkdir -p usr/src/app && chown -R node:node usr/src/app

RUN mkdir -p /home/node/app/client/node_modules && chown -R node:node /home/node/app/client
# RUN mkdir -p /app/client
WORKDIR /home/node/app/client

# COPY package.json /usr/src/app/client
# COPY package-lock.json /usr/src/app/client
# COPY . /app/client
# COPY package*.json ./

# USER node

# RUN npm install
COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .
# COPY . /usr/src/app/client

EXPOSE 3000

CMD [ "npm", "start" ]