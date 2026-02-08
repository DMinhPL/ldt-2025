module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '13.238.205.75'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'ldt_dev'),
        username: env('DATABASE_USERNAME', 'ldt_dev_admin'),
        password: env('DATABASE_PASSWORD', 'sb7h0t82ry'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
