export default function EmptyProyects() {
  return (
    <div className="fixed inset-0 flex justify-center items-center text-center">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl bg-gradient-text-steps">
          ¡Aqui no hay nada!
        </h1>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight mt-4">
          Comencemos creando un nuevo{" "}
          <span className="bg-gradient-text-steps">proyecto</span>
        </h2>
      </div>
    </div>
  );
}
