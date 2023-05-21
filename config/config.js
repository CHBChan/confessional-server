require('dotenv').config();

module.exports = {
  "development": {
    "username": "postgres",
    "password": "password",
    "database": "postgres",
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DATABASE,
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        required: true,
        rejectedUnauthorized: false
      }
    }
  }
};
