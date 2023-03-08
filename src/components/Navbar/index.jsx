import { Link } from 'react-router-dom';

export default function Navbar () {
  return (
    <nav>
      <div className={'links-container'}>
        <div className={'link'}>
          <Link to='/'>
            Clima local
          </Link>
        </div>
        <div className={'link'}>
          <Link to='/contact'>
            Contato
          </Link>
        </div>
        <div className={'link'}>
          <Link to='/search_cep'>
            Busca CEP
          </Link>
        </div>
      </div>
    </nav>
  )
};
