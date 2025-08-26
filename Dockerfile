
FROM node:20-alpine AS build
WORKDIR /opt/app


COPY package*.json ./
RUN npm install


COPY . .

ENV NODE_ENV=production
RUN npm run build

FROM node:20-alpine
WORKDIR /opt/app


COPY package*.json ./
RUN npm install --production


COPY --from=build /opt/app/dist ./dist
COPY --from=build /opt/app/build ./build


RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser


EXPOSE 1337
CMD ["npm", "run", "start"]
