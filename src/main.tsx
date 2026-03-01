import { StrictMode } from "react"; // StrictMode ajuda a encontrar possíveis problemas durante o desenvolvimento
import { createRoot } from "react-dom/client"; // createRoot é usado para anexar o React ao DOM
import "./index.css"; // importa a folha de estilos global; sem ela o app fica sem estilo
import { App } from "./App.tsx"; // importa o componente raiz App que contém toda a UI

// A linha seguinte encontra o elemento HTML com id 'root' e diz ao TypeScript que ele definitivamente existe.
// Em seguida cria uma raiz React nesse elemento e renderiza nosso componente de aplicação.
// Sem isso, o React não teria onde exibir a interface.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
