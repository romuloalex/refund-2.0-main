import { Routes, Route } from "react-router"; // componentes básicos de rotas
import { SignIn } from "../pages/SignIn"; // página de login
import { AuthLayout } from "../components/AuthLayout"; // layout usado nas páginas de autenticação
import { SignUp } from "../pages/SignUp"; // página de cadastro
import { NotFound } from "../pages/NotFound"; // fallback para caminhos desconhecidos

// rotas que devem ser usadas quando o usuário não está autenticado
export function AuthRoutes() {
  return (
    <Routes>
      {/* todas as rotas de auth compartilham o AuthLayout */}
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SignIn />}></Route>{" "}
        {/* formulário de login padrão */}
        <Route path="/signup" element={<SignUp />}></Route>{" "}
        {/* formulário de cadastro */}
      </Route>

      {/* qualquer outra coisa vai para 404 */}
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
