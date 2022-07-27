require('dotenv').config()

module.exports = {
  "development": {
    "username": "postgres",
    "password": "password",
    "database": "wisper-local",
    "host": "localhost",
    "dialect":"postgres",
    "protocol":"postgres",
    "port": "5432"
  },
  // I would much prefer just using DATABASE_URL, but due to a bug that won't work.
  "production": {
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASS,
    "database": process.env.DATABASE_DATA,
    "host": process.env.DATABASE_HOST,
    "dialect":"postgres",
    "protocol":"postgres",
    "port": process.env.DATABASE_PORT, 
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  }
}