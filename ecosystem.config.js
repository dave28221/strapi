module.exports = {
  apps: [
    {
      name: 'strapi',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'development',  // Default environment for development
      },
      env_production: {
        NODE_ENV: 'production',  // Environment configuration for production|
        DATABASE_HOST: '127.0.0.1', // Public IP of your PostgreSQL database
        DATABASE_PORT: '5432',
        DATABASE_NAME: 'strapi_production',
        DATABASE_USERNAME: ' ploi',
        DATABASE_PASSWORD: 'vpcxf9Qzi506u8rpDbD0',
        DATABASE_SSL: 'false', // Set true if you want to use SSL
        JWT_SECRET: 'nB68jUfziXuNXvCGHSl+7g==',
        STRAPI_ADMIN_BACKEND_URL: 'https://liftlegalwp.com.au/admin',
        STRAPI_TELEMETRY_DISABLED: 'true',
      },
    },
  ],
};
