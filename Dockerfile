FROM node:17-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install -f -g npm@latest
RUN npm install -f --global yarn
RUN yarn install --production
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["yarn", "serve:production"]
