require('dotenv').config()
console.log(process.env.DATABASE_URL)

module.exports = {
  "development": {
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
  },
  "staging": {
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
  },
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