import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function middleware(request) {
    // Obtener el token de autenticación con NextAuth.js

    const { pathname } = request.nextUrl;
    console.log(pathname);
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    if (pathname == "/profile") {

        /*if (token.email == "sanchez.catarino.edgar2005@gmail.com") {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }*/

        console.log("middleware de /profile");
        // Si el usuario no está autenticado (no registrado), continuar con el flujo predeterminado (ir a /profile)
        return NextResponse.next();
    }
    if (pathname.startsWith("/api/fastcrud/connections/") && pathname != "/api/fastcrud/connections/getProyectInfo") {
        if (request.headers.get("Authorization") != process.env.NEXTAUTH_SECRET) {
            //No se envio desde la aplicacion por lo que se descuentan tokens
            console.log("middleware de api");

            const hederaId = request.headers.get("HederaId");
            const hederaPrivate = request.headers.get("HederaPrivate");

            await axios.post("https://hedera-fastcrud.vercel.app/api/hedera", {
                hederaId, hederaPrivate
            });
            return NextResponse.next();

        }
        return NextResponse.next();
    }
    return NextResponse.next();
}

export const config = {
    // Aplicar el middleware únicamente a la ruta /profile
    matcher: [
        '/profile',
        '/api/fastcrud/connections/:idConnection*'
    ],
};
