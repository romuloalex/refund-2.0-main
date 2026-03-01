# 📚 COMENTÁRIOS DETALHADOS DOS ARQUIVOS - SRC

Bem-vindo a uma jornada completa pela arquitetura deste projeto! Vou comentar cada arquivo linha por linha, explicando como se você fosse iniciante, com exemplos práticos e analogias simples.

---

## 📁 ARQUIVOS RAIZ

### 1️⃣ `src/main.tsx` - O Ponto de Entrada da Aplicação

```tsx
// Linha 1-2: Importando hooks do React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
```

**O que faz:** Importa duas ferramentas essenciais do React.

- **`StrictMode`** = Um "instrutor rigoroso" que avisa sobre problemas no código durante o desenvolvimento
- **`createRoot`** = A função que cria a raiz da aplicação (o ponto de partida)

**Por que existe:** Sem isso, o React não seria carregado e nada funcionaria.

**Se fosse removida:** ❌ A aplicação inteira quebraria porque React não estaria disponível.

**Analogia:** Imagine uma cozinha. `createRoot` é a tomada elétrica, `StrictMode` é o inspetor de qualidade que verifica se tudo está certo.

---

```tsx
// Linha 3: Importando o arquivo de estilos CSS global
import "./index.css";
```

**O que faz:** Carrega todos os estilos CSS da aplicação (cores, fontes, layout base).

**Por que existe:** Para que a aplicação tenha visual bonito e bem formatado.

**Se fosse removida:** ❌ A aplicação ficaria sem estilos, com letras feias e cores padrão do navegador.

**Analogia:** Como colocar um terno em uma pintura - sem isso, parece desorganizada.

---

```tsx
// Linha 4: Importando o componente principal da aplicação
import { App } from "./App.tsx";
```

**O que faz:** Importa o componente `App` que é o coração da aplicação.

**Por que existe:** Precisa do App para saber o que colocar na tela.

**Se fosse removida:** ❌ Nada seria exibido, tela em branco.

**Analogia:** Como pegar um prato principal de um cardápio - sem isso, a refeição não começa.

---

```tsx
// Linha 6-10: Criando e renderizando a aplicação React
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

**O que faz em detalhes:**

1. `createRoot()` - Cria a raiz React
2. `document.getElementById('root')!` - Encontra o elemento HTML com id="root" no arquivo `index.html`
3. `.render()` - Coloca os componentes React dentro daquele elemento
4. `<StrictMode>` - Envolve tudo em um "modo rigoroso" que detecta problemas
5. `<App />` - Coloca o componente App dentro

**Por que existe:** Este é o "ponto de ligação" entre o React (JavaScript) e o HTML.

**Se fosse removida:** ❌ React não saberia onde colocar os componentes na página.

**Analogia:** É como um fotógrafo que precisa de uma câmera (React) E um tripé (DOM HTML) para tirar a foto.

**O que é `!`:** O ponto de exclamação significa "confio que isso sempre estará aqui, não é nulo" - é um recurso do TypeScript.

---

### 2️⃣ `src/App.tsx` - O Organizador Geral

```tsx
// Linha 1: Importando o componente que gerencia as rotas
import { Routes } from "./routes";
```

**O que faz:** Importa o componente que controla quais páginas mostrar.

**Por que existe:** Assim como uma estação de trem direciona trens para trilhos diferentes, `Routes` direciona o usuário para páginas diferentes (login, dashboard, etc).

**Se fosse removida:** ❌ Não haveria sistema de navegação, o usuário ficaria preso em uma página.

---

```tsx
// Linha 2: Importando o provider de autenticação
import { AuthProvider } from "./contexts/AuthContext";
```

**O que faz:** Importa o sistema que controla quem está logado e quem não está.

**Por que existe:** Precisa compartilhar informações de login com toda a aplicação.

**Se fosse removida:** ❌ Ninguém conseguiria fazer login na aplicação.

**Analogia:** É como o gerente de um clube que verifica se você é membro antes de deixar entrar.

---

```tsx
// Linhas 4-10: Componente principal que organiza tudo
export function App() {
  return (
    <AuthProvider>
      {" "}
      {/* Fornece autenticação para todos os filhos */}
      <Routes></Routes> {/* Mostra a rota apropriada baseada no usuário */}
    </AuthProvider>
  );
}
```

**O que faz:** Cria a estrutura principal:

1. `AuthProvider` envolve tudo - "fornece" acesso a informações de login
2. `Routes` fica dentro - mostra diferentes páginas conforme necessário

**Por que existe:** É a organização lógica. Tudo passa por autenticação primeiro, depois rotas.

**Se fosse removida:** ❌ A aplicação não funcionaria - sem estrutura base, não há nada.

**Analogia:** É como uma árvore genealógica - `AuthProvider` é o tronco, `Routes` são os galhos.

---

### 3️⃣ `src/index.css` - Os Estilos e Temas

```css
// Linha 1: Importando o Tailwind CSS
@import "tailwindcss";
```

**O que faz:** Carrega um framework CSS chamado Tailwind que oferece "atalhos" para estilos.

**Por que existe:** Tailwind oferece classes prontas (como `bg-green-100`, `text-gray-100`) em vez de você escrever CSS do zero.

**Se fosse removida:** ❌ Nenhum classe Tailwind funcionaria, tudo ficaria com estilo padrão.

**Analogia:** É como usar um dicionário pronto de palavras em vez de inventar palavras novas.

---

```css
// Linhas 3-12: Definindo cores customizadas
@theme {
  --color-gray-100: #1f2523; /* Cinza muito escuro (quase preto) */
  --color-gray-200: #4d5c57; /* Cinza médio escuro */
  --color-gray-300: #cdd5d2; /* Cinza medio claro */
  --color-gray-400: #e4ece9; /* Cinza muito claro */
  --color-gray-500: #f9fbfa; /* Branco quase puro */

  --color-green-100: #1f8459; /* Verde escuro */
  --color-green-200: #2cb178; /* Verde mais claro */

  --default-font-family: "Open Sans", sans-serif; /* Fonte padrão */

  --text-xxs: 0.625rem; /* Tamanho de texto super pequeno */
}
```

**O que faz:** Define as "cores oficiais" do projeto e fonte padrão.

**Por que existe:** Para manter consistência. Ao invés de usar `#1f2523` em 100 lugares, usa-se `gray-100` em todos os lugares. Se mudar a cor, muda em um só lugar.

**Se fosse removida:** ❌ Todas as classes Tailwind que usam cores customizadas quebrariam.

**Analogia:** É como uma paleta de cores de um pintor. Você define as cores uma vez, depois as usa sempre.

**Exemplo prático:**

- `bg-gray-100` = fundo com a cor `#1f2523`
- Se você quer que o app seja mais claro, muda `#1f2523` para `#2a2a2a` aqui, e todo o app muda.

---

```css
// Linhas 15-20: Customizando o elemento <select> (dropdown)
select {
  appearance: none; /* Remove o estilo padrão feio do navegador */
  background-image: url("./assets/chevron-down.svg"); /* Coloca um ícone customizado */
  background-repeat: no-repeat; /* O ícone não se repete */
  background-position: right 0.7rem top 50%; /* Posiciona o ícone à direita */
  background-size: 1.25rem auto; /* Tamanho do ícone */
}
```

**O que faz:** Muda a aparência dos dropdowns (selects) para parecer bonitão.

**Por que existe:** Os dropdowns padrão do navegador são feios. Isso deixa customizado.

**Se fosse removida:** ❌ Todos os dropdowns voltagm ao estilo padrão do navegador.

**Analogia:** É como colocar um novo painel em um carro em vez do padrão.

---

```css
// Linhas 22-28: Customizando a scrollbar (barra de rolagem)
::-webkit-scrollbar {
  width: 0.4rem; /* Deixa a scrollbar bem fininha */
}

::-webkit-scrollbar-thumb {
  background-color: #e4ece9; /* Cor da bolinha que você arrasta */
}

::-webkit-scrollbar-track {
  background-color: transparent; /* Fundo da scrollbar é transparente */
}
```

**O que faz:** Deixa a scrollbar (barra de rolagem) bonita em vez do padrão.

**Por que existe:** Detalhe é importante em UX (experiência do usuário).

**Se fosse removida:** ❌ A scrollbar volta ao padrão feio do navegador.

**Analogia:** Como trocar os puxadores de uma gaveta para combinarem com a decoração.

---

### 4️⃣ `src/vite-env.d.ts` - Configuração TypeScript

```typescript
/// <reference types="vite/client" />
```

**O que faz:** Diz ao TypeScript que tipos de Vite (ferramenta de build) devem estar disponíveis.

**Por que existe:** TypeScript precisa saber quais tipos de dados estão disponíveis (tipos do Vite).

**Se fosse removida:** ❌ TypeScript reclamaria que não conhece tipos do Vite.

**Analogia:** É como ter um dicionário que diz "essa palavra existe e significa isso".

---

## 📁 COMPONENTS (Componentes Reutilizáveis)

Os componentes são como "peças de Lego" - você constrói uma vez e usa em vários lugares.

### 1️⃣ `src/components/AppLayout.tsx` - Layout da Aplicação Logada

