const NavBar = () => {
    return (
        <nav className="bg-white dark:bg-stone-900 shadow">
            <div className="container-wide flex items-center justify-between py-4">
                <div className="text-xl font-bold text-gray-800 dark:text-white">ClassXNeedle</div>
                <div className="space-x-6">
                    <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                        Home
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                        Shop
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                        Orders
                    </a>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;