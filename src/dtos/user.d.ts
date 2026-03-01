type UserAPIRole = "employee" | "manager"; // apenas dois papéis são permitidos

/* Response sent by the server when a user successfully logs in: */
type UserAPIResponse = {
  token: string; // token de autenticação (JWT)
  user: {
    id: string; // id único do usuário
    name: string; // nome completo
    email: string; // endereço de email
    role: UserAPIRole; // 'employee' ou 'manager'
  };
}; // this object is stored in auth context and localStorage
