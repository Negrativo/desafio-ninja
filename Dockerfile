FROM node:14.7-alpine

ENV HOME=/home/app

RUN rm -rf /agenda

COPY package.json npm-shrinkwrap.json $HOME/agenda/

WORKDIR $HOME/agenda

RUN npm install --silent --progess=false

COPY . $HOME/agenda

EXPOSE 19002

CMD ["npm", "start"]