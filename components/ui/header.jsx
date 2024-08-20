import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function ({ user }) {
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
              {user?.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Alert>
        <Terminal className="w-4 h-4 mt-2" />
        <AlertTitle className="text-2xl font-semibold tracking-tight scroll-m-20">
          Bienvenido a{" "}
          <span className="bg-gradient-text-steps">fastcrud {user?.name}</span>
        </AlertTitle>
        <AlertDescription className="mt-2">
          Aqui podras visualizar todos tus CRUDs. Si necesitas agregar uno mas
          ¡adelante!
        </AlertDescription>
      </Alert>
    </>
  );
}
