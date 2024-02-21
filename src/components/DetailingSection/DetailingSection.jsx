import { useState } from 'react';
// import ContactForm from '../Forms/ContactForm/ContactForm';
import './DetailingSection.scss';

function DetailingSection() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    function handleFormDivClick() {
        setIsFormOpen(!isFormOpen);
    }
    return (
        <div className="detailing-container">
            <div className="detailing-cont-info">
                <div className="text-detailing-div">
                    <h1>
                        Auto <br /> Detailing <br />
                        <span className="jed-span">
                            <span className="J">J</span>ED GROUP
                        </span>
                    </h1>
                    <p>
                        Mūsų komanda siūlo aukščiausios kokybės <br />{' '}
                        automobilių detalizavimo paslaugas
                    </p>
                </div>
                <button
                    className="form-div-button"
                    onClick={handleFormDivClick}
                >
                    Noriu paslaugos
                </button>
            </div>

            {/* <div className="detailing-container-form-div">
                {isFormOpen && <ContactForm buttonClose={handleFormDivClick} />}{' '}
            </div> */}
        </div>
    );
}
export default DetailingSection;
