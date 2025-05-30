module.exports = ({ env }) => {
  console.log('Server Port:', env.int('PORT', 1338));

  const appKeys = env.array('APP_KEYS', ['defaultKey1', 'defaultKey2']); // Fallback keys

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1338),
    app: {
      keys: appKeys,
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
  };
};
