import {
  Table,
  TableBody,  
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";

export default async function ({ proyectInfo, table }) {
  const { data } = await axios.get(
    `http://localhost:3000/api/fastcrud/connections/${proyectInfo.IDconnection}/${table}`,
    {
      headers:{
        "Authorization":process.env.NEXTAUTH_SECRET
      }
    }
  );
  return (
    <>
      {data ? (
        <Table>
          <TableHeader>
            <TableRow>
              {Object.keys(data.response[0]).map((key) => (
                <TableHead key={key}>{key}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.response.map((row, index) => (
              <TableRow key={index}>
                {Object.values(row).map((value, index) => (
                  <TableCell key={index}>{value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : null}
    </>
  );
}
