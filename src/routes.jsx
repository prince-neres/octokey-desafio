import Base from './pages/Base';
import Contact from './pages/Contact';
import SearchCEP from './pages/SearchCEP';
import Weather from './pages/Weather';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Base />} >
          <Route index element={<Weather />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/search_cep' element={<SearchCEP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};
