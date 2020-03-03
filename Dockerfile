FROM node:latest as node
WORKDIR /app
COPY src .
RUN npm install
RUN npm run build --prod

# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/* /usr/share/nginx/html
