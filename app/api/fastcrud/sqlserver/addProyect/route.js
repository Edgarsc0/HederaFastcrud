import { ConnectSQLServer } from "../connect";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers';
import con from "@/app/api/db/config";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

export async function POST(request) {
    const { database: type, databasename: database, host: server, name, password, port, user } = await request.json();
    try {
        await ConnectSQLServer({
            user,
            password,
            database,
            server,
            port,
        });
        const cookieStore = cookies();
        const userId = cookieStore.get('userid').value;
        const cadena = `${server}-${user}-${database}-${password}-${port}`;
        const idConexion = CryptoJS.SHA1(cadena).toString();
        const token = jwt.sign({
            server,
            port,
            password,
            user,
            database
        }, process.env.NEXTAUTH_SECRET);
        const query = "insert into proyects(user_id,name,db_type,IDconnection,credentials) values(?,?,?,?,?)";
        const [rows, fields] = await con.execute(query, [userId, name, type, idConexion, token]);
        return NextResponse.json({ rows });
    } catch (error) {
        console.log(error);
        throw new Error({ error });
    }
}