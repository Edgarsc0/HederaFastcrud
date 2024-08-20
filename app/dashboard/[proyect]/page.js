import HeaderProyect from "@/components/ui/headerProyect"
import Tables from "@/components/ui/tables"
import axios from "axios";

export default async function ({ params }) {
    const { proyect } = params;
    const { data } = await axios.post("http://localhost:3000/api/fastcrud/connections/getProyectInfo", { idConexion: proyect });
    const { proyectInfo, tables } = data;
    return (
        <>
            <HeaderProyect proyectInfo={proyectInfo} />
            <Tables tables={tables} proyectInfo={proyectInfo} />
        </>
    )
}