```tsx
// Linha 1-2: Importando ferramentas necessárias
import { Outlet } from "react-router";
import { Header } from "./Header";
```

**O que faz:**

- `Outlet` = Um "espaço vazio" onde o React Router coloca a página atual
- `Header` = O cabeçalho da aplicação

**Por que existe:** Precisa dessas ferramentas para montar o layout.

---

```tsx
// Linhas 4-13: Estrutura do layout para usuários logados
export function AppLayout() {
  return (
    <div className="w-screen h-screen bg-gray-400 flex flex-col items-center text-gray-100">
      {/* w-screen h-screen = ocupa toda a tela
          bg-gray-400 = cor de fundo cinza clara
          flex flex-col = layout em coluna (como uma pilha)
          items-center = centraliza horizontalmente
          text-gray-100 = texto na cor cinza escura */}

      <main className="p-3 w-full md:w-auto">
        {/* p-3 = padding (espaço interno) de 3 unidades
            w-full = largura total em mobile
            md:w-auto = em telas médias, largura automática */}
        <Header></Header> {/* Mostra o cabeçalho */}
        <Outlet></Outlet> {/* Aqui vai a página atual (refund, confirm, etc) */}
      </main>
    </div>
  );
}
```

**O que faz:** Cria o layout padrão com:

1. Um cabeçalho no topo (Home, user name, logout)
2. Um espaço (Outlet) para a página atual

**Por que existe:** Todos os usuários logados veem esse layout.

**Se fosse removida:** ❌ Não haveria layout padrão, cada página seria desorganizada.

**Analogia:** É como um modelo de website - header em cima, conteúdo embaixo.

**O que é `Outlet`:** Um buraco onde React Router coloca a página atual. Exemplo:

- Se URL é `/refund`, coloca `<Refund />` no Outlet
- Se URL é `/confirm`, coloca `<Confirm />` no Outlet

---

### 2️⃣ `src/components/AuthLayout.tsx` - Layout da Autenticação

```tsx
// Linha 1-2: Importando ferramentas
import { Outlet } from "react-router";
import logoSvg from "../assets/logo.svg";
```

**O que faz:** Importa Outlet e a logo da aplicação.

---

```tsx
// Linhas 4-12: Layout para páginas de login/signup
export function AuthLayout() {
  return (
    <div className="w-screen h-screen bg-gray-400 flex flex-col justify-center items-center text-gray-100 p-8">
      {/* w-screen h-screen = tela toda
          bg-gray-400 = fundo cinza claro
          flex flex-col justify-center items-center = centraliza na tela (horizontal E vertical)
          p-8 = padding grande para espaço interno */}

      <main className="bg-gray-500 p-8 rounded-md flex items-center flex-col md:max-w-[462px] w-full">
        {/* bg-gray-500 = fundo branco quase puro
            rounded-md = cantos arredondados
            md:max-w-[462px] = largura máxima de 462px em telas médias */}
        <img src={logoSvg} alt="Logo" className="my-8" />{" "}
        {/* my-8 = margem vertical de 8 unidades */}
        <Outlet></Outlet> {/* Aqui vai login ou signup */}
      </main>
    </div>
  );
}
```

**O que faz:** Cria um layout bonito com logo no topo para páginas de login/signup.

**Por que existe:** Login e signup precisam de um layout diferente do app logado (mais centralizado).

**Se fosse removida:** ❌ Login e signup ficariam desorganizados.

**Analogia:** É como o login do Gmail - centralizado, simples, diferente da caixa de entrada.

---

### 3️⃣ `src/components/Button.tsx` - Botão Customizado

```tsx
// Linha 1: Importando função utilitária
import { ClassMerge } from "../utils/classMerge";
```

**O que faz:** Importa uma funço que "mescla" classes CSS (veremos depois).

---

```tsx
// Linhas 3-6: Definindo os tipos de props que o botão recebe
type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean; // ? = é opcional
  variant?: "base" | "icon" | "iconSmall"; // Tipo de botão
};
```

**O que faz:** Define as "propriedades" do componente:

- `React.ComponentProps<"button">` = Todas as propriedades do HTML `<button>` normal
- `isLoading?` = Se está carregando (opcional)
- `variant?` = Tipo de botão: comum, ícone grande ou ícone pequeno (opcional)

**Por que existe:** TypeScript precisa saber quais propriedades o componente aceita.

**Se fosse removida:** ❌ TypeScript reclamaria quando você usasse o botão.

---

```tsx
// Linhas 8-13: Definindo os estilos para cada variante
const variants = {
  button: {
    base: "h-12" /* altura de 12 unidades */,
    icon: "h-12 w-12" /* quadrado 12x12 para ícone */,
    iconSmall: "h-8 w-8" /* quadrado pequeno 8x8 */,
  },
};
```

**O que faz:** Define "receitas" de estilo para cada tipo de botão.

**Por que existe:** Reutilização - ao invés de copiar estilo 3 vezes, define uma vez.

**Analogia:** Como receitas de bolo - você define uma vez e usa várias vezes.

---

```tsx
// Linhas 15-29: O componente do botão
export function Button({
  children, // O que fica dentro do botão
  className, // Classes CSS extras
  type = "button", // Tipo do botão (padrão: "button")
  isLoading, // Se está carregando
  variant = "base", // Tipo de botão (padrão: "base")
  ...rest // Todas as outras propriedades
}: Props) {
  return (
    <button
      type={type}
      disabled={isLoading} // Desabilita se estiver carregando
      className={ClassMerge([
        // Estilo base (funciona sempre)
        "w-full bg-green-100 flex items-center justify-center rounded-lg font-bold text-white text-sm cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50",
        // Estilo específico do tipo
        variants.button[variant],
        // Estilo extra passado
        className,
        // Classes extras se estiver carregando
        isLoading && "cursor-no-drop",
      ])}
      {...rest} // Todas as outras propriedades (onClick, etc)
    >
      {children}
    </button>
  );
}
```

**O que faz em detalhes:**

1. **Desestruturação de propriedades** - Extrai o que é importante e guarda o resto em `...rest`
2. **disabled={isLoading}** - Se estiver carregando, desabilita o botão
3. **ClassMerge** - Mescla múltiplas classes de forma inteligente:
   - Classe base (sempre)
   - Classe específica do tipo (base, icon, iconSmall)
   - Classes extras passadas
   - Classes extras se estiver carregando
4. **{children}** - O conteúdo dentro do botão

**Por que existe:** Botões são usados em MUITOS lugares. Ao invés de repetir código, cria um componente reutilizável.

**Se fosse removida:** ❌ Teria que criar botões manualmente em 20 lugares diferentes.

**Analogia:** É como uma fábrica de botões - você passa as especificações, ela entrega pronto.

**Exemplos de uso:**

```tsx
// Botão normal
<Button>Clique aqui</Button>

// Botão carregando
<Button isLoading={true}>Enviando...</Button>

// Botão com ícone
<Button variant="icon"><img src="..." /></Button>
```

---

### 4️⃣ `src/components/Header.tsx` - Cabeçalho da Aplicação

```tsx
// Linhas 1-3: Importando necessidades
import { useAuth } from "../hooks/useAuth"; // Hook para pegar dados de autenticação
import logoSvg from "../assets/logo.svg"; // Imagem da logo
import logoutSvg from "../assets/logout.svg"; // Ícone de logout
```

**O que faz:** Importa as ferramentas necessárias.

---

```tsx
// Linhas 5-22: O componente header
export function Header() {

  const auth = useAuth()  // Pega dados de autenticação (token, usuário, etc)

  return (
    <header className="w-full flex justify-between items-center">
      {/* w-full = largura total
          flex justify-between = coloca items nas pontas (logo à esquerda, menu à direita)
          items-center = alinha no centro verticalmente */}

      <img src={logoSvg} alt="Logo" className="my-8" />
      {/* Logo à esquerda */}

      <div className="flex items-center gap-3">
        {/* Grupo de user info + logout à direita */}

        <span className="text-sm font-semibold text-gray-200">
          Olá, {auth.session?.user.name}
          {/* Mostra "Olá, João" buscando o nome no contexto de autenticação
              ? = operador seguro (se auth.session existir, acessa user.name, senão, nada) */}
        </span>

        <img
          src={logoutSvg}
          alt="Ícone de sair"
          className="my-8 cursor-pointer hover:opacity-75 transition ease-linear"
          onClick={() => auth.remove()}
          {/* Quando clica, remove dados de autenticação e loga out */}
        />
      </div>
    </header>
  )
}
```

**O que faz:**

1. Pega dados do usuário logado
2. Mostra logo à esquerda
3. Mostra nome e ícone logout à direita
4. Ao clicar em logout, chama `auth.remove()`

**Por que existe:** Todo app logado precisa de um jeito de sair.

**Se fosse removida:** ❌ Usuários não conseguiriam fazer logout.

**Analogia:** É como a barra do Gmail - mostra seu email e tem o botão de sair.

**O que é `auth.session?.user.name`:**

- `auth.session` = dados da sessão (pode ser nulo)
- `?.` = operador seguro (não quebra se for nulo)
- `user.name` = acessa o nome dentro de session.user

---

### 5️⃣ `src/components/Input.tsx` - Campo de Entrada de Texto

