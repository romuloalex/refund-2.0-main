import { Navigate, useLocation } from "react-router"; // auxiliares de navegação
import okSvg from "../assets/ok.svg"; // ícone de sucesso

export function Confirm() {
  const location = useLocation(); // gives access to navigation state

  // Se esta página não foi alcançada enviando um formulário, redirecionar para casa.
  // location.state.fromSubmit é definido apenas após um envio bem sucedido.
  if (!location.state?.fromSubmit) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-gray-500 lg:w-[512px] rounded-xl flex flex-col items-center p-10 gap-6">
      <h1 className="text-2xl font-bold text-center text-green-100">
        Solicitação enviada!
      </h1>

      <img src={okSvg} alt="Ícone de ok" className="w-28" />

      <p className="text-sm text-gray-200 text-center">
        Agora é apenas aguardar! Sua solicitação será analisada, em breve, o
        setor financeiro irá entrar em contato com você.
      </p>

      <a
        href="/"
        className="w-full p-3 text-center bg-green-100 rounded-lg text-white hover:bg-green-200 transition ease-linear"
      >
        Nova solicitação
      </a>
    </div>
  );
}
