import './ContactFooterForm.scss';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactFooterForm() {
    const form = useRef();

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        user_car: '',
        user_carModel: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_pwazee8', 'template_uyvwpa5', form.current, {
                publicKey: 'C312MIquvmgzWT8VT',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );

        setFormData({
            user_name: '',
            user_email: '',
            user_phone: '',
            user_car: '',
            user_carModel: '',
            message: '',
        });
    };

    return (
        <>
            <div className="footer-form-div">
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="footer-contact-form"
                >
                    <h3>Palikite Kontaktus</h3>

                    <div className="footer-form-group">
                        <input
                            value={formData.user_name}
                            onChange={handleChange}
                            className="form-field"
                            placeholder="Vardas*"
                            name="user_name"
                            type="text"
                        />
                    </div>

                    <div className="footer-form-group">
                        <input
                            className="form-field"
                            value={formData.user_email}
                            onChange={handleChange}
                            placeholder="El. Paštas*"
                            name="user_email"
                            type="email"
                        />
                    </div>

                    <div className="footer-form-group">
                        <input
                            value={formData.user_phone}
                            onChange={handleChange}
                            className="form-field"
                            placeholder="Telefono numeris*"
                            name="user_phone"
                            type="number"
                        />
                    </div>

                    <div className="footer-form-group">
                        <input
                            value={formData.user_car}
                            onChange={handleChange}
                            className="form-field"
                            placeholder="Automobilio markė*"
                            name="user_car"
                            type="text"
                        />
                    </div>
                    <div className="footer-form-group">
                        <input
                            value={formData.user_carModel}
                            onChange={handleChange}
                            className="form-field"
                            placeholder="Automobilio modelis*"
                            name="user_carModel"
                            type="text"
                        />
                    </div>
                    <div className="footer-form-group">
                        <select
                            className="footer-form-select"
                            name="user_option"
                            id=""
                        >
                            <option
                                className="footer-option-placeholder"
                                value=""
                                disabled
                                selected
                                hidden
                            >
                                Pasirinkite Paslaugą
                            </option>
                            <option
                                name="user_option"
                                className="footer-form-options"
                                value="Salono valymas"
                            >
                                Salono valymas
                            </option>
                            <option
                                name="user_option"
                                className="footer-form-options"
                                value="Kėbulo atnaujinimas"
                            >
                                Kėbulo atnaujinimas
                            </option>
                        </select>
                    </div>

                    <textarea
                        value={formData.message}
                        onChange={handleChange}
                        className="form-field"
                        placeholder="Jūsų komentaras*"
                        name="message"
                        id=""
                        cols="30"
                        rows="3"
                    ></textarea>
                    <div className="footer-form-button-div">
                        <button
                            type="submit"
                            value="Send"
                            className="footer-form-button"
                        >
                            {' '}
                            Pateikti uzklausa
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default ContactFooterForm;
