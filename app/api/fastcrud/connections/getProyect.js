import con from "../../db/config";

export async function getProyect(idConexion) {
    const query = "select * from proyects where IDconnection=?";
    try {
        const [rows, fields] = await con.execute(query, [idConexion]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener informacion sobre el proyecto: ${error}`);
    }
}