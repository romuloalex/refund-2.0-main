import axios from "axios"; // biblioteca cliente HTTP

// criar uma instância axios pré-configurada com a URL base do backend
export const api = axios.create({
  baseURL: "http://localhost:3333",
});
/* usar uma instância compartilhada permite definir cabeçalhos padrão (como autorização)
   e simplesmente importar `api` onde for necessário fazer requisições. */
