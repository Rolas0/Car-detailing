import DetailingSection from '../../components/DetailingSection/DetailingSection';
import Header from '../../components/header/Header';
import './MainPage.scss';

function MainPage() {
    return (
        <>
            <main className="main-page">
                <Header />
                <section className="content-container">
                    <DetailingSection />
                </section>
                <section className="services-contaienr"> services</section>
            </main>
            <div className="footer-div">footer</div>
        </>
    );
}
export default MainPage;
