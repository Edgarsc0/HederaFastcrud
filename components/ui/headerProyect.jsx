"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useSession } from "next-auth/react";

export default function ({ proyectInfo }) {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });

  return (
    <>
      <Breadcrumb className="mx-2 mb-2">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {session?.user.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {proyectInfo.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Alert>
        <Terminal className="w-4 h-4 mt-2" />
        <AlertTitle className="text-2xl font-semibold tracking-tight scroll-m-20">
          <span className="bg-gradient-text-steps">Proyect name</span>
        </AlertTitle>
        <AlertDescription className="flex items-center justify-between mt-2">
          <div>
            Identificador de la conexion:{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {proyectInfo.IDconnection}
            </code>
            <div className="mb-4 mt-2 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
              <span className="flex w-2 h-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  {proyectInfo.db_type}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center h-16 mr-5">
            <img
              src={proyectInfo.db_type=="mysql"?`/mysql.png`:`/sql-server.png`}
              alt="Database"
              className="w-full h-full max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
            />
          </div>
        </AlertDescription>
      </Alert>
    </>
  );
}
