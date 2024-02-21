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
                    <IoLocationOutline size="30px" />
                    <p>
                        Lithuania <br /> Vilnius
                    </p>
                </div>

                <div className="phone-div info">
                    <FaPhoneAlt size="25px" />
                    <p> +37000000000</p>
                </div>

                <div className="gmail-div info">
                    <CiMail size="30px" />
                    <p>edvin.kondratovic@gmail.com</p>
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
                    Copyrights &copy; 2023 | JED Group All rights reserved.{' '}
                </p>
            </div>
        </div>
    );
}
export default Footer;
