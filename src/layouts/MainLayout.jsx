import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div className="font-poppins">
            <header>
            {/* Navbar */}
                <Navbar />
            </header>

            <main>
            {/* Dunamic Section  */}
                <div className="min-h-[calc(100vh-232px)] max-w-7xl mx-auto px-3 py-12">
                    <Outlet />
                </div>
            </main>

            <footer>
            {/* Footer  */}
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;