```tsx
// Linha 1-2: Definindo os tipos de propriedades
type Props = React.ComponentProps<"input"> & {
  legend?: string; // Rótulo do campo (opcional)
};
```

**O que faz:** Define que o Input pode ter todas as propriedades do `<input>` HTML mais um `legend`.

---

```tsx
// Linhas 4-13: O componente Input
export function Input({ legend, type = "text", ...rest }: Props) {
  return (
    <fieldset className="flex flex-1 max-h-20 text-gray-200 focus-within:text-green-100">
      {/* fieldset = agrupa inputs com rótulos
          flex flex-1 = ocupa espaço disponível
          max-h-20 = altura máxima de 20 unidades
          text-gray-200 = cor de texto padrão
          focus-within:text-green-100 = quando input tem foco, texto fica verde */}

      {legend &&  {/* Se legend foi passado, mostra */}
        <legend className="uppercase text-xxs mb-2 text-inherit">
          {/* uppercase = letras maiúsculas
              text-xxs = fonte super pequena (definida em index.css)
              mb-2 = margem de 2 unidades embaixo
              text-inherit = herda a cor do pai (gray-200) */}
          {legend}
        </legend>
      }

      <input
        type={type}  // Tipo do input (text, password, email, etc)
        {...rest}  // Todas as outras propriedades (placeholder, value, onChange, etc)
        className="w-full h-12 rounded-lg border border-gray-300 px-4 text-sm text-gray-100 bg-transparent outline-none focus:border-2 focus:border-green-100 placeholder-gray-300"
        {/* w-full = largura total
            h-12 = altura de 12 unidades
            border border-gray-300 = borda cinza
            focus:border-2 focus:border-green-100 = quando tem foco, borda fica verde e mais grossa
            bg-transparent = fundo transparente
            outline-none = remove o outline padrão do navegador */}
      />
    </fieldset>
  )
}
```

**O que faz:** Cria um input customizado com:

1. Rótulo opcional acima
2. Input com estilos customizados
3. Muda de cor quando em foco

**Por que existe:** Inputs são usados em login, signup, formulários. Ao invés de repetir estilo, faz um componente.

**Se fosse removida:** ❌ Teria que copiar CSS do input em 10 lugares.

**Exemplos de uso:**

```tsx
// Input simples
<Input legend="E-mail" type="email" placeholder="seu@email.com" />

// Input de senha
<Input legend="Senha" type="password" placeholder="senha" />

// Input sem rótulo
<Input placeholder="Digite algo" />
```

---

### 6️⃣ `src/components/Loading.tsx` - Tela de Carregamento

```tsx
// Linhas 1-10: Componente de loading
export function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {/* Tela toda, centralizada */}
      <span className="text-gray-200 font-semibold text-sm">Carregando...</span>
    </div>
  );
}
```

**O que faz:** Mostra "Carregando..." no meio da tela.

**Por que existe:** Quando a aplicação está carregando dados do servidor, precisa de um feedback visual.

**Se fosse removida:** ❌ Usuário fica confuso esperando algo que parece travado.

**Analogia:** Como um "por favor aguarde..." em um elevador.

---

### 7️⃣ `src/components/Pagination.tsx` - Navegação de Páginas

```tsx
// Linhas 1-3: Importando necessidades
import { Button } from "./Button";
import leftSvg from "../assets/left.svg";
import rightSvg from "../assets/right.svg";
```

**O que faz:** Importa botão e ícones de setas.

---

```tsx
// Linhas 5-9: Definindo as propriedades
type Props = {
  current: number; // Página atual (ex: 1, 2, 3)
  total: number; // Total de páginas
  onNext: () => void; // Função chamada quando clica "próxima"
  onPrevious: () => void; // Função chamada quando clica "anterior"
};
```

**O que faz:** Define que a paginação recebe 4 coisas.

---

```tsx
// Linhas 11-28: O componente de paginação
export function Pagination({ current, total, onNext, onPrevious }: Props) {
  return (
    <div className="flex flex-1 items-center justify-center gap-2.5">
      {/* Central, com gap entre botões */}

      <Button
        variant="iconSmall" // Botão pequeno de ícone
        onClick={onPrevious} // Clica, chama onPrevious
        disabled={current === 1} // Desabilita se está na primeira página
      >
        <img src={leftSvg} alt="Ícone de voltar página" />
      </Button>

      <span className="text-gray-200 text-sm">
        {current}/{total} {/* Mostra "2/5" por exemplo */}
      </span>

      <Button
        variant="iconSmall"
        onClick={onNext}
        disabled={current === total} // Desabilita se está na última página
      >
        <img src={rightSvg} alt="Ícone de avançar página" />
      </Button>
    </div>
  );
}
```

**O que faz:**

1. Mostra "página atual / total de páginas"
2. Botão de voltar (desabilita na primeira página)
3. Botão de avançar (desabilita na última página)

**Por que existe:** Quando há muitos resultados (100 reembolsos), não mostra tudo em uma página. Precisa de navegação.

**Se fosse removida:** ❌ Não conseguiria navegar entre páginas.

**Analogia:** Como as páginas de um livro ou Google - você navega entre as páginas.

**Exemplo:**

- Está na página 2 de 5
- Clica próximo → vai para página 3
- Clica anterior → volta para página 1
- Na página 1, botão anterior fica desabilitado

---

### 8️⃣ `src/components/RefundItem.tsx` - Item de Reembolso

```tsx
// Linhas 1-6: Definindo tipos
export type RefundItemProps = {
  id: string; // ID único
  username: string; // Nome de quem pediu o reembolso
  description: string; // Descrição do gasto (ex: "Café com cliente")
  amount: string; // Valor formatado (ex: "150,50")
  categoryImg: string; // Caminho da imagem da categoria
};
```

**O que faz:** Define a "forma" de um item de reembolso.

---

```tsx
// Linhas 8-10: Props do componente
type Props = React.ComponentProps<"a"> & {
  data: RefundItemProps;
};
```

**O que faz:** O item é um link (`<a>`) que recebe os dados do reembolso.

---

```tsx
// Linhas 13-29: O componente
export function RefundItem({ data, ...rest }: Props) {
  return (
    <a
      {...rest}
      className="flex items-center gap-3 hover:bg-green-100/5 cursor-pointer rounded-md p-2"
    >
      {/* Link com estilo de hover (passa verde muito levemente)
              gap-3 = espaço entre elementos */}

      <img
        src={data.categoryImg} // Ícone categoria (comida, transporte, etc)
        alt="Ícone da categoria"
        className="w-8 h-8" // Quadrado 8x8
      />

      <div className="flex flex-col flex-1">
        {/* Coluna de textos, ocupa espaço */}

        <strong className="text-sm text-gray-100">
          {data.username} {/* Nome de quem pediu */}
        </strong>

        <span className="text-xs text-gray-200">
          {data.description} {/* Descrição do gasto */}
        </span>
      </div>

      <span className="text-sm text-gray-100 font-semibold">
        <small className="font-normal text-gray-200">R$</small>
        {data.amount} {/* Valor */}
      </span>
    </a>
  );
}
```

**O que faz:**

1. Mostra um item de reembolso em forma de linha
2. Ícone da categoria | Nome + descrição | Valor
3. Quando clica, vai para o detalhe daquele reembolso

**Por que existe:** Cada reembolso na lista precisa ser clicável e informativo.

**Se fosse removida:** ❌ Dashboard não conseguiria mostrar os reembolsos.

**Analogia:** É como uma linha numa planilha - mostra resumo de um item.

**Exemplo:**

```
[Ícone comida] João Silva              R$ 150,50
               Almoço com cliente

[Ícone taxi]   Maria Santos            R$ 45,00
               Uber para reunião
```

---

### 9️⃣ `src/components/Select.tsx` - Dropdown Customizado

```tsx
// Linhas 1-3: Definindo tipos
type Props = React.ComponentProps<"select"> & {
  legend?: string; // Rótulo do campo (opcional)
};
```

**O que faz:** Define que Select é um `<select>` HTML com um rótulo opcional.

---

```tsx
// Linhas 5-18: O componente
export function Select({ legend, children, ...rest }: Props) {
  return (
    <fieldset className="flex flex-1 max-h-20 text-gray-200 focus-within:text-green-100">
      {/* Mesma estrutura do Input */}

      {legend && (
        <legend className="uppercase text-xxs mb-2 text-inherit">
          {legend} {/* Mostra rótulo se foi passado */}
        </legend>
      )}

      <select
        {...rest} // Todas as propriedades (onChange, value, disabled, etc)
        className="w-full h-12 rounded-lg border border-gray-300 px-4 text-sm text-gray-100 bg-transparent outline-none focus:border-2 focus:border-green-100 placeholder-gray-300"
      >
        <option value="" disabled hidden>
          Selecione {/* Opção placeholder que não pode ser selecionada */}
        </option>
        {children} {/* As opções (<option>) vêm de fora */}
      </select>
    </fieldset>
  );
}
```

**O que faz:**

1. Cria um dropdown customizado
2. Com rótulo opcional
3. Com opção placeholder "Selecione"
4. Recebe as opções como children

**Por que existe:** Dropdowns são usados em vários formulários (categoria, status, etc).

**Se fosse removida:** ❌ Formulários ficariam sem dropdowns.

