import { Input } from "../components/Input"; // componente de texto
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories"; // metadados de categoria e chaves
import { Select } from "../components/Select"; // componente dropdown
import { useEffect, useState } from "react"; // hooks do React
import { Upload } from "../components/Upload"; // componente de upload de arquivo
import { Button } from "../components/Button"; // botão estilizado
import { useNavigate, useParams } from "react-router"; // hooks de navegação
import { z, ZodError } from "zod"; // biblioteca de validação
import { api } from "../services/api"; // instância do axios
import { AxiosError } from "axios"; // tipo de erro do axios
import { formatCurrency } from "../utils/formatCurrency"; // auxiliar para formatar dinheiro
import fileSvg from "../assets/file.svg"; // ícone para link de arquivo

// esquema usado para validar os campos do formulário antes de enviar
const refundSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Informe um nome claro para a sua solicitação" }),
  category: z.string().min(1, { message: "Informe a categoria" }),
  amount: z.coerce
    .number({ message: "Informe um valor válido" })
    .positive({ message: "Informe um valor válido e superior a 0" }),
});

export function Refund() {
  // variáveis de estado para entradas do formulário e outros flags
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileURL, setFileURL] = useState<string | null>(null);

  const navigate = useNavigate(); // usado para redirecionar o usuário

  const params = useParams<{ id: string }>(); // lê o parâmetro :id se presente

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault(); // evita comportamento padrão de envio do formulário

    if (params.id) {
      // ao visualizar reembolso existente, o botão apenas retorna
      return navigate(-1);
    }

    try {
      setIsLoading(true);

      if (!file) {
        return alert("Selecione um arquivo de comprovante"); // requer um arquivo enviado
      }

      const fileUploadForm = new FormData();
      fileUploadForm.append("file", file); // adiciona arquivo aos dados do formulário

      const response = await api.post("/uploads", fileUploadForm);
      // enviar arquivo para o servidor e receber nome de arquivo em resposta

      const data = refundSchema.parse({
        name,
        category,
        amount: amount.replace(",", "."), // converte vírgula para ponto para parse numérico
      });

      await api.post("/refunds", { ...data, filename: response.data.filename });
      // enviar dados do reembolso junto com o nome do arquivo enviado

      navigate("/confirm", { state: { fromSubmit: true } });
      // ir para página de confirmação passando flag no estado
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        return alert(error.issues[0].message); // mensagem de erro de validação
      }

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message); // mensagem de erro do servidor
      }

      alert("Não foi possível realizar a solicitação");
    } finally {
      setIsLoading(false); // sempre limpa flag de carregamento
    }
  }

  // buscar dados do reembolso existente quando parâmetro :id estiver presente (modo visualização)
  async function fetchRefunds(id: string) {
    try {
      const { data } = await api.get<RefundAPIResponse>(`/refunds/${id}`);

      setName(data.name);
      setCategory(data.category);
      setAmount(formatCurrency(data.amount));
      setFileURL(data.filename);
    } catch (error) {
      console.log(error);

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message);
      }

      return alert("Não foi possível carregar");
    }
  }

  useEffect(() => {
    if (params.id) {
      fetchRefunds(params.id); // load data when viewing
    }
  }, [params.id]);

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
          Dados da despesa para solicitar reembolso.{" "}
        </p>
      </header>

      <Input
        required
        legend="Nome da solicitação"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={!!params.id} // disable when viewing existing refund
      />

      <div className="flex gap-4">
        <Select
          required
          legend="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={!!params.id}
        >
          {CATEGORIES_KEYS.map((category) => (
            <option key={category} value={category}>
              {CATEGORIES[category].name}
            </option>
          ))}
        </Select>

        <Input
          required
          legend="Valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          disabled={!!params.id}
        />
      </div>

      {params.id && fileURL ? (
        <a
          href={`http://localhost:3333/uploads/${fileURL}`}
          target="_blank"
          className="text-sm text-green-100 font-semibold flex items-center justify-center gap-2 my-6 hover:opacity-70 transition ease-linear"
        >
          <img src={fileSvg} alt="Ícone do arquivo" />
          Abrir comprovante
        </a>
      ) : (
        <Upload
          filename={file && file.name}
          onChange={(e) => e.target.files && setFile(e.target.files[0])}
        ></Upload>
      )}

      <Button type="submit" isLoading={isLoading}>
        {params.id ? "Voltar" : "Enviar"}
      </Button>
    </form>
  );
}
