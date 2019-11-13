FROM node:12.6-alpine AS build
WORKDIR /tmp
ADD docs docs
RUN cd docs \
    && npm install \
    && npm run build \
    && npm run export

FROM nginx:alpine
ENV PORT $PORT
EXPOSE $PORT
RUN echo port is $PORT
