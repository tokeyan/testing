const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "asset",
    password: "yazhini15",
    port: 5432
})

module.exports = pool