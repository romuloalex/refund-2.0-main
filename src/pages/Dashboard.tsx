import { Button } from "../components/Button"; // componente de botão reutilizável
import { Input } from "../components/Input"; // componente de input estilizado
import React, { useState, useEffect } from "react"; // React e hooks
import { RefundItem, type RefundItemProps } from "../components/RefundItem"; // item para renderizar cada reembolso
import { CATEGORIES } from "../utils/categories"; // mapeamento de chaves de categoria para nomes/ícones
import { Pagination } from "../components/Pagination"; // controles de paginação
import { formatCurrency } from "../utils/formatCurrency"; // auxiliar para formatar números
import { api } from "../services/api"; // instância do axios para chamadas ao servidor
import { AxiosError } from "axios"; // tipo de erro do axios
import searchSvg from "../assets/search.svg"; // ícone de pesquisa

const PER_PAGE = 10; // número de reembolsos por página

export function Dashboard() {
  // estado do componente:
  const [name, setName] = useState(""); // termo de busca
  const [page, setPage] = useState(1); // número da página atual
  const [totalPages, setTotalPages] = useState(0); // total de páginas retornadas pela API
  const [refunds, setRefunds] = useState<RefundItemProps[]>([]); // lista de reembolsos a exibir

  // buscar reembolsos do backend usando filtros atuais
  async function fetchRefunds() {
    try {
      const response = await api.get<RefundsPaginationAPIResponse>(
        `/refunds?name=${name.trim()}&page=${page}&perPage=${PER_PAGE}`,
      );

      setRefunds(
        response.data.refunds.map((refund) => ({
          id: refund.id,
          username: refund.user.name,
          description: refund.name,
          amount: formatCurrency(refund.amount), // convert to Brazilian format
          categoryImg: CATEGORIES[refund.category].icon, // escolhe ícone correto
        })),
      );

      setTotalPages(response.data.pagination.totalPages); // atualizar info de paginação
    } catch (error) {
      console.log(error);

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message); // mostrar mensagem de erro da API
      }

      return alert("Não foi possível carregar as solicitações"); // generic error
    }
  }

  // chamado quando o formulário de busca é enviado
  function onSubmit(e: React.FormEvent) {
    e.preventDefault(); // evitar recarregamento da página

    fetchRefunds(); // buscar usando nome e página atuais
  }

  // alterar o número da página com segurança
  function handlePagination(action: "next" | "previous") {
    setPage((prevPage) => {
      if (action === "next" && prevPage < totalPages) {
        return prevPage + 1;
      }

      if (action === "previous" && prevPage > 1) {
        return prevPage - 1;
      }

      return prevPage; // sem mudança se nos limites
    });
  }

  // quando o estado da página muda, recarregar reembolsos
  useEffect(() => {
    fetchRefunds();
  }, [page]);

  return (
    <div className="w-full bg-gray-500 flex flex-col md:min-w-[768px] p-10 rounded-2xl">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Dashboard</h1>

      {/* search form */}
      <form
        onSubmit={onSubmit}
        className="flex items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6"
      >
        <Input
          placeholder="Pesquisar pelo nome"
          onChange={(e) => setName(e.target.value)} // atualiza busca ao digitar
        />

        <Button type="submit" variant="icon">
          <img src={searchSvg} alt="Ícone de pesquisar" className="w-5" />
        </Button>
      </form>

      {/* list of refunds with scroll */}
      <div className="my-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
        {refunds.map((item) => (
          <RefundItem key={item.id} data={item} href={`/refund/${item.id}`} />
        ))}
      </div>

      {/* pagination controls */}
      <Pagination
        current={page}
        total={totalPages}
        onNext={() => handlePagination("next")}
        onPrevious={() => handlePagination("previous")}
      />
    </div>
  );
}
