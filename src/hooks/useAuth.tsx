import { use } from "react"; // hook do React usado para ler contexto
import { AuthContext } from "../contexts/AuthContext"; // o contexto que criamos anteriormente

// hook customizado que simplesmente retorna o valor de AuthContext
// usar este hook torna os componentes mais curtos e claros
export function useAuth() {
  const context = use(AuthContext);

  return context;
}
