var config = {};

// Set the monogo URI
config.mongoUri = 'mongodb://localhost:27017/fullstack'
// Cookies last 30 days for session
config.cookieMaxAge = 30 * 24 * 3600 * 1000;

module.exports = config;