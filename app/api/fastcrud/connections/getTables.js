import { ConnectMysql } from "../mysql/connect";
import { ConnectSQLServer } from "../sqlserver/connect";

export async function getTables(db_type, credentials) {

    let query, tables;

    switch (db_type) {
        case "mysql":
            query = "show tables";
            const con = await ConnectMysql(credentials);
            const [rows, fields] = await con.execute(query);
            tables = rows.map(item => item = Object.values(item)[0]);
            return tables;
        case "sqlserver":
            const pool = await ConnectSQLServer(credentials);
            query = "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'";
            const { recordset } = await pool.query(query);
            const tables = recordset.map(item => item = Object.values(item)[0]);
            return tables
    }
}