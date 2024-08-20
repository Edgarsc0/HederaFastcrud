import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardProyect({ proyectInfo }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle asChild>
          <span className="bg-gradient-text-steps">{proyectInfo.name}</span>
        </CardTitle>
        <CardDescription asChild>
          <div className="flex items-center mt-2 overflow-hidden">
            <Button variant="ghost">
              <span className="text-white">Copy idConnection</span>
            </Button>
            <p>{proyectInfo.IDconnection}</p>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex w-2 h-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Database</p>
              <p className="text-sm text-muted-foreground">
                {proyectInfo.db_type}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <a href={`/dashboard/${proyectInfo.IDconnection}`} className="w-full">
          <Button className="w-full" variant="outline">
            Go to {proyectInfo.name}
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