**Exemplos de uso:**

```tsx
<Select legend="Categoria">
  <option value="food">Alimentação</option>
  <option value="transport">Transporte</option>
  <option value="services">Serviços</option>
</Select>
```

---

### 🔟 `src/components/Upload.tsx` - Upload de Arquivo

```tsx
// Linha 1: Importando ícone de upload
import uploadSvg from "../assets/upload.svg";
```

**O que faz:** Importa a imagem do ícone de upload.

---

```tsx
// Linhas 3-5: Definindo tipos
type Props = React.ComponentProps<"input"> & {
  filename?: string | null; // Nome do arquivo selecionado
};
```

**O que faz:** O upload é um input com propriedade extra de filename.

---

```tsx
// Linhas 7-27: O componente
export function Upload({ filename = null, ...rest }: Props) {
  return (
    <div>
      <legend className="uppercase text-xxs text-gray-200 mb-2">
        Comprovante {/* Rótulo */}
      </legend>

      <div className="w-full h-12 flex items-center rounded-lg border border-gray-300 text-sm text-gray-100 bg-transparent outline-none">
        {/* Container do input */}

        <input
          type="file" // Input de arquivo
          id="upload" // ID para conectar com label
          className="hidden" // Esconde o input padrão
          {...rest} // Todas as propriedades (onChange, etc)
        />

        <span className="text-xs text-gray-100 flex-1 pl-4">
          {filename ?? "Selecione o arquivo"}
          {/* ?? = se filename for nulo, mostra "Selecione o arquivo" */}
        </span>

        <label
          htmlFor="upload" // Conecta ao input (quando clica, abre seletor)
          className="flex h-12 px-4 items-center bg-green-100 rounded-lg cursor-pointer hover:bg-green-200 transition ease-linear"
        >
          <img src={uploadSvg} alt="Ícone de upload" className="w-6 h-6" />
        </label>
      </div>
    </div>
  );
}
```

**O que faz:**

1. Cria um input de arquivo custom
2. Mostra nome do arquivo selecionado
3. Botão verde com ícone para abrir seletor
4. Quando clica no botão, abre o seletor de arquivos do computador

**Por que existe:** Reembolsos precisam de comprovante (imagem, PDF, etc). Precisa de um jeito bonito de fazer upload.

**Se fosse removida:** ❌ Não conseguiria anexar comprovante ao reembolso.

**Analogia:** É como o clip de anexar arquivo no Gmail - você clica e seleciona um arquivo.

**O que é `htmlFor="upload"`:**

- O input tem `id="upload"`
- O label tem `htmlFor="upload"`
- Assim, quando clica no label (botão), abre o input de arquivo

---

## 📁 CONTEXTS (Contextos - Compartilhamento Global de Dados)

### 1️⃣ `src/contexts/AuthContext.tsx` - Contexto de Autenticação

```tsx
// Linhas 1-3: Importando ferramentas
import { createContext, type ReactNode } from "react"; // React
import { useState, useEffect } from "react"; // Hooks para estado e efeito
import { api } from "../services/api"; // Cliente HTTP
```

**O que faz:** Importa tudo necessário para criar o contexto.

**Por que:** Contexto é um "wireframe" que distribui informações para a app toda.

---

```tsx
// Linhas 5-9: Definindo o tipo de dados do contexto
type AuthContext = {
  isLoading: boolean; // Se está carregando dados de sesão
  session: null | UserAPIResponse; // Dados do usuário logado (ou null se não logado)
  save: (data: UserAPIResponse) => void; // Função para salvar login
  remove: () => void; // Função para fazer logout
};
```

**O que faz:** Define "o que" o contexto vai compartilhar.

---

```tsx
// Linha 11: Definindo a chave do localStorage
const LOCAL_STORAGE_KEY = "@refund";
```

**O que faz:** Define um prefixo para salvar dados no localStorage (armazenamento local do navegador).

**Por que existe:** Quando usuário faz login, precisa salvar token em algum lugar para não perder quando recarrega a página.

**Analogia:** É como guardar um ticket em casa para próxima vez.

---

```tsx
// Linha 13: Criando o contexto
export const AuthContext = createContext({} as AuthContext);
```

**O que faz:** Cria o "caixa de correio" onde as informações são armazenadas.

**Por que existe:** Outros componentes vão se "conectar" a esse contexto.

---

```tsx
// Linhas 15-48: O Provider - que fornece os dados
export function AuthProvider({ children }: { children: ReactNode }) {
  // children = todos os componentes dentro do AuthProvider
```

**O que faz:** Esta função envolve a aplicação e fornece dados de autenticação para todos.

---

```tsx
// Linhas 17-18: Estados
const [session, setSession] = useState<null | UserAPIResponse>(null);
const [isLoading, setIsLoading] = useState(true);
```

**O que faz:**

- `session` = armazena dados do usuário logado (começa como null = não logado)
- `isLoading` = armazena se está carregando (começa como true = sim, está buscando dados)

**Por que existe:** Precisa rastrear essas informações durante a aplicação.

---

```tsx
// Linhas 20-26: Função save - salva o login
function save(data: UserAPIResponse) {
  // data = {token, user: {id, name, email, role}}

  localStorage.setItem(`${LOCAL_STORAGE_KEY}:user`, JSON.stringify(data.user));
  // Salva o usuário como JSON no localStorage
  // Chave: "@refund:user"
  // Valor: '{"id":"123", "name":"João", ...}'

  localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, data.token);
  // Salva o token no localStorage
  // Chave: "@refund:token"
  // Valor: "eyJhbGciOiJIUzI1NiI..." (token aleatório)

  api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
  // Coloca o token no header padrão de todas as requisições HTTP
  // Assim, toda vez que faz uma requisição, automaticamente envia o token

  setSession(data);
  // Atualiza o estado da aplicação com os dados do usuário
}
```

**O que faz:**

1. Salva usuário no localStorage (dados ficam mesmo após fechar o navegador)
2. Salva token no localStorage
3. Coloca token nos headers HTTP (para o servidor saber quem está fazendo requisições)
4. Atualiza o estado da aplicação

**Por que existe:** Quando usuário faz login, precisa guardar os dados em vários lugares.

**Se fosse removida:** ❌ Login não funcionaria - dados não seriam salvos.

**Analogia:** É como guardar uma chave (token) em vários lugares para não perder.

---

```tsx
// Linhas 28-39: Função loadUser - carrega usuário quando app inicia
function loadUser() {
  const user = localStorage.getItem(`${LOCAL_STORAGE_KEY}:user`);
  // Tenta pegar os dados do usuário do localStorage

  const token = localStorage.getItem(`${LOCAL_STORAGE_KEY}:token`);
  // Tenta pegar o token do localStorage

  if (token && user) {
    // Se AMBOS existem (usuário já fez login antes e não limpou dados)

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    // Coloca o token nos headers de novo (agora na próxima requisição funciona)

    setSession({
      token,
      user: JSON.parse(user), // Converte JSON back para objeto
    });
    // Restaura a sessão para a aplicação
  }

  setIsLoading(false);
  // Diz que acabou o carregamento
}
```

**O que faz:**

1. Tenta pegar dados do usuário do localStorage
2. Se encontrar token E usuário, restaura a sessão
3. Marca que acabou o carregamento

**Por que existe:** Quando o usuário recarrega a página (F5), precisa verificar se ele já estava logado antes.

**Se fosse removida:** ❌ Toda vez que recarregasse a página, seria deslogado.

**Analogia:** É como o navegador lembrar que você estava logado no Gmail mesmo após recarregar.

---

```tsx
// Linhas 41-47: Função remove - faz logout
function remove() {
  setSession(null);
  // Limpa a sessão (agora ninguém está logado)

  localStorage.removeItem(`${LOCAL_STORAGE_KEY}:token`);
  localStorage.removeItem(`${LOCAL_STORAGE_KEY}:user`);
  // Remove dados do localStorage
  // Agora não há mais cópia dos dados em lugar nenhum

  window.location.assign("/");
  // Redireciona para a página inicial (recarrega a app)
}
```

**O que faz:**

1. Apaga sessão do estado
2. Apaga dados do localStorage
3. Redireciona para home

**Por que existe:** Quando usuário clica "sair", precisa limpar TUDO.

**Se fosse removida:** ❌ Logout não funcionaria - dados continuariam lá.

---

```tsx
// Linhas 49-51: useEffect - roda quando app inicia
useEffect(() => {
  loadUser();
}, []);
// [] = roda uma única vez quando componente monta
```

**O que faz:** Quando a app inicia, tenta carregar o usuário salvo.

**Por que existe:** É o "gancho" que carrega dados do localStorage no início.

**Se fosse removida:** ❌ Dados do localStorage nunca seriam carregados.

---

```tsx
// Linhas 53-57: Retornando o Provider
  return (
    <AuthContext.Provider value={{ session, save, isLoading, remove }}>
      {children}
    </AuthContext.Provider>
  )
}
```

**O que faz:** Fornece os dados (session, save, isLoading, remove) para todos os componentes dentro.

**Por que existe:** É como enviar uma caixa com informações para todos.

**Analogia:** É como um professor que distribui cadernos para todos os alunos.

---

## 📁 DTOs (Data Transfer Objects - Tipos de Dados)

