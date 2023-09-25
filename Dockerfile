FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Command to run the application
CMD [ "npm", "start" ]
