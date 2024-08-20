import { useForm } from "react-hook-form";
import { PackagePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AddCredentialsDrawer from "./addCredentialsDrawer";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "./button";
import axios from "axios";
import { toast } from "sonner";

export default function DialogForm() {
  // Inicializar react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post(`/api/fastcrud/${data.database}/addProyect`, data);
      window.location.reload();
    } catch (err) {
      toast(`Algo ocurrio mal: ${err}`);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="absolute flex items-center justify-center w-16 h-16 mr-2 text-white bg-blue-500 rounded-full shadow-lg bg-gradient-text-button bottom-4 right-4">
          <PackagePlus size={48} strokeWidth={0.5} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle asChild>
            <span className="bg-gradient-text-steps">Create a project</span>
          </DialogTitle>
          <DialogDescription>
            Indica el nombre del proyecto y la base de datos que utilizas.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-2">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter a project name"
              className="col-span-3"
              {...register("name", { required: "Project name is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="database" className="text-right">
              Database
            </Label>
            <Select onValueChange={(value) => setValue("database", value)}>
              <SelectTrigger id="framework" className="col-span-3">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="mysql">MySQL</SelectItem>
                <SelectItem value="sqlserver">SQL Server</SelectItem>
                <SelectItem value="postgre">PostgreSQL</SelectItem>
              </SelectContent>
            </Select>
            {errors.database && (
              <p className="text-red-500">{errors.database.message}</p>
            )}
          </div>
          <DialogFooter>
            <DialogClose>
              <Button variant="outline" className="w-full">
                Cancel
              </Button>
            </DialogClose>
            <AddCredentialsDrawer
              errors={errors}
              register={register}
              onSubmit={handleSubmit(onSubmit)}
            />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
