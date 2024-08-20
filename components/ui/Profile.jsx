import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { setCookie } from "cookies-next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";

// Definición de los campos del formulario
const defaultValues = {
  id: "",
  privateKey: "",
};

export default function ProfileForm({ session }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  // Manejar el envío del formulario
  const onSubmit = async (formInfo) => {
    try {
      const { data } = await axios.post("/api/fastcrud/user", {
        googleInfo: session,
        hederaInfo: formInfo,
      });
      console.log(data);
      setCookie("userid", data.status.insertId, {
        maxAge: 864000, // 10 días en segundos
        path: "/", // Disponible en todo el sitio
      });
      window.location.href = "/dashboard";
    } catch (err) {
      console.log(err);
      toast(`An error has ocurred ${err}`);
    }

    // Lógica adicional para manejar los datos (p.ej. enviarlos a la API)
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Let's complete your profile</CardTitle>
        <CardDescription>
          Fill the inputs with your Hedera's information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid items-center w-full gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="id">Hedera user ID</Label>
              <Input
                id="id"
                placeholder="0.0.aaaaaaa"
                {...register("id", { required: "Hedera user ID is required" })}
              />
              {errors.id && (
                <span className="text-red-500">{errors.id.message}</span>
              )}
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="privateKey">Hedera private user key</Label>
              <Input
                id="privateKey"
                placeholder="DER Encoded Private Key"
                {...register("privateKey", {
                  required: "Private key is required",
                })}
              />
              {errors.privateKey && (
                <span className="text-red-500">
                  {errors.privateKey.message}
                </span>
              )}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          className="w-full"
          onClick={handleSubmit(onSubmit)}
        >
          Register
        </Button>
      </CardFooter>
    </Card>
  );
}
