import { Route, Routes } from 'react-router-dom';
import Home from './pages/home.page.tsx';
import CompanyRegistrationPage from './pages/companyRegistration.page.tsx';
import ShareholderRegistrationPage from './pages/shareholderRegistration.page.tsx';
import AdminPage from './pages/admin.page.tsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company" element={<CompanyRegistrationPage />} />
      <Route path="/shareholder" element={<ShareholderRegistrationPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

