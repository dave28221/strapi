module.exports = ({ env }) => {
  console.log('Server Port:', env.int('PORT', 1338));  // Add this line to debug
  return {
    url: '/admin',
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1338),
    app: {
      keys: env.array('APP_KEYS'),
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
  };
};
