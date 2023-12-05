import ContactForm from '../Forms/ContactForm/ContactForm';
import './DetailingSection.scss';

function DetailingSection() {
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
            </div>
            <ContactForm />
        </div>
    );
}
export default DetailingSection;
