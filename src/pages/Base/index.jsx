import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Base () {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
};
