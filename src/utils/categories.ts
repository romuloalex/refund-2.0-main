import foodSvg from "../assets/food.svg"; // ícone para categoria de alimentação
import othersSvg from "../assets/others.svg"; // ícone para outros
import transportSvg from "../assets/transport.svg"; // ícone para transporte
import servicesSvg from "../assets/services.svg"; // ícone para serviços
import accommodationSvg from "../assets/accommodation.svg"; // ícone para acomodação

// objeto contendo metadados para cada chave de categoria
export const CATEGORIES = {
  food: {
    name: "Alimentação",
    icon: foodSvg,
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

// lista de chaves ("food", "services", etc) usada para iterar sobre categorias
export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>;
