FROM node:alpine

WORKDIR /app 

COPY  package*.json ./

RUN npm install \ 
&& npm install typescript -g

COPY . .

EXPOSE 3000

ENV PRIVATEKEYTOKEN=evento
ENV PORT=3000

ENV DB_NAME=tccfacu
ENV DB_USER=renan99
ENV DB_HOST=db4free.net
ENV DB_PASSWORD=senhapadrao
ENV DB_DIALECT=mysql


CMD [ "npm", "start" ]
