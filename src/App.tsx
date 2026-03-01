import { Routes } from "./routes"; // traz o componente que lida com toda a navegação
import { AuthProvider } from "./contexts/AuthContext"; // provider que compartilha estado de autenticação

export function App() {
  return (
    // Envolve a aplicação em AuthProvider para que qualquer filho possa acessar informações de auth
    <AuthProvider>
      <Routes></Routes>{" "}
      {/* Renderiza a árvore de rotas baseada na sessão/autenticação */}
    </AuthProvider>
  );
}
