import Layout from "../components/layout/layout.tsx";
import ShareholderRegistrationForm from "../components/Registration/shareholderRegistration.tsx";

const ShareholderRegistrationPage = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                    Register as a Shareholder
                </h1>
                <div className="bg-white dark:bg-stone-800 shadow-lg rounded-lg p-6 sm:p-8">
                    <ShareholderRegistrationForm />
                </div>
            </div>
        </Layout>
    );
};

export default ShareholderRegistrationPage;