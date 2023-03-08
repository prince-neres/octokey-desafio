import { Link } from 'react-router-dom';
import { MoonIcon } from '@heroicons/react/24/solid';

export default function Navbar () {
  return (
    <nav className="flex items-center h-20 bg-gray-500 justify-between px-10 sm:rounded-xl sm:m-5">
			<div className="flex items-center">
        <div className="text-gray-100 px-5">
          <Link to='/'>
            Clima local
          </Link>
        </div>
        <div className="text-gray-100 px-5">
          <Link to='/contact'>
            Contato
          </Link>
        </div>
        <div className="text-gray-100 px-5">
          <Link to='/search_cep'>
            Busca CEP
          </Link>
        </div>
			</div>
			<MoonIcon className="h-14 text-gray-100 hidden sm:block cursor-pointer"/>
    </nav>
  )
};
