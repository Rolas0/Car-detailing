import './ServicesSection.scss';
import polishIcon from '../../assets/images/polish-icon-1.png';
import itneriorCareIcon from '../../assets/images/interior-care.png';
import carRepairLogo from '../../assets/images/car-repair-logo.png';
import { useState } from 'react';
import ContactForm from '../Forms/ContactForm/ContactForm';
function ServicesSection() {
    const [isFormOpenOne, setIsFormOpenOne] = useState(false);
    const [isFormOpenTwo, setIsFormOpenTwo] = useState(false);
    const [isFormOpenThree, setIsFormOpenThree] = useState(false);

    function handleFormDivClickOne() {
        setIsFormOpenOne(!isFormOpenOne);
    }
    function handleFormDivClickTwo() {
        setIsFormOpenTwo(!isFormOpenTwo);
    }
    function handleFormDivClickThree() {
        setIsFormOpenThree(!isFormOpenThree);
    }
    return (
        <div className="services-section">
            <div className="detailing-container-form-div">
                {isFormOpenOne && (
                    <ContactForm
                        option={'Automobilio poliravimas'}
                        optionValue={'Automobilio poliravimas'}
                        buttonClose={handleFormDivClickOne}
                    />
                )}{' '}
            </div>
            <div className="detailing-container-form-div">
                {isFormOpenTwo && (
                    <ContactForm
                        option={'Cheminis valymas'}
                        optionValue={'Cheminis valymas'}
                        buttonClose={handleFormDivClickTwo}
                    />
                )}{' '}
            </div>
            <div className="detailing-container-form-div">
                {isFormOpenThree && (
                    <ContactForm
                        option={'Kėbulo remontas'}
                        optionValue={'Kėbulo remontas'}
                        buttonClose={handleFormDivClickThree}
                    />
                )}{' '}
            </div>
            <h1 className="h1-services-title">Paslaugos</h1>
            <div className="all-services-div">
                <div className="service-card card-polish">
                    <div className="service-icon-div">
                        <img
                            className="img-icon-one"
                            src={polishIcon}
                            alt="polish-Icon"
                        />
                    </div>
                    <div className="service-text-div">
                        <h3>Poliravimo paslaugos</h3>
                        <p>Automobilio kėbulo poliravimas. </p>
                        <p>Greitas ir kokybiškas žibintu poliravimas.</p>
                    </div>
                    <div className="service-button-div">
                        <button
                            onClick={handleFormDivClickOne}
                            className="service-button"
                        >
                            Noriu paslaugos
                        </button>
                    </div>
                </div>

                <div className="service-card interior-cleaning ">
                    <div className="service-icon-div">
                        <img
                            className="img-icon-two"
                            src={itneriorCareIcon}
                            alt="itnerior-Care-Icon"
                        />
                    </div>
                    <div className="service-text-div">
                        <h3>Cheminio valymo paslaugos</h3>
                        <p>Automobilio kėbulo poliravimas. </p>
                        <p>Greitas ir kokybiškas žibintu poliravimas.</p>
                    </div>
                    <div className="service-button-div">
                        <button
                            onClick={handleFormDivClickTwo}
                            className="service-button"
                        >
                            Noriu paslaugos
                        </button>
                    </div>
                </div>

                <div className="service-card body-repair">
                    <div className="service-icon-div">
                        <img
                            className="img-icon-three"
                            src={carRepairLogo}
                            alt="car-repair-logo"
                        />
                    </div>
                    <div className="service-text-div">
                        <h3>Kėbulo remonto paslaugos</h3>
                        <p>Automobilio kėbulo poliravimas. </p>
                        <p>Greitas ir kokybiškas žibintu poliravimas.</p>
                    </div>
                    <div className="service-button-div">
                        <button
                            onClick={handleFormDivClickThree}
                            className="service-button"
                        >
                            Noriu paslaugos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ServicesSection;