### 1️⃣ `src/dtos/categories.d.ts` - Enum de Categorias

```typescript
enum CategoriesAPIEnum {
  Food = "food", // Alimentação
  Others = "others", // Outros
  Services = "services", // Serviços
  Transport = "transport", // Transporte
  Accommodation = "accommodation", // Hospedagem
}
```

**O que faz:** Define os tipos de categoria possíveis.

**Por que existe:** Em vez de escrever a string errada ("comida" em vez de "food"), TypeScript avisa o erro.

**Se fosse removida:** ❌ Alguém poderia escrever categoria errada e quebrar a aplicação.

**Analogia:** É como um menu de restaurante - você SÓ pode pedir o que tem no menu.

**Exemplo:**

```tsx
// Errado - TypeScript reclama
const cat: CategoriesAPIEnum = "comida";

// Certo - TypeScript aprova
const cat: CategoriesAPIEnum = "food";
```

---

### 2️⃣ `src/dtos/refund.d.ts` - Tipos de Reembolso

```typescript
type RefundAPIResponse = {
  id: string; // ID único (ex: "abc123")
  userId: string; // ID de quem pediu reembolso
  name: string; // Nome/descrição (ex: "Almoço com cliente")
  category: CategoriesAPIEnum; // Categoria (food, transport, etc)
  amount: number; // Valor em reais (ex: 150.50)
  filename: string; // Nome do comprovante (ex: "recibo.pdf")
  user: {
    name: string; // Nome de display do usuário
  };
};
```

**O que faz:** Define a "forma" de um reembolso retornado do servidor.

**Por que existe:** TypeScript precisa saber que tipo de dado vem do servidor.

**Se fosse removida:** ❌ TypeScript reclamaria quando tentasse acessar propriedades.

---

```typescript
type RefundsPaginationAPIResponse = {
  refunds: RefundAPIResponse[]; // Array de reembolsos
  pagination: {
    page: number; // Página atual
    totalPages: number; // Quantas páginas total
    perPage: number; // Quantos itens por página
    totalRecords: number; // Quantos reembolsos no total
  };
};
```

**O que faz:** Define a resposta paginada de reembolsos (com lista + info de paginação).

**Por que existe:** Quando busca reembolsos com paginação, o servidor retorna essa estrutura.

---

### 3️⃣ `src/dtos/user.d.ts` - Tipos de Usuário

```typescript
type UserAPIRole = "employee" | "manager";
// Define que role DEVE ser "employee" OU "manager"
```

**O que faz:** Define os tipos de usuário possíveis.

**Por que existe:** Existem dois tipos de usuários - funcionário e gerente. Precisa diferenciar.

**Analogia:** Como uma loja que tem clientes e vendedores.

---

```typescript
type UserAPIResponse = {
  token: string; // Token para autenticação (JWT geralmente)
  user: {
    id: string; // ID único
    name: string; // Nome completo
    email: string; // E-mail
    role: UserAPIRole; // "employee" ou "manager"
  };
};
```

**O que faz:** Define a resposta do servidor quando usuário faz login.

**Por que existe:** O servidor retorna exatamente assim depois de login.

---

## 📁 HOOKS (Hooks - Reutilização de Lógica)

### 1️⃣ `src/hooks/useAuth.tsx` - Hook de Autenticação

```tsx
// Linha 1: Importando ferramentas
import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
```

**O que faz:** Importa o hook `use` e o contexto.

---

```tsx
// Linhas 3-6: O custom hook
export function useAuth() {
  const context = use(AuthContext); // Pega o contexto

  return context; // Retorna para quem chamar
}
```

**O que faz:** Tira do contexto e retorna.

**Por que existe:** Isso é um "atalho". Em vez de escrever:

```tsx
const context = use(AuthContext);
```

Você só escreve:

```tsx
const auth = useAuth();
```

**Se fosse removida:** ❌ Teria que fazer `use(AuthContext)` em 10 lugares diferentes.

**Analogia:** É como criar um atalho no desktop em vez de abrir a pasta toda vez.

**Exemplo de uso:**

```tsx
// Como antes
import { AuthContext } from "../contexts/AuthContext";
function Header() {
  const auth = use(AuthContext);
}

// Como depois (com hook)
import { useAuth } from "../hooks/useAuth";
function Header() {
  const auth = useAuth();
  // Mais simples!
}
```

---

## 📁 PAGES (Páginas - Telas Principais)

### 1️⃣ `src/pages/Confirm.tsx` - Página de Confirmação

```tsx
// Linha 1-3: Importando necessidades
import { Navigate, useLocation } from "react-router"; // Navegação
import okSvg from "../assets/ok.svg"; // Ícone de ok
```

**O que faz:** Importa ferramentas necessárias.

---

```tsx
// Linhas 5-8: Componente
export function Confirm() {

  const location = useLocation()
  // Pega informações sobre a navegação (se veio de um lugar específico)
```

**O que faz:** Pega o "histórico" de onde veio.

---

```tsx
// Linhas 10-12: Proteção
if (!location.state?.fromSubmit) {
  return <Navigate to="/" />;
  // Se NÃO veio do submit de reembolso, redireciona para home
  // Isso evita que alguém acesse /confirm digitando na URL
}
```

**O que faz:** Verifica se é válido acessar essa página.

**Por que existe:** Um usuário não deveria acessar /confirm direto na URL. Só após enviar um reembolso.

**Se fosse removida:** ❌ Alguém poderia digitar `/confirm` na URL e ver a página de sucesso sem enviar nada.

**Analogia:** Como um código de segurança - você só pode entrar com a ticket correta.

---

```tsx
// Linhas 14-27: Retornando a página
  return (
    <div className="bg-gray-500 lg:w-[512px] rounded-xl flex flex-col items-center p-10 gap-6">
      {/* Container com fundo branco, arredondado, centralizado */}

      <h1 className="text-2xl font-bold text-center text-green-100">
        Solicitação enviada!
      </h1>

      <img src={okSvg} alt="Ícone de ok" className="w-28" />
      {/* Imagem de ok gigante */}

      <p className="text-sm text-gray-200 text-center">
        Agora é apenas aguardar! Sua solicitação será analisada,
        em breve, o setor financeiro irá entrar em contato
        com você.
      </p>

      <a href="/" className="w-full p-3 text-center bg-green-100 rounded-lg text-white hover:bg-green-200 transition ease-linear">
        Nova solicitação
      </a>
    </div>
  )
}
```

**O que faz:** Mostra uma página bonita "Solicitação enviada!" com botão para nova solicitação.

**Por que existe:** Feedback visual que a ação funcionou.

**Se fosse removida:** ❌ Usuário não saberia se a solicitação foi enviada.

**Analogia:** É como a confirmação do Uber "sua corrida foi solicitada".

---

### 2️⃣ `src/pages/Dashboard.tsx` - Dashboard de Reembolsos

Este é um arquivo grande com muita lógica. Vou comentar as partes principais.

```tsx
// Linhas 1-11: Importando tudo necessário
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import React, { useState, useEffect } from "react";
import { RefundItem, type RefundItemProps } from "../components/RefundItem";
import { CATEGORIES } from "../utils/categories";
import { Pagination } from "../components/Pagination";
import { formatCurrency } from "../utils/formatCurrency";
import { api } from "../services/api";
import { AxiosError } from "axios";
import searchSvg from "../assets/search.svg";
```

Todos os imports para montar a página.

---

```tsx
// Linha 13: Constante
const PER_PAGE = 10;
// Quantos reembolsos mostrar por página
```

**Por que existe:** Se precisar mudar para 20 reembolsos por página, muda em um só lugar.

---

```tsx
// Linhas 15-20: Estados
const [name, setName] = useState(""); // O que está digitado no search
const [page, setPage] = useState(1); // Página atual
const [totalPages, setTotalPages] = useState(0); // Quantas páginas tem
const [refunds, setRefunds] = useState<RefundItemProps[]>([]); // Lista de refunds
```

Variáveis que mudam durante a interação.

---

```tsx
// Linhas 22-48: Função para buscar reembolsos
async function fetchRefunds() {
  try {
    const response = await api.get<RefundsPaginationAPIResponse>(
      `/refunds?name=${name.trim()}&page=${page}&perPage=${PER_PAGE}`,
      // GET /refunds?name=João&page=2&perPage=10
    );

    setRefunds(
      response.data.refunds.map((refund) => ({
        // Transforma os dados do servidor em formato que o RefundItem entende
        id: refund.id,
        username: refund.user.name,
        description: refund.name,
        amount: formatCurrency(refund.amount), // "150.50" vira "150,50"
        categoryImg: CATEGORIES[refund.category].icon, // Pega a imagem correta
      })),
    );

    setTotalPages(response.data.pagination.totalPages);
  } catch (error) {
    console.log(error);

    if (error instanceof AxiosError) {
      return alert(error.response?.data.message);
    }

    return alert("Não foi possível carregar as solicitações");
  }
}
```

**O que faz:**

1. Faz uma requisição GET para o servidor
2. Pega a lista de reembolsos
3. Transforma para o formato que RefundItem entende
4. Atualiza a lista e o total de páginas

**Por que existe:** Precisa buscar dados do servidor quando a página carrega ou muda.

