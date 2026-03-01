import { useAuth } from "../hooks/useAuth"; // hook to access auth context
import logoSvg from "../assets/logo.svg"; // logo image
import logoutSvg from "../assets/logout.svg"; // ícone de logout

export function Header() {
  const auth = useAuth(); // get auth data and functions

  return (
    <header className="w-full flex justify-between items-center">
      <img src={logoSvg} alt="Logo" className="my-8" />

      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-200">
          Olá, {auth.session?.user.name} {/* shows user name if available */}
        </span>
        <img
          src={logoutSvg}
          alt="Ícone de sair"
          className="my-8 cursor-pointer hover: opacity-75 transition ease-linear"
          onClick={() => auth.remove()} // call remove to log out
        />
      </div>
    </header>
  );
}
