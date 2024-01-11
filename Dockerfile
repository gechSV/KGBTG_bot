FROM alpine 
ARG APP_DIR=/app
# RUN mkdir -p${APP_DIR}
WORKDIR ${APP_DIR}
RUN apk add --update npm
COPY . .
RUN npm ci
CMD npm run start

