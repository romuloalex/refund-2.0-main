import { Routes, Route } from "react-router"; // componentes de roteamento
import { Refund } from "../pages/Refund"; // página de criação de reembolso
import { NotFound } from "../pages/NotFound"; // página 404
import { AppLayout } from "../components/AppLayout"; // layout usado por usuários logados
import { Confirm } from "../pages/Confirm"; // página de sucesso após envio

// rotas disponíveis para funcionários (usuários básicos)
export function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Refund />}></Route>{" "}
        {/* formulário principal */}
        <Route path="/confirm" element={<Confirm />}></Route>{" "}
        {/* somente acessível após enviar */}
      </Route>
      <Route path="*" element={<NotFound />}></Route> {/* fallback */}
    </Routes>
  );
}
