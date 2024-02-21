import { Outlet } from 'react-router-dom';
import AboutUs from '../../components/AboutUsSection/AboutUs';
import DetailingSection from '../../components/DetailingSection/DetailingSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './MainPage.scss';
import Prices from '../../components/Prices/Prices';

function MainPage() {
    return (
        <>
            <main className="main-page">
                <Header />

                <Outlet />
                {/* <section className="content-container"  id='detailing'>
                    <DetailingSection />
                </section> */}
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
