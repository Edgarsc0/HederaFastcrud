import CardTable from "./cardTable";

export default function ({ tables, proyectInfo }) {
  return (
    <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 lg:grid-cols-3 ">
      {tables.map((table) => (
        <CardTable key={table} name={table} proyectInfo={proyectInfo} />
      ))}
    </div>
  );
}
