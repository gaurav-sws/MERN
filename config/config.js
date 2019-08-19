const env = require("dotenv");
env.config();
const envVar = process.env;
const configuration = Object.freeze({
  port: envVar.PORT,
  mongoURI: envVar.mongoURI,
  secretKey: envVar.secret_key
});

module.exports = configuration;
