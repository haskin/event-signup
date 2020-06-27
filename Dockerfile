FROM node:12

# RUN mkdir -p usr/src/app && chown -R node:node usr/src/app
# RUN mkdir -p /app/server && chown -R node:node /app/server
# WORKDIR /app/server

# COPY package.json /app/server
# COPY package-lock.json /app/server
# USER node

# COPY . /app/server



# RUN npm install

# COPY --chown=node:node . .
# COPY . /app/server

# EXPOSE 3030

# CMD ["npm", "run", "server"]

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3030

CMD ["npm", "run", "client-test"]