const fs= require('fs');
require('dotenv').config();

 module.exports={
  "development": {
    "username":process.env.USERNAME_DB_DEV,
    "password":process.env.PASSWORD_DB_DEV,
    "database": process.env.DATABASE_DB_DEV,
    "host": process.env.HOST_DB_DEV,
    "dialect": "mysql",
    "port": process.env.PORT_DB_DEV,
    "dialectOptions":{
      "bigNumberStrings":true
    }
  },
  "test": {
    "username": process.env.USERNAME_DB_TEST,
    "password": process.env.PASSWORD_DB_TEST,
    "database": process.env.DATABASE_DB_TEST,
    "host": process.env.HOST_DB_TEST,
    "dialect": "mysql",
    "port": process.env.PORT_DB_TEST,
    "dialectOptions":{
      "bigNumberStrings":true
    }
  },
  "production": {
    "username": process.env.USERNAME_DB_PROD,
    "password": process.env.PASSWORD_DB_PROD,
    "database": process.env.DATABASE_DB_PROD,
    "host": process.env.HOST_DB_PROD,
    "dialect": "mysql",
    "port": process.env.PORT_DB_PROD,
    "dialectOptions":{
      "bigNumberStrings":true
    }
  }
 }

  

