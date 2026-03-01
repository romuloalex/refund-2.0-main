import { Input } from "../components/Input";
import { useState } from "react";
import { Button } from "../components/Button";
import { z, ZodError } from "zod"
import { api } from "../services/api";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";

const signUpSchema = z.object({
  name: z.string().trim().min(3, { message: "O nome precisa ter ao menos 3 caracteres" }),
  email: z.string().email({ message: "Informe um e-mail válido" }),
  password: z.string().min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
  passwordConfirm: z.string({ message: "Confirme a senha" })
}).refine((data) => data.password === data.passwordConfirm, {
  message: "As senhas não são iguais",
  path: ["passwordConfirm"]
})

export function SignUp() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      setIsLoading(true)

      const data = signUpSchema.parse({
        name,
        email,
        password,
        passwordConfirm
      })

      await api.post("/users", data)

      if (confirm("Cadastrado com sucesso! Ir para o login?")) {
        navigate("/")
      }

    } catch (error) {
      console.log(error)

      if (error instanceof ZodError) {
        return alert(error.issues[0].message)
      }

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message)
      }

      alert("Não foi possível realizar o cadastro.")
    } finally {
      setIsLoading(false)
    }
  }

  return (

    <form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
      <Input required legend="Nome" type="text" placeholder="Seu nome" onChange={(e) => setName(e.target.value)}></Input>

      <Input required legend="E-mail" type="email" placeholder="seu@email.com" onChange={(e) => setEmail(e.target.value)}></Input>

      <Input required legend="Senha" type="password" placeholder="senhasupersegura" onChange={(e) => setPassword(e.target.value)}></Input>

      <Input required legend="Confirme a senha" type="password" placeholder="senhasupersegura" onChange={(e) => setPasswordConfirm(e.target.value)}></Input>

      <Button type="submit" isLoading={isLoading}>Cadastrar</Button>

      <a href="/" className="text-sm text-gray-100 text-center font-semibold mt-10 mb-4 hover:text-green-800 transition ease-linear">Já tenho uma conta</a>
    </form >
  )
}