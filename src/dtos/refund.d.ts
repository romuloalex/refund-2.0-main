type RefundAPIResponse = {
  id: string; // id único do reembolso
  userId: string; // id do usuário que enviou
  name: string; // descrição da despesa
  category: CategoriesAPIEnum; // chave de categoria (uma das enumerações)
  amount: number; // valor numérico bruto em reais
  filename: string; // nome do arquivo armazenado do comprovante enviado
  user: {
    name: string; // objeto aninhado contém pelo menos o nome do usuário
  };
};

/* The type above represents the shape of a single refund object
   received from the backend. */

type RefundsPaginationAPIResponse = {
  refunds: RefundAPIResponse[]; // lista de reembolsos da página atual
  pagination: {
    page: number; // número da página atual
    totalPages: number; // quantas páginas existem
    perPage: number; // itens por página
    totalRecords: number; // número total de reembolsos no banco de dados
  };
};
/* When requesting a paginated list, the API returns the refunds array
   along with pagination metadata. */
