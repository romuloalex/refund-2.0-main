# Refund 2.0

Refund 2.0 é uma aplicação web para solicitação e gerenciamento de reembolsos corporativos, desenvolvida em React com TypeScript, TailwindCSS e Vite. O sistema permite que funcionários registrem pedidos de reembolso, anexem comprovantes e acompanhem o status, enquanto gestores podem visualizar, filtrar e analisar as solicitações.

## Funcionalidades

- **Autenticação de usuários** (login e cadastro)
- **Solicitação de reembolso** com upload de comprovante
- **Dashboard para gestores** com paginação e busca por nome
- **Visualização detalhada** de cada solicitação
- **Controle de acesso** por perfil (funcionário e gestor)
- **Feedback visual** para carregamento, erros e sucesso

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [Zod](https://zod.dev/) (validação de formulários)
- [React Router](https://reactrouter.com/)
- [clsx](https://github.com/lukeed/clsx) e [tailwind-merge](https://github.com/dcastil/tailwind-merge) (utilitários de classes CSS)

## Instalação e Uso

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/AndreTrevizam/refund-2.0.git
   cd refund-2.0

2. **Clone o repositório do backend:**
   ```sh
   git clone https://github.com/AndreTrevizam/refund-api.git
   cd refund-api

3. **No repositório do backend execute:**
   ```sh
   npm i
   npm run dev

4. **No repositório do front end execute:**
   ```sh
   npm i
   npm run dev

# Nota: 
Certifique-se de que a API backend esteja rodando em ``http://localhost:3333`` para pleno funcionamento.