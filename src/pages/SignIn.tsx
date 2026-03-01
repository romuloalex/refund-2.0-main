import { Button } from "../components/Button"; // componente de botão
import { Input } from "../components/Input"; // componente de campo de entrada
import { useActionState } from "react"; // hook para lidar com ações de formulário
import { z, ZodError } from "zod"; // biblioteca de validação
import { api } from "../services/api"; // instância do axios
import { AxiosError } from "axios"; // tipo de erro do axios
import { useAuth } from "../hooks/useAuth"; // hook customizado para acessar autenticacao

// esquema usado para validar os dados do formulário de login
const signInSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z.string().trim().min(1, "Informe a senha"),
});

export function SignIn() {
  const [state, formAction, isLoading] = useActionState(signIn, null);
  // state armazena qualquer mensagem retornada pela ação, formAction é o manipulador de envio, isLoading é o indicador

  const auth = useAuth(); // acessa métodos de autenticação

  async function signIn(_: any, formData: FormData) {
    try {
      const data = signInSchema.parse({
        email: formData.get("email"),
        password: formData.get("password"),
      });

      const response = await api.post("/sessions", data);
      // enviar credenciais para o servidor

      auth.save(response.data); // salva token e usuário no contexto
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        return { message: error.issues[0].message };
      }

      if (error instanceof AxiosError) {
        return { message: error.response?.data.message };
      }

      return { message: "Não foi possível entrar" };
    }
  }

  return (
    <form action={formAction} className="w-full flex flex-col gap-4">
      <Input
        name="email"
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
      ></Input>

      <Input
        name="password"
        required
        legend="Senha"
        type="password"
        placeholder="senhasupersegura"
      ></Input>

      <p className="text-sm text-red-600 text-center my-2 font-medium">
        {state?.message} {/* exibe mensagem de erro se houver */}
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
  );
}
