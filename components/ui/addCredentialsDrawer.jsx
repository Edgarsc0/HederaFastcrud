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
import { Label } from "./label";
import { Input } from "./input";
import { Box } from "@radix-ui/themes";
import VerifyDrawer from "./verifyDrawer";

export default function AddCredentialsDrawer({ register, errors, onSubmit }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="w-full px-4 py-1 text-black transition-all border border-transparent rounded-md button-fill bg-gradient-text-button">
          <span>Add Credentials</span>
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <Box width="70%" className="px-4 mx-auto mt-5">
          <DrawerHeader>
            <DrawerTitle>
              Add credentials for your{" "}
              <span className="bg-gradient-text-steps">project</span>
            </DrawerTitle>
            <DrawerDescription>
              Fill the inputs with your credentials so we can test the
              connection.
            </DrawerDescription>
          </DrawerHeader>
          <div className="grid gap-4 mb-2">
            <div className="grid gap-2 px-4">
              <div className="grid items-center grid-cols-3 gap-4">
                <Label htmlFor="host">Host</Label>
                <Input
                  id="host"
                  placeholder="Database host"
                  className="h-8 col-span-2"
                  {...register("host", { required: "Host is required" })}
                />
                {errors.host && (
                  <p className="col-span-3 text-red-500">
                    {errors.host.message}
                  </p>
                )}
              </div>

              <div className="grid items-center grid-cols-3 gap-4">
                <Label htmlFor="database">Database</Label>
                <Input
                  id="database"
                  placeholder="Database name"
                  className="h-8 col-span-2"
                  {...register("databasename", {
                    required: "Database name is required",
                  })}
                />
                {errors.database && (
                  <p className="col-span-3 text-red-500">
                    {errors.database.message}
                  </p>
                )}
              </div>

              <div className="grid items-center grid-cols-3 gap-4">
                <Label htmlFor="port">Port</Label>
                <Input
                  id="port"
                  placeholder="Database port"
                  className="h-8 col-span-2"
                  {...register("port", { required: "Port is required" })}
                />
                {errors.port && (
                  <p className="col-span-3 text-red-500">
                    {errors.port.message}
                  </p>
                )}
              </div>

              <div className="grid items-center grid-cols-3 gap-4">
                <Label htmlFor="user">User</Label>
                <Input
                  id="user"
                  placeholder="Database user"
                  className="h-8 col-span-2"
                  {...register("user", { required: "User is required" })}
                />
                {errors.user && (
                  <p className="col-span-3 text-red-500">
                    {errors.user.message}
                  </p>
                )}
              </div>

              <div className="grid items-center grid-cols-3 gap-4">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Database password"
                  className="h-8 col-span-2"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="col-span-3 text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <DrawerFooter>
            <VerifyDrawer onSubmit={onSubmit} />
            <DrawerClose>
              <Button variant="outline" className="w-full">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </Box>
      </DrawerContent>
    </Drawer>
  );
}
