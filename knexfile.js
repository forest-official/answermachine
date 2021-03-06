// Update with your config settings.

require('@babel/register');
const config = require('./lib/config').default;

module.exports = {
	development: config.knex,
	staging: config.knex,
	testing: config.knex,
	production: config.knex,
};
