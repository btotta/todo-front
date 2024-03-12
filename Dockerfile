# Utiliza uma versão específica do node para evitar problemas de compatibilidade
FROM node:21-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de definição de pacote primeiro, para aproveitar o cache de camadas do Docker
COPY package*.json ./

# Instala as dependências, incluindo as de desenvolvimento
RUN npm install --include=dev

# Copia o resto dos arquivos do projeto para o diretório de trabalho no contêiner
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "run", "dev"]
