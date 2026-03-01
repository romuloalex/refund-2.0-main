enum CategoriesAPIEnum {
  Food = "food", // categoria alimentação
  Others = "others", // categoria outros
  Services = "services", // serviços
  Transport = "transport", // transporte
  Accommodation = "accommodation", // hospedagem
}
/* Este enum define o conjunto de strings de categoria válidas retornadas pela API.
   Usar um enum garante que o TypeScript avisará se você tentar usar um nome de categoria inválido
   em outra parte do código. */
