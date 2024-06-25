FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --no-audit --no-fund
COPY . ./
RUN npm run build

FROM nginx:latest AS frontend
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx/conf.d/default.conf /etc/nginx/conf.d

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]