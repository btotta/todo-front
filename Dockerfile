FROM node:21

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY vite.config.js .

RUN npm install --include=dev
RUN npm install vite -g

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]
