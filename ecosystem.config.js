module.exports = {
  apps: [
    {
      name: 'strapi',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        DATABASE_HOST: '157.180.76.148',
        DATABASE_PORT: '5432',
        DATABASE_NAME: 'strapi_production',
        DATABASE_USERNAME: 'David',
        DATABASE_PASSWORD: 'llmstrapi',
        DATABASE_SSL: 'true',
        JWT_SECRET: 'nB68jUfziXuNXvCGHSl+7g==',
        STRAPI_ADMIN_BACKEND_URL: 'https://liftlegalwp.com.au/admin',
        STRAPI_TELEMETRY_DISABLED: 'true',
      },
    },
  ],
};
