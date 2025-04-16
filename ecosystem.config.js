module.exports = {
  apps: [
    {
      name: 'liftlegalwp.com.au',  // Ensure this matches what you're using in PM2
      script: './server.js',     // Adjust this if your entry file is different
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};