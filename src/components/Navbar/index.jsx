import { Link, useLocation  } from "react-router-dom";
import ToggleTheme from "../ToggleTheme";

export default function Navbar () {
	const location = useLocation();

  return (
    <nav className="flex items-center h-20 bg-light-200 dark:bg-dark-200 justify-between px-10 sm:rounded-xl sm:m-5">
			<div className="flex items-center">
        <div className="px-5">
          <Link to="/" className={location.pathname === "/" ? "font-bold" : ""}>
            Clima local
          </Link>
        </div>
        <div className="px-5">
          <Link to="/contact" className={location.pathname === "/contact" ? "font-bold" : ""}>
            Contato
          </Link>
        </div>
        <div className="px-5">
          <Link to="/search_cep" className={location.pathname === "/search_cep" ? "font-bold" : ""}>
            Busca CEP
          </Link>
        </div>
			</div>
			<ToggleTheme />
    </nav>
  )
};
