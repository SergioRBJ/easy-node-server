ARG BASE_IMAGE=node:16.15.1-buster-slim
FROM ${BASE_IMAGE}

ENV USER_NAME backend
ENV APP_HOME /opt/$USER_NAME
RUN mkdir -p $APP_HOME

WORKDIR $APP_HOME
COPY build/ ./build/
COPY package.json .
COPY node_modules/ ./node_modules/

EXPOSE 3001
CMD [ "npm", "start" ]
