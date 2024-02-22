import { Outlet } from 'react-router-dom';
import AboutUs from '../../components/AboutUsSection/AboutUs';

import ServicesSection from '../../components/ServicesSection/ServicesSection';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './MainPage.scss';

function MainPage() {
    return (
        <>
            <main className="main-page">
                <Header />

                <Outlet />

                <section className="services-contaienr" id="services">
                    <ServicesSection />
                </section>

                <section className="about-contaienr" id="about">
                    <AboutUs />
                </section>
            </main>
            <footer className="footer-contaienr" id="contacts">
                <Footer />
            </footer>
        </>
    );
}
export default MainPage;
