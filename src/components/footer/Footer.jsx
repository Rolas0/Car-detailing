import footerLogo from '../../assets/images/auto-logo-without-bg.png';
import './Footer.scss';
import { CiMail } from 'react-icons/ci';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
function Footer() {
    return (
        <div className="footer">
            <div className="footer-div-one">
                <div className="footer-img-div">
                    <img
                        className="footer-logo"
                        src={footerLogo}
                        alt="Footer-Logo"
                    />
                </div>
            </div>

            <div className="footer-div-two">
                <div>
                    <h2>Kontaktai</h2>
                </div>
                <div className="adress-div info">
                    <IoLocationOutline color="#ed4747" size="30px" />
                    <p>
                        Lithuania <br /> Vilnius
                    </p>
                </div>

                <div className="phone-div info">
                    <FaPhoneAlt color="#ed4747" size="25px" />
                    <p>+37069922227</p>
                </div>

                <div className="gmail-div info">
                    <CiMail color="#ed4747" size="30px" />
                    <p>info@jedgroup.lt</p>
                </div>
            </div>

            <div className="footer-div-three">
                <div className="footer-about-div">
                    <h2>Apie mus</h2>
                    <p>
                        Mes esame aukšto lygio automobilių kėbulo ir interjero
                        priežiuros specialistai. Mūsų meistrai turi ne tik
                        aukštą kvalifikaciją, bet ir gilų supratimą apie
                        automobilių priežiūros subtilybes.
                    </p>
                </div>
                <p className="copyr">
                    Copyrights <span className="copyright-icon">&copy;</span>{' '}
                    2023 <span className="copyright-icon">|</span> JED Group All
                    rights reserved.{' '}
                </p>
            </div>
        </div>
    );
}
export default Footer;
