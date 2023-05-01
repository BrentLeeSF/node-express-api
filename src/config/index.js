const Pool = require('pg-pool');

const pool = new Pool({
  user: 'brentrucker',
  host: 'localhost',
  database: 'brentrucker',
  password: undefined,
  port: 5432,
});

module.exports = {
  pool
}
