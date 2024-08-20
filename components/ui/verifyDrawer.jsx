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
import { Button } from "@/components/ui/button";
import { CircularProgress } from "@mui/material";

export default function ({ onSubmit }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button
          onClick={onSubmit}
          className="px-4 py-2 text-black transition-all border border-transparent rounded-md button-fill bg-gradient-text-button"
        >
          <span>Test Connection</span>
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-full max-w-sm mx-auto">
          <DrawerHeader>
            <DrawerTitle>Comprobando credenciales</DrawerTitle>
            <DrawerDescription>
              Intentando conectar con base de datos{" "}
              <span className="font-semibold bg-gradient-text-steps">bd</span>
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex items-center justify-center">
            <CircularProgress />
          </div>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline" className="w-full">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
