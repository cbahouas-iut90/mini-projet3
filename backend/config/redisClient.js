const Redis = require('ioredis');
const redis = new Redis(); // par défaut sur localhost:6379

module.exports = redis;
