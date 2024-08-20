"use client";

import { Box, Grid } from "@radix-ui/themes";
import { signIn } from "next-auth/react";

export default function () {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <Box width="70%" className="px-4 mx-auto mt-5">
        <Grid
          columns={{ base: "1", md: "2" }}
          gap="2"
          width="auto"
          className="w-full"
        >
          <div className="flex items-center justify-center h-full">
            <img
              src="database.png"
              alt="Database"
              className="w-full max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-sm xl:max-w-md"
            />
          </div>
          <div className="flex items-center justify-center h-full">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl bg-gradient-text-steps">
                Fastcrud
              </h1>
              <h2 className="pb-2 mt-4 text-3xl font-semibold tracking-tight border-b scroll-m-20">
                La solución definitiva para la generación automática de{" "}
                <span className="bg-gradient-text-steps">CRUD</span>
              </h2>
              <p className="mt-6 leading-7">
                ¿Te cansa pasar horas creando las operaciones básicas para cada
                nueva base de datos? FastCRUD está aquí para revolucionar tu
                flujo de trabajo. Con FastCRUD, solo necesitas proporcionar las
                credenciales de tu base de datos y nuestra aplicación generará
                automáticamente el CRUD completo para ti.
              </p>

              <button
                onClick={() => signIn("google", { callbackUrl: "/profile" })}
                className="w-full px-4 py-2 mt-2 font-semibold text-black transition-all border border-transparent rounded-md button-fill bg-gradient-text-button"
              >
                <span>Comencemos</span>
              </button>
            </div>
          </div>
        </Grid>
      </Box>
    </div>
  );
}
