import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './navBar'
import Footer from './footerBar';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;