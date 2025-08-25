version: '3.8'

services:
  strapi:
    image: strapi/strapi:latest
    container_name: strapi
    restart: unless-stopped
    ports:
      - "1337:1337"
    environment:
      DATABASE_CLIENT: postgres
      DATABASE_HOST: postgres
      DATABASE_PORT: 5432
      DATABASE_NAME: strapi-db
      DATABASE_USERNAME: llmuser
      DATABASE_PASSWORD: llm101010
      NODE_ENV: production
    volumes:
      - ./app:/srv/app

  postgres:
    image: postgres:15
    container_name: strapi_postgres
    restart: unless-stopped
    environment:
      POSTGRES_USER: llmuser
      POSTGRES_PASSWORD: llm101010
      POSTGRES_DB: strapi-db
    volumes:
      - ./data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
