import './AboutUs.scss';
import aboutLogo from '../../assets/images/about-image.png';
function AboutUs() {
    return (
        <div className="about-div">
            <div className="about-grid-h2">
                <h2 className="about-h2">Apie mus</h2>
            </div>
            <div className="about-img-div">
                <img className="about-img" src={aboutLogo} alt="about-logo" />
            </div>

            <div className="about-us-text">
                <p className="about-p">
                    Mes esame aukšto lygio automobilių kėbulo ir interjero
                    priežiuros specialistai. Mūsų meistrai turi ne tik aukštą
                    kvalifikaciją, bet ir gilų supratimą apie automobilių
                    priežiūros subtilybes. Mes ne tik valome automobilius - mes
                    kuriame meno kūrinius, pabrėžiančius kiekvieną liniją jūsų
                    brangaus automobilio. Automobilių detalizavimas mums yra ne
                    tik darbas, bet ir aistra kurianti veikla.
                </p>
            </div>
        </div>
    );
}
export default AboutUs;
