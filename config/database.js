const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  const connections = {
    mysql: {
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi_production'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: false,
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    postgres: {  // PostgreSQL connection setup
      connection: {
        host: env('DATABASE_HOST', 'postgresql+ssh://ploi@157.180.76.148/ploi@127.0.0.1/strapi_production?name=strapi-project-manual-setup&usePrivateKey=true'),  // Use the correct host for your database (e.g., IP address or hostname)
        port: env.int('DATABASE_PORT', 5432),  // Default PostgreSQL port
        database: env('DATABASE_NAME', 'strapi_production'),
        user: env('DATABASE_USERNAME', 'David'),  // Your PostgreSQL username
        password: env('DATABASE_PASSWORD', 'llmstrapi'),  // Your PostgreSQL password
        ssl: env.bool('DATABASE_SSL', true),  // Set to `true` for SSL connections in production
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
