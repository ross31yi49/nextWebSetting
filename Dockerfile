FROM node:16.13.0-alpine AS pure-node-alpine

# setup stage copy the entire repo into "/usr/src/app" of the new container.
FROM pure-node-alpine AS setup
WORKDIR /usr/src/app
COPY . /usr/src/app

# build stage build the bundle of prog-web.
FROM setup AS build
ARG APP_ENV="development"
WORKDIR /usr/src/app
RUN APP_ENV=${APP_ENV} yarn build

# app stage copy the necessary files from build stage,
# then yarn start the prog-web.
FROM pure-node-alpine as app
RUN yarn global add next
ARG APP_ENV="development"
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.next/ ./.next
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/next.config.js ./
COPY --from=build /usr/src/app/package.json ./
# 'next start' needs .env.local in root folder [ref: https://nextjs.org/docs/basic-features/environment-variables#default-environment-variables].
COPY --from=build /usr/src/app/env/.env.${APP_ENV} ./.env.local
CMD ["yarn", "start"]