**Se fosse removida:** ❌ Nenhum reembolso seria mostrado.

---

```tsx
// Linhas 50-55: Função do formulário de busca
function onSubmit(e: React.FormEvent) {
  e.preventDefault(); // Impede recarregar a página

  fetchRefunds(); // Busca com os dados novos
}
```

**O que faz:** Quando usuário digita nome e clica search, busca novamente.

---

```tsx
// Linhas 57-70: Função para navegar páginas
function handlePagination(action: "next" | "previous") {
  setPage((prevPage) => {
    if (action === "next" && prevPage < totalPages) {
      return prevPage + 1; // próxima página
    }

    if (action === "previous" && prevPage > 1) {
      return prevPage - 1; // página anterior
    }

    return prevPage; // nenhuma mudança (proteção)
  });
}
```

**O que faz:** Aumenta ou diminui o número da página (com proteção em bordas).

**Analogia:** É como virar páginas de um livro - mas com limite no começo e fim.

---

```tsx
// Linhas 72-74: useEffect - roda quando página muda
useEffect(() => {
  fetchRefunds();
}, [page]);
// Quando "page" muda, busca reembolsos novamente
```

**O que faz:** Sempre que a página muda (clicou em próximo), busca novos dados.

**Por que existe:** Quando vai para página 2, precisa buscar dados da página 2.

---

```tsx
// Linhas 76-101: Retornando a página
return (
  <div className="w-full bg-gray-500 flex flex-col md:min-w-[768px] p-10 rounded-2xl">
    {/* Container da página */}

    <h1 className="text-gray-100 font-bold text-xl flex-1">
      Dashboard
    </h1>
    {/* Título */}

    <form onSubmit={onSubmit} className="flex items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6">
      {/* Formulário de busca */}

      <Input
        placeholder="Pesquisar pelo nome"
        onChange={(e) => setName(e.target.value)}
        {/* Atualiza "name" conforme digita */}
      />

      <Button type="submit" variant="icon">
        <img src={searchSvg} alt="Ícone de pesquisar" className="w-5" />
      </Button>
    </form>

    <div className="my-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
      {/* Container dos reembolsos com altura máxima e scroll */}

      {
        refunds.map(item => (
          <RefundItem
            key={item.id}  // Chave única para React
            data={item}  // Dados do reembolso
            href={`/refund/${item.id}`}  // Clicando vai para /refund/123
          />
        ))
      }
    </div>

    <Pagination
      current={page}  // Página atual
      total={totalPages}  // Total de páginas
      onNext={() => handlePagination("next")}  // Próxima
      onPrevious={() => handlePagination("previous")}  // Anterior
    />
  </div>
)
```

**O que faz:** Monta toda a página:

1. Título "Dashboard"
2. Search bar para filtrar por nome
3. Lista de reembolsos em scroll
4. Paginação no fim

---

### 3️⃣ `src/pages/NotFound.tsx` - Página 404

```tsx
export function NotFound() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {/* Tela toda, centralizada */}

      <div className="flex flex-col">
        <h1 className="text-gray-100 font-semibold text-2xl mb-10">
          Ops! Essa página não existe 😵‍💫
        </h1>

        <a
          href="/"
          className="font-semibold text-center text-green-100 hover:text-green-200 transition ease-linear"
        >
          Voltar para o início
        </a>
      </div>
    </div>
  );
}
```

**O que faz:** Mostra "página não encontrada" quando usuário tenta acessar URL inválida.

**Por que existe:** UX melhor do que tela em branco.

**Se fosse removida:** ❌ Usuário fica confuso quando digita URL errada.

---

### 4️⃣ `src/pages/Refund.tsx` - Página de Criar/Ver Reembolso

Este arquivo é complexo. Vou comentar as partes principais.

```tsx
// Linhas 1-13: Imports
import { Input } from "../components/Input";
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";
import { Select } from "../components/Select";
import { useEffect, useState } from "react";
import { Upload } from "../components/Upload";
import { Button } from "../components/Button";
import { useNavigate, useParams } from "react-router";
import { z, ZodError } from "zod";
import { api } from "../services/api";
import { AxiosError } from "axios";
import { formatCurrency } from "../utils/formatCurrency";
import fileSvg from "../assets/file.svg";
```

Todos os imports necessários para criar/visualizar um reembolso.

---

```tsx
// Linhas 15-18: Validação com Zod
const refundSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Informe um nome claro para a sua solicitação" }),
  // Precisa ser string, trimado, mínimo 3 caracteres

  category: z.string().min(1, { message: "Informe a categoria" }),
  // Precisa escolher uma categoria

  amount: z.coerce
    .number({ message: "Informe um valor válido" })
    .positive({ message: "Informe um valor válido e superior a 0" }),
  // Precisa ser número, maior que zero
});
```

**O que faz:** Define as regras de validação (receita de bolo dos dados corretos).

**Por que existe:** Antes de enviar para o servidor, valida localmente. Se errado, mostra error bonito.

**Se fosse removida:** ❌ Dados inválidos seriam enviados para o servidor.

**Analogia:** É como um filtro - só deixa passar dados "bons".

---

```tsx
// Linhas 20-28: Estados
const [name, setName] = useState(""); // Nome da solicitação
const [amount, setAmount] = useState(""); // Valor
const [category, setCategory] = useState(""); // Categoria
const [isLoading, setIsLoading] = useState(false); // Se está enviando
const [file, setFile] = useState<File | null>(null); // Arquivo selecionado
const [fileURL, setFileURL] = useState<string | null>(null); // URL do arquivo já anexado
```

---

```tsx
// Linhas 30-31: Hooks de navegação
const navigate = useNavigate(); // Para redirecionar para outra página
const params = useParams<{ id: string }>(); // Para pegar ID da URL
```

---

```tsx
// Linhas 33-75: Função onSubmit - enviar reembolso
async function onSubmit(e: React.FormEvent) {
  e.preventDefault(); // Impede recarregar a página

  if (params.id) {
    return navigate(-1);
    // Se está VENDO um reembolso (tem ID na URL), volta em vez de enviar
  }

  try {
    setIsLoading(true); // Começou a enviar

    if (!file) {
      return alert("Selecione um arquivo de comprovante");
      // Precisa de arquivo
    }

    const fileUploadForm = new FormData();
    fileUploadForm.append("file", file);
    // Cria um FormData (forma especial de enviar arquivo)

    const response = await api.post("/uploads", fileUploadForm);
    // Envia arquivo para o servidor, recebe nome do arquivo salvo

    const data = refundSchema.parse({
      // Valida os dados
      name,
      category,
      amount: amount.replace(",", "."), // "150,50" vira "150.50"
    });

    await api.post("/refunds", {
      ...data, // name, category, amount
      filename: response.data.filename, // nome do arquivo salvo
    });
    // Envia reembolso para o servidor

    navigate("/confirm", { state: { fromSubmit: true } });
    // Redireciona para página de confirmação
  } catch (error) {
    // Trata erros
    if (error instanceof ZodError) {
      return alert(error.issues[0].message);
    }

    if (error instanceof AxiosError) {
      return alert(error.response?.data.message);
    }

    alert("Não foi possível realizar a solicitação");
  } finally {
    setIsLoading(false); // Acabou de enviar (sucesso ou erro)
  }
}
```

**O que faz:** Processa o envio do reembolso:

1. Valida dados
2. Envia arquivo primeiro
3. Envia reembolso com referência do arquivo
4. Redireciona para confirmação

**Por que existe:** Este é o "motor" da aplicação - onde dados realmente são enviados.

**Se fosse removida:** ❌ Não conseguiria criar reembolsos.

---

```tsx
// Linhas 77-100: Função fetchRefunds - busca um reembolso específico
async function fetchRefunds(id: string) {
  try {
    const { data } = await api.get<RefundAPIResponse>(`/refunds/${id}`);
    // GET /refunds/123

    setName(data.name);
    setCategory(data.category);
    setAmount(formatCurrency(data.amount)); // Formata 150.50 para 150,50
    setFileURL(data.filename); // Guarda URL do arquivo para mostrar link
  } catch (error) {
    // Trata erros
    if (error instanceof AxiosError) {
      return alert(error.response?.data.message);
    }

    return alert("Não foi possível carregar");
  }
}
```

**O que faz:** Busca um reembolso específico do servidor e carrega os dados.

**Por que existe:** Quando está vendo um reembolso (modo read-only), precisa buscar os dados.

**Se fosse removida:** ❌ Não conseguiria ver detalhes de um reembolso.

---

```tsx
// Linhas 102-106: useEffect - busca reembolso quando ID muda
useEffect(() => {
  if (params.id) {
    fetchRefunds(params.id);
    // Se está vendo um reembolso, busca seus dados
  }
}, [params.id]);
// Roda quando ID muda
```

---

