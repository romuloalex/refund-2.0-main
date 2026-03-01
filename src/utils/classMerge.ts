import { clsx, type ClassValue } from "clsx"; // utilitário para juntar nomes de classe condicionalmente
import { twMerge } from "tailwind-merge"; // remove classes conflitantes do Tailwind

// combina múltiplos valores de classe em uma string e resolve conflitos do Tailwind
export function ClassMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
/* usage: ClassMerge("w-full", isActive && "bg-green-100")
   clsx handles boolean values, and twMerge makes sure if you pass
   "w-full" and "w-1/2" the latter wins. */
