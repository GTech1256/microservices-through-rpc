const bcrypt = require('bcrypt');
const serverConfig = require('../config/server');

const secretHash = bcrypt.hashSync(serverConfig.secret || 'secret', serverConfig.saltRounds || 10)

module.exports = {
  secretHash,
  isCorrectHash: async (hash = '') => await bcrypt.compare(serverConfig.secret, hash)
}