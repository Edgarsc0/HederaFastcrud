import sql from "mssql";

export const types = {
    int: sql.Int,
    varchar: sql.VarChar,
    datetime: sql.DateTime,
    date: sql.Date
}
