const { Pool } = require("pg")

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "hw10",
    password: "admin123",
    port: 5432
})

module.exports=pool;