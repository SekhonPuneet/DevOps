FROM node:8-alpine
COPY package.json package.json  
RUN npm install
RUN npm audit fix
COPY . .
CMD ["npm","start"]