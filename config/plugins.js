module.exports = ({ env }) => {
  const jwtSecret = env('JWT_SECRET');
  console.log('JWT_SECRET loaded:', jwtSecret ? 'YES' : 'NO');
  return {
    'users-permissions': {
      config: {
        jwtSecret,
      },
    },
  };
};