```tsx
// Linhas 108-160: Retornando a form
return (
  <form
    onSubmit={onSubmit}
    className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px]"
  >
    <header>
      <h1 className="text-xl font-bold text-gray-100">
        Solicitação de reembolso
      </h1>
      <p className="text-sm text-gray-200 mt-2 mb-4">
        Dados da despesa para solicitar reembolso.
      </p>
    </header>

    <Input
      required
      legend="Nome da solicitação"
      value={name}
      onChange={(e) => setName(e.target.value)}
      disabled={!!params.id} // Se estiver vendo, desabilita
    />

    <div className="flex gap-4">
      <Select
        required
        legend="Categoria"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={!!params.id} // Se estiver vendo, desabilita
      >
        {CATEGORIES_KEYS.map((category) => (
          <option key={category} value={category}>
            {CATEGORIES[category].name} // Mostra nome bonito
          </option>
        ))}
      </Select>

      <Input
        required
        legend="Valor"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        disabled={!!params.id} // Se estiver vendo, desabilita
      />
    </div>

    {params.id && fileURL ? (
      // Se estiver vendo e tem arquivo
      <a
        href={`http://localhost:3333/uploads/${fileURL}`} // Link para download
        target="_blank" // Abre em aba nova
        className="text-sm text-green-100 font-semibold flex items-center justify-center gap-2 my-6 hover:opacity-70 transition ease-linear"
      >
        <img src={fileSvg} alt="Ícone do arquivo" />
        Abrir comprovante
      </a>
    ) : (
      // Se estiver criando, mostra upload
      <Upload
        filename={file && file.name}
        onChange={(e) => e.target.files && setFile(e.target.files[0])}
      />
    )}

    <Button type="submit" isLoading={isLoading}>
      {params.id ? "Voltar" : "Enviar"}
      // Se vendo, botão é "Voltar", se criando, é "Enviar"
    </Button>
  </form>
);
```

**O que faz:** Mostra form com dois modos:

1. **Modo criação** (nova solicitude): Inputs habilitados, upload de arquivo, botão "Enviar"
2. **Modo visualização** (vendo antigo): Inputs desabilitados, link para ver comprovante, botão "Voltar"

---

### 5️⃣ `src/pages/SignIn.tsx` - Página de Login

```tsx
// Linhas 1-7: Imports
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useActionState } from "react";
import { z, ZodError } from "zod";
import { api } from "../services/api";
import { AxiosError } from "axios";
import { useAuth } from "../hooks/useAuth";
```

---

```tsx
// Linhas 9-12: Validação de schema
const signInSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z.string().trim().min(1, "Informe a senha"),
});
```

Define as regras: email válido, senha não vazia.

---

```tsx
// Linhas 14-40: Componente
export function SignIn() {

  const [state, formAction, isLoading] = useActionState(signIn, null)
  // useActionState = hook de servidor (React novo)
  // state = estado da ação, formAction = função a chamar, isLoading = está carregando

  const auth = useAuth()  // Acessa autenticação

  async function signIn(_: any, formData: FormData) {
    // formData = dados do form HTML

    try {
      const data = signInSchema.parse({
        email: formData.get("email"),  // Pega email do form
        password: formData.get("password")  // Pega senha do form
      })

      const response = await api.post("/sessions", data)
      // POST /sessions com email e senha

      auth.save(response.data)
      // Salva token e usuário

    } catch (error) {
      if (error instanceof ZodError) {
        return { message: error.issues[0].message }
      }

      if (error instanceof AxiosError) {
        return { message: error.response?.data.message }
      }

      return { message: "Não foi possível entrar" }
    }
  }
```

---

```tsx
// Linhas 42-53: Retornando form
  return (
    <form action={formAction} className="w-full flex flex-col gap-4">
      {/* form + action = nova forma React de forms */}

      <Input
        name="email"  // Envia como "email" no FormData
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
      />

      <Input
        name="password"
        required
        legend="Senha"
        type="password"
        placeholder="senhasupersegura"
      />

      <p className="text-sm text-red-600 text-center my-2 font-medium">
        {state?.message}  // Mostra erro se houver
      </p>

      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>

      <a
        href="/signup"
        className="text-sm text-gray-100 text-center font-semibold mt-10 mb-4 hover:text-green-800 transition ease-linear"
      >
        Criar conta
      </a>
    </form>
  )
}
```

**O que faz:** Mostra form de login com email e senha, after submit entra na aplicação.

---

### 6️⃣ `src/pages/SignUp.tsx` - Página de Cadastro

```tsx
// Linhas 1-7: Imports
import { Input } from "../components/Input";
import { useState } from "react";
import { Button } from "../components/Button";
import { z, ZodError } from "zod";
import { api } from "../services/api";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
```

---

```tsx
// Linhas 9-21: Validação
const signUpSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(3, { message: "O nome precisa ter ao menos 3 caracteres" }),
    email: z.string().email({ message: "Informe um e-mail válido" }),
    password: z
      .string()
      .min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
    passwordConfirm: z.string({ message: "Confirme a senha" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    // Adiciona uma validação extra: senhas precisam ser iguais
    message: "As senhas não são iguais",
    path: ["passwordConfirm"],
  });
```

**O que faz:** Valida que:

1. Nome tem 3+ caracteres
2. Email é válido
3. Senha tem 6+ caracteres
4. Senhas batem

---

```tsx
// Linhas 23-76: Componente
export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setIsLoading(true);

      const data = signUpSchema.parse({
        name,
        email,
        password,
        passwordConfirm,
      });

      await api.post("/users", data);
      // Envia para criar usuário no servidor

      if (confirm("Cadastrado com sucesso! Ir para o login?")) {
        // Mostra confirm dialog
        navigate("/"); // Redireciona para login
      }
    } catch (error) {
      if (error instanceof ZodError) {
        return alert(error.issues[0].message);
      }

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message);
      }

      alert("Não foi possível realizar o cadastro.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
      <Input
        required
        legend="Nome"
        type="text"
        placeholder="Seu nome"
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="senhasupersegura"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Input
        required
        legend="Confirme a senha"
        type="password"
        placeholder="senhasupersegura"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>
        Cadastrar
      </Button>

      <a
        href="/"
        className="text-sm text-gray-100 text-center font-semibold mt-10 mb-4 hover:text-green-800 transition ease-linear"
      >
        Já tenho uma conta
      </a>
    </form>
  );
}
```

**O que faz:** Form de cadastro com 4 campos (nome, email, 2x senha), ativo quando clica "Cadastrar".

---

## 📁 ROUTES (Rotas - Sistema de Navegação)

### 1️⃣ `src/routes/AuthRoutes.tsx` - Rotas de Autenticação

```tsx
// Linhas 1-5: Imports
import { Routes, Route } from "react-router";
import { SignIn } from "../pages/SignIn";
import { AuthLayout } from "../components/AuthLayout";
import { SignUp } from "../pages/SignUp";
import { NotFound } from "../pages/NotFound";
```

---

```tsx
// Linhas 7-22: Componente de rotas
export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        {/* Layout com logo no centro */}

        <Route path="/" element={<SignIn />}></Route>
        {/* / = go to login */}

        <Route path="/signup" element={<SignUp />}></Route>
        {/* /signup = go to signup */}
      </Route>

      <Route path="*" element={<NotFound />}></Route>
      {/* * = qualquer outra URL vai para NotFound */}
    </Routes>
  );
}
```

**O que faz:** Define rotas para usuários não logados:

- `/` → login
- `/signup` → cadastro
- Qualquer outra → erro 404

**Por que existe:** Organizador de rotas para quando ninguém está logado.

---

### 2️⃣ `src/routes/EmployeeRoutes.tsx` - Rotas de Funcionário

```tsx
// Linhas 1-5: Imports
import { Routes, Route } from "react-router";
import { Refund } from "../pages/Refund";
import { NotFound } from "../pages/NotFound";
import { AppLayout } from "../components/AppLayout";
import { Confirm } from "../pages/Confirm";
```

---

```tsx
// Linhas 7-20: Componente
export function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {/* Layout com header e conteúdo */}

        <Route path="/" element={<Refund />}></Route>
        {/* / = criar novo reembolso (employee só cria) */}

        <Route path="/confirm" element={<Confirm />}></Route>
        {/* /confirm = página de confirmação (após criar) */}
      </Route>

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
```

**O que faz:** Define rotas para funcionários logados:

- `/` → criar reembolso
- `/confirm` → confirmação
- Qualquer outra → erro 404

---

### 3️⃣ `src/routes/ManagerRoutes.tsx` - Rotas de Gerente

```tsx
// Linhas 1-5: Imports
import { Route, Routes } from "react-router";
import { Dashboard } from "../pages/Dashboard";
import { AppLayout } from "../components/AppLayout";
import { NotFound } from "../pages/NotFound";
import { Refund } from "../pages/Refund";
```

---

```tsx
// Linhas 7-21: Componente
export function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />}></Route>
        {/* / = ver todos reembolsos (manager só vê) */}

        <Route path="/refund/:id" element={<Refund />}></Route>
        {/* /refund/123 = ver detalhes de um reembolso específico */}
      </Route>

      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}
