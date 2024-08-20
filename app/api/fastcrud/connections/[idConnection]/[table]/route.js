import { NextResponse } from "next/server";
import { getProyect } from "../../getProyect";
import { ConnectMysql } from "../../../mysql/connect";
import jsonwebtoken from "jsonwebtoken";
import { ConnectSQLServer } from "../../../sqlserver/connect";
import { types } from "../../../sqlserver/types";

export async function GET(request, { params }) {
    const { idConnection, table } = params;
    const proyect = await getProyect(idConnection);
    const { credentials: jwt } = proyect[0];
    const credentials = jsonwebtoken.verify(jwt, process.env.NEXTAUTH_SECRET);
    const { searchParams } = new URL(request.url);
    let query;
    switch (proyect[0].db_type) {
        case "mysql":
            const con = await ConnectMysql(credentials);
            if (searchParams.toString() != "") {
                const parameters = Object.fromEntries(searchParams.entries());
                const whereClause = Object.keys(parameters).map(key => key = `${key}=?`).join(" and ");
                query = `select * from ${table} where ${whereClause}`;
                const [rows, fields] = await con.execute(query, Object.values(parameters));
                return NextResponse.json({ response: rows });
            }
            query = `select * from ${table}`;
            const [rows, fields] = await con.execute(query);
            return NextResponse.json({ response: rows });
        case "sqlserver":
            const pool = await ConnectSQLServer(credentials);
            if (searchParams.toString() != "") {
                const whereClause = JSON.parse(Object.fromEntries(searchParams.entries()).search).map(item => `${item.name}=@${item.name}`).join(" and ");
                query = `select * from ${table} where ${whereClause}`;
                const req = pool.request();
                JSON.parse(Object.fromEntries(searchParams.entries()).search).map(param => req.input(param.name, types[param.type], param.value));
                const response = await req.query(query);
                return NextResponse.json({ response: response.recordset });
            }
            query = `select * from ${table}`;
            const response = await pool.request().query(query);
            return NextResponse.json({ response: response.recordset });
    }
}

export async function POST(request, { params }) {

    const { idConnection, table } = params;
    const proyect = await getProyect(idConnection);
    const { credentials: jwt } = proyect[0];
    const credentials = jsonwebtoken.verify(jwt, process.env.NEXTAUTH_SECRET);
    const { post } = await request.json();
    switch (proyect[0].db_type) {
        case "mysql":
            try {
                if (post.length != 0) {
                    const con = await ConnectMysql(credentials);
                    const fieldsClause = Object.keys(post[0]);
                    const valuesClause = `(${post.map(row => Object.values(row).map(row => row = "?").join(",")).join('),(')})`;
                    const query = `insert into ${table}(${fieldsClause}) values${valuesClause}`;
                    const values = post.map(row => row = Object.values(row)).flat();
                    const [rows, fields] = await con.execute(query, values);
                    return NextResponse.json({ response: rows });
                }
            } catch (error) {
                return NextResponse.json({ response: "No post provided" });
            }
            return NextResponse.json({ response: "No info provided" });
        case "sqlserver":
            const fields = post[0].map(field => field.name).join(",");
            const valuesClause = post.map((row, rowIndex) => `(${row.map((item, index) => `@valor${rowIndex + 1}${index + 1}`).join(',')})`);
            const query = `insert into ${table}(${fields}) values${valuesClause}`;
            const pool = await ConnectSQLServer(credentials);
            const req = pool.request();
            post.map((row, rowIndex) => row.map((item, index) => req.input(`valor${rowIndex + 1}${index + 1}`, types[item.type], item.value)));
            const response = await req.query(query);
            return NextResponse.json({ response });
    }
}

