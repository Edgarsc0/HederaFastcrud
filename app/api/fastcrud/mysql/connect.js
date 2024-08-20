import mysql2 from "mysql2/promise";

export async function ConnectMysql(config) {
    try {
        const pool = mysql2.createPool(config);
        const con = await pool.getConnection();
        return con;
    } catch (err) {
        throw new Error(`No se ha podido conectar con la bd ${err.message}`);
    }
}