```

**O que faz:** Define rotas para gerentes logados:

- `/` → dashboard (lista todos)
- `/refund/:id` → ver específico

**Por que existe:** Funcionários e gerentes têm permissões diferentes!

---

### 4️⃣ `src/routes/index.tsx` - Roteador Principal

```tsx
// Linhas 1-6: Imports
import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";
import { Loading } from "../components/Loading";
import { useAuth } from "../hooks/useAuth";
```

---

```tsx
// Linhas 8-32: Componente
export function Routes() {
  const { session, isLoading } = useAuth();
  // Pega dados: se alguém está logado E se está carregando

  function Route() {
    // Função que escolhe quais rotas mostrar

    switch (session?.user.role) {
      case "employee":
        return <EmployeeRoutes />; // Se funcionário, mostra rotas de funcionário
      case "manager":
        return <ManagerRoutes />; // Se gerente, mostra rotas de gerente
      default:
        return <AuthRoutes />; // Se não logado, mostra rotas de auth
    }
  }

  if (isLoading) {
    return <Loading />;
    // Enquanto carrega, mostra "Carregando..."
  }

  return (
    <BrowserRouter>
      <Route></Route>
      {/* Mostra as rotas apropriadas */}
    </BrowserRouter>
  );
}
```

**O que faz:**

1. Verifica se usuário está logado E que tipo
2. Mostra rotas diferentes baseado no tipo de usuário
3. Se estiver carregando, mostra loading
4. Se não logado, mostra rotas de autenticação
5. Se funcionário, mostra rotas de funcionário
6. Se gerente, mostra rotas de gerente

**Por que existe:** Este é o "maestro" das rotas - o direcionador principal.

**Se fosse removida:** ❌ Não haveria sistema de rotas, ninguém saberia onde ir.

**Analogia:** É como uma portaria que diz:

- "Não está logado? Vá para recepção (AuthRoutes)"
- "É funcionário? Vá para seu setor (EmployeeRoutes)"
- "É gerente? Vá para seu escritório (ManagerRoutes)"

---

## 📁 SERVICES (Serviços - Comunicação com Servidor)

### 1️⃣ `src/services/api.ts` - Cliente HTTP

```typescript
// Linhas 1-2: Imports
import axios from "axios";
```

Importa o axios (biblioteca para fazer requisições HTTP).

---

```typescript
// Linhas 4-6: Criando instância
export const api = axios.create({
  baseURL: "http://localhost:3333",
});
```

**O que faz:** Cria um cliente HTTP pré-configurado.

**Por que existe:** Ao invés de escrever:

```tsx
axios.get("http://localhost:3333/refunds");
```

Escreve:

```tsx
api.get("/refunds"); // Mais simples!
```

**Se fosse removida:** ❌ Teria que copiar a URL completa em 20 lugares.

**Analogia:** É como economizar digitação - define a URL uma vez, usa sempre.

**O que é axios:** Biblioteca que faz requisições HTTP de forma simples (GET, POST, PUT, DELETE, etc).

---

## 📁 UTILS (Utilidades - Funções Auxiliares)

### 1️⃣ `src/utils/categories.ts` - Categorias

```typescript
// Linhas 1-7: Imports de ícones
import foodSvg from "../assets/food.svg";
import othersSvg from "../assets/others.svg";
import transportSvg from "../assets/transport.svg";
import servicesSvg from "../assets/services.svg";
import accommodationSvg from "../assets/accommodation.svg";
```

Importa todos os ícones das categorias.

---

```typescript
// Linhas 9-25: Objeto de categorias
export const CATEGORIES = {
  food: {
    name: "Alimentação", // Nome em português
    icon: foodSvg, // Ícone (SVG)
  },
  services: {
    name: "Serviços",
    icon: servicesSvg,
  },
  transport: {
    name: "Transporte",
    icon: transportSvg,
  },
  accommodation: {
    name: "Hospedagem",
    icon: accommodationSvg,
  },
  others: {
    name: "Outros",
    icon: othersSvg,
  },
};
```

**O que faz:** Almacena informações de cada categoria (nome + ícone).

**Por que existe:** Em vez de escrever "Alimentação" em 10 lugares, define uma vez.

**Se fosse removida:** ❌ Teria que copiar nomes e ícones em vários arquivos.

**Exemplo de uso:**

```tsx
CATEGORIES["food"].name; // "Alimentação"
CATEGORIES["food"].icon; // foodSvg (imagem)
```

---

```typescript
// Linhas 27-28: Pegando as chaves das categorias
export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>;
```

**O que faz:** Pega todas as chaves ("food", "services", etc) e garante que TypeScript sabe que são válidas.

**Por que existe:** Para usar em `map()` no Select:

```tsx
CATEGORIES_KEYS.map((cat) => <option>{CATEGORIES[cat].name}</option>);
// food → Alimentação
// services → Serviços
// etc
```

**Se fosse removida:** ❌ Select de categorias não consegueria iterar.

---

### 2️⃣ `src/utils/classMerge.ts` - Mesclador de Classes CSS

```typescript
// Linhas 1-2: Imports
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
```

Importa duas bibliotecas:

- `clsx` = Combina classes condicionalmente
- `twMerge` = Mescla classes Tailwind sem conflitos

---

```typescript
// Linhas 4-6: A função
export function ClassMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**O que faz:**

1. `clsx(inputs)` = Combina múltiplas classes
2. `twMerge()` = Remove conflitos (se tem `w-full` e `w-auto`, remove um)

**Por que existe:** Ao usar componentes, às vezes passa classes que conflitam:

```tsx
<Button className="w-full" />  // Já tem w-full
<Button className="w-1/2" />   // Quer w-1/2
// Conflito! ClassMerge resolve escolhendo a última
```

**Se fosse removida:** ❌ Classes CSS conflitantes quebrariam o layout.

**Analogia:** É como um árbitro - resolve conflitos entre classes.

**Exemplo:**

```tsx
ClassMerge(["w-full", "hover:opacity-50", "w-1/2"]);
// Resultado: "w-1/2 hover:opacity-50" (w-full foi removido)
```

---

### 3️⃣ `src/utils/formatCurrency.ts` - Formatar Moeda

```typescript
// Linhas 1-2: Criando a função
export function formatCurrency(value: number) {
  const currency = Intl.NumberFormat("pt-br", {
    style: "currency", // Formatador de moeda
    currency: "BRL", // Real Brasileiro
  });

  return currency.format(value).replace("R$", "");
  // Formata e remove o símbolo (será adicionado manualmente na UI)
}
```

**O que faz:** Converte número em moeda formatada.

**Por que existe:** Números viram "150,50" em vez de "150.5" ou "150.50".

**Se fosse removida:** ❌ Valores de reembolsos estariam mal formatados.

**Exemplos:**

```tsx
formatCurrency(150.5); // "150,50"
formatCurrency(1000); // "1.000,00"
formatCurrency(45.78); // "45,78"
```

**Por que remove o "R$":** Porque na UI, quer adicionar manualmente para ter mais controle de estilo.

---

## 🎯 RESUMO GERAL DO PROJETO

Agora que comentei tudo, vou fazer um resumo da arquitetura:

### Como tudo se encaixa:

1. **main.tsx** → Ponto de entrada, renderiza App
2. **App.tsx** → Envolve tudo em AuthProvider e Routes
3. **AuthContext** → Gerencia autenticação (login, logout, token)
4. **Routes** (index.tsx) → Escolhe quais rotas mostrar baseado no usuário
5. **AuthRoutes** → Mostra login/signup para não logados
6. **EmployeeRoutes** → Mostra criar reembolso para funcionários
7. **ManagerRoutes** → Mostra dashboard para gerentes
8. **Componentes** → Peças reutilizáveis (Button, Input, etc)
9. **Pages** → Telas inteiras (Login, Dashboard, etc)
10. **API** → Cliente HTTP para comunicar com servidor
11. **Utils** → Funções auxiliares (formatar, categorias, etc)

### O fluxo de um usuário:

1. Abre aplicação
2. Vê tela de login (AuthRoutes)
3. Digita email/senha e clica entrar
4. AuthContext salva token e usuário
5. Routes detecta que é funcionário
6. Mostra EmployeeRoutes (criar reembolso)
7. Usuário cria reembolso
8. Envia para servidor via api.post()
9. Redireciona para /confirm
10. Mostra "Solicitação enviada!"

### Se fosse gerente:

1-5. Igual 6. Mostra ManagerRoutes (dashboard) 7. Vê lista de todos os reembolsos 8. Clica em um para ver detalhes 9. Vê form pré-preenchido (read-only)

---

## 📚 CONCEITOS-CHAVE EXPLICADOS

### React

- **Componentes** = Funções que retornam JSX (HTML + JavaScript)
- **Props** = Propriedades passadas para componentes
- **Estado** = Dados que mudam durante a interação (useState)
- **Hooks** = Funções que "engancha" funcionalidades no React
- **useEffect** = "Efeito colateral" que roda em momentos específicos
- **Contexto** = Compartilhamento global de dados sem passar props

### TypeScript

- **Types** = Define a "forma" dos dados
- **Enums** = Lista de valores possíveis
- **Interfaces** = Contrato que um objeto deve seguir
- **Generics** = Reutilização com tipos parametrizados

### Tailwind CSS

- **Classes** = Estilos pré-definidos (bg-green-100, text-sm, etc)
- **Responsive** = md:, lg: para diferentes tamanhos de tela
- **Hover/Focus** = Estilos ao passar mouse ou focar

### HTTP

- **GET** = Buscar dados
- **POST** = Enviar dados novos
- **API** = Comunicação entre front-end e servidor

---

Pronto! Todos os arquivos comentados linha por linha com explicações didáticas, analogias e exemplos práticos! 🎉
