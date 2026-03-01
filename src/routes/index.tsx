import { BrowserRouter } from "react-router"; // roteador que usa a API de histórico HTML5
import { AuthRoutes } from "./AuthRoutes"; // rotas exibidas quando não autenticado
import { EmployeeRoutes } from "./EmployeeRoutes"; // rotas para funcionários
import { ManagerRoutes } from "./ManagerRoutes"; // rotas para gerentes
import { Loading } from "../components/Loading"; // indicador de carregamento em tela inteira
import { useAuth } from "../hooks/useAuth"; // hook customizado para acessar o estado de auth

export function Routes() {
  const { session, isLoading } = useAuth(); // obtém informações da sessão e indicador de carregamento

  function Route() {
    // decide qual conjunto de rotas renderizar com base na função do usuário
    switch (session?.user.role) {
      case "employee":
        return <EmployeeRoutes />;
      case "manager":
        return <ManagerRoutes />;
      default:
        return <AuthRoutes />;
    }
  }

  if (isLoading) {
    // enquanto verificamos o localStorage em busca de sessão existente
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Route></Route> {/* componente placeholder função acima */}
    </BrowserRouter>
  );
}
