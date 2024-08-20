import mysql2 from "mysql2/promise";

const pool = mysql2.createPool(({
    host: "autorack.proxy.rlwy.net",
    user: "root",
    database: "fastcrud",
    password: "VfqRyAJFaoEfrmGdWtmlABPAwlXPGuSc",
    port: 51495
}));

const con = await pool.getConnection();

export default con;