import { NextResponse } from "next/server";
import { getProyect } from "../getProyect";
import jsonwebtoken from "jsonwebtoken";
import { getTables } from "../getTables";

export async function POST(request) {
    const { idConexion } = await request.json();
    const proyect = await getProyect(idConexion);
    const { credentials: jwt } = proyect[0];
    const credentials = jsonwebtoken.verify(jwt, process.env.NEXTAUTH_SECRET);
    const tables = await getTables(proyect[0].db_type, credentials);
    return NextResponse.json({ proyectInfo: proyect[0], tables });
}