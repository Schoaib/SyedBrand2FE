FROM node:8.2.1
RUN mkdir -p /SyedBrand2FE
RUN     apt-get -y update && apt-get -y install \
        vim
RUN npm install -g serve
RUN chown -R node:node /SyedBrand2FE
USER node
COPY ./package.json /SyedBrand2FE/package.json
RUN cd /SyedBrand2FE && npm install
WORKDIR /SyedBrand2FE
COPY ./ /SyedBrand2FE
RUN npm run build
CMD ["npm","run","serve"]
EXPOSE 5000
