FROM node:18

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY vite.config.js .

RUN npm install
RUN npm install -g vite

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]
