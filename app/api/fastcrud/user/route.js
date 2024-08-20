import { NextResponse } from "next/server";
import con from "../../db/config";
import transferToken from "../../hedera/transferToken";

export async function POST(request) {
    const { googleInfo, hederaInfo } = await request.json();
    const { id, privateKey } = hederaInfo;
    await transferToken(id, privateKey, process.env.CREATE_TOKEN_ID);
    try {

        const query = "insert into users(name,email,image,hedera_id,hedera_private_key) values(?,?,?,?,?)";
        const [rows, fields] = await con.execute(query, [...Object.values(googleInfo), ...Object.values(hederaInfo)]);
        return NextResponse.json({
            status: rows
        });
    } catch (err) {
        throw new Error(`No se ha podido ingresar al usuario ${err}`);
    }
}