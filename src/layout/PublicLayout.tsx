import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

const PublicLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
