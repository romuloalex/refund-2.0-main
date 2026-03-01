import { Outlet } from "react-router"; // Outlet é um espaço reservado onde rotas aninhadas são renderizadas
import { Header } from "./Header"; // importa o componente de cabeçalho

export function AppLayout() {
  return (
    /* A div externa ocupa a tela inteira, define fundo e texto e usa layout flex */
    <div className="w-screen h-screen bg-gray-400 flex flex-col items-center text-gray-100">
      <main className="p-3 w-full md:w-auto">
        <Header></Header> {/* sempre mostra o cabeçalho no topo */}
        <Outlet></Outlet> {/* rotas aninhadas aparecerão aqui */}
      </main>
    </div>
  );
}
