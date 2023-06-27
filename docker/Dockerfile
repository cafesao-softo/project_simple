FROM node:16 as BUILD
WORKDIR /api
COPY ./package.json ./yarn.lock ./
RUN yarn
COPY . .
RUN yarn build

FROM node:16
WORKDIR /app
COPY --from=BUILD ./api/package.json ./
COPY --from=BUILD ./api/yarn.lock ./
COPY --from=BUILD ./api/dist/. ./
COPY --from=BUILD ./api/.env ./

RUN yarn --prod

CMD ["yarn","start:prod"]