import Layout from '../components/layout/layout';
import AdminDashboard from '../components/admin/adminDashboard';

const AdminPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            View all registered companies and their shareholders.
          </p>
        </div>
        <AdminDashboard />
      </div>
    </Layout>
  );
};

export default AdminPage;
