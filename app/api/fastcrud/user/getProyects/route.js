import con from "@/app/api/db/config";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { userId } = await request.json();
    
    const query = "select * from proyects where user_id=?";
    try {
        const [rows, fields] = await con.execute(query, [userId]);        
        return NextResponse.json({
            proyects: rows
        });
    } catch (error) {
        throw new Error(`No se pudo obtener los proyectos del usuario ${error.message}`);
    }

}