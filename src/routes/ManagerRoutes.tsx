import { Route, Routes } from "react-router"; // componentes de roteamento
import { Dashboard } from "../pages/Dashboard"; // página de painel do gerente
import { NotFound } from "../pages/NotFound"; // página 404
import { AppLayout } from "../components/AppLayout"; // layout para usuários logados
import { Refund } from "../pages/Refund"; // página de detalhes/criação de reembolso

export function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />}></Route>{" "}
        {/* lista de reembolsos */}
        <Route path="/refund/:id" element={<Refund />}></Route>{" "}
        {/* visualizar um reembolso específico */}
      </Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>{" "}
      {/* captura tudo */}
    </Routes>
  );
}
