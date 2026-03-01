export function formatCurrency(value: number) {
  // usa a API de internacionalização embutida para formatar o número
  const currency = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  // a formatação retorna algo como "R$ 150,00" – remove o símbolo
  return currency.format(value).replace("R$", "");
}
/* quem chama geralmente junta o símbolo manualmente (ou exibe separadamente)
   o que dá mais controle sobre o estilo. */
