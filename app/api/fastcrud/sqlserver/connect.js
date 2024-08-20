import sql from "mssql";

export async function ConnectSQLServer(config) {
    try {
        const sqlConfig = {
            ...config,
            options: {
                encrypt: false,
                trustServerCertificate: true
            },
        };
        const pool = await sql.connect(sqlConfig);
        
        return pool;
    } catch(err) {
        throw new Error(`No se ha podido conectar con la bd ${err.message}`);
    }
}