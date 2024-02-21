import Header from '../header/Header';
import './Contacts.scss';
import { CiMail } from 'react-icons/ci';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import ContactFooterForm from '../Forms/ContactFooterForm/ContactFooterForm';
function Contacts() {
    return (
        <div className="contact-page">
            <Header />

            <section className="contact-section">
                <div className="contact-title-div">
                    <div className="h1-div">
                        <h1>
                            Mūsų <br /> Kontaktai
                        </h1>
                    </div>
                </div>
                <div className="contact-form-with-info">
                    <div className="contact-footer-div">
                        <div className="contacts-h2-div">
                            <h2>Kontaktai</h2>
                        </div>
                        <div className="adress-cotnact contact-info">
                            <IoLocationOutline color="#ed4747" size="30px" />
                            <div className="contact-info-inside-div">
                                <h3>Mūsų Adresas</h3>
                                <p>
                                    Lithuania <br /> Vilnius
                                </p>
                            </div>
                        </div>

                        <div className="phone-contact contact-info">
                            <FaPhoneAlt color="#ed4747" size="25px" />
                            <div className="contact-info-inside-div">
                                <h3>Telefono numeris</h3>
                                <p> +37000000000</p>
                            </div>
                        </div>

                        <div className="gmail-contact contact-info">
                            <CiMail color="#ed4747" size="30px" />
                            <div className="contact-info-inside-div">
                                <h3>Mūsų El. paštas</h3>
                                <p>edvin.kondratovic@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-footer-form-div">
                        <ContactFooterForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Contacts;
