import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./badge";
import DialogTableInfo from "./DrawerTableInfo";

export default function CardTable({ name, proyectInfo }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle asChild>
          <span className="bg-gradient-text-steps">{name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        <Badge variant="secondary">GET</Badge>
        <Badge variant="secondary">POST</Badge>
        <Badge variant="secondary">DELETE</Badge>
        <Badge variant="secondary">PUT</Badge>
        <div className="mb-4 mt-2 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
          <span className="flex w-2 h-2 translate-y-1 rounded-full bg-sky-500" />
          <div className="space-y-1">
            Endpoint
            <p className="text-sm text-muted-foreground">
              /api/fastcrud/connections/idCon/{name}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <DialogTableInfo table={name} proyectInfo={proyectInfo} />
      </CardFooter>
    </Card>
  );
}
