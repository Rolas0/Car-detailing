import './ContactForm.scss';

function ContactForm() {
    return (
        <form className="contact-form">
            <h3>Palikite Kontaktus</h3>

            <div className="form-group">
                <label htmlFor="">Vardas *</label>
                <input placeholder="Vardas" type="text" />
            </div>

            <div className="form-group">
                <label htmlFor="">El. Paštas *</label>
                <input placeholder="El. Paštas" type="email" />
            </div>

            <div className="form-group">
                <label htmlFor="">Telefono numeris *</label>
                <input placeholder="Telefono numeris" type="number" />
            </div>

            <div className="form-group">
                <label htmlFor="">Automobilio markė *</label>
                <input placeholder="Automobilio markė" type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="">Automobilio modelis *</label>
                <input placeholder="Automobilio modelis" type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="">Paslauga *</label>
                <select className="form-select" name="" id="">
                    <option
                        className="option-placeholder"
                        value=""
                        disabled
                        selected
                        hidden
                    >
                        Pasirinkite Paslaugą
                    </option>
                    <option className="form-options" value="">
                        Salono valymas
                    </option>
                    <option className="form-options" value="">
                        Kėbulo atnaujinimas
                    </option>
                </select>
            </div>

            <textarea
                placeholder="Jusu komentaras"
                name=""
                id=""
                cols="30"
                rows="10"
            ></textarea>
            <div className="form-button-div">
                <button className="form-button"> Pateikti uzklausa</button>
            </div>
        </form>
    );
}
export default ContactForm;
