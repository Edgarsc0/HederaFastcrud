import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./button";
import TableInfo from "./TableInfo";

export default function ({ table, proyectInfo }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full" variant="secondary">
          See info table
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-1 mb-10">
        <DrawerHeader>
          <DrawerTitle>Table information</DrawerTitle>
          <DrawerDescription>Information in the table:</DrawerDescription>
        </DrawerHeader>
        <TableInfo proyectInfo={proyectInfo} table={table} />
      </DrawerContent>
    </Drawer>
  );
}
