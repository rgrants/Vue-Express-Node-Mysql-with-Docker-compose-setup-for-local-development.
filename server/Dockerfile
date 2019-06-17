# Use Node v8 as the base image.
FROM node:10

# create and set app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

RUN npm rebuild bcrypt --build-from-source

EXPOSE 3000
# Run app
CMD ["npm", "start"]
