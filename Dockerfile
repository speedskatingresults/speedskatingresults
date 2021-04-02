# Build
FROM node:lts as buildContainer
WORKDIR /app
COPY ./package.json ./package-lock.json /app/
RUN npm install
COPY . /app
RUN npm run build:ssr

# Web Server
FROM node:lts-alpine
WORKDIR /app
COPY --from=buildContainer /app/package.json /app
COPY --from=buildContainer /app/dist /app/dist
EXPOSE 4000
ENV NODE_ENV production
CMD ["npm", "run", "serve:ssr"]
