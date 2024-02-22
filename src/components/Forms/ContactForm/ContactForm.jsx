import './ContactForm.scss';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm({ buttonClose, option, optionValue }) {
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
            <div className="form-div">
                <div className="close-button-div">
                    <button onClick={buttonClose} className="close-button">
                        X
                    </button>
                </div>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <h3>Palikite Kontaktus</h3>

                    <div className="form-group">
                        <label>Vardas *</label>
                        <input
                            value={formData.user_name}
                            onChange={handleChange}
                            name="user_name"
                            placeholder="Vardas"
                            type="text"
                        />
                    </div>

                    <div className="form-group">
                        <label>El. Paštas *</label>
                        <input
                            value={formData.user_email}
                            onChange={handleChange}
                            name="user_email"
                            placeholder="El. Paštas"
                            type="email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Telefono numeris *</label>
                        <input
                            value={formData.user_phone}
                            onChange={handleChange}
                            name="user_phone"
                            placeholder="Telefono numeris"
                            type="number"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Automobilio markė *</label>
                        <input
                            value={formData.user_car}
                            onChange={handleChange}
                            name="user_car"
                            placeholder="Automobilio markė"
                            type="text"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Automobilio modelis *</label>
                        <input
                            value={formData.user_carModel}
                            onChange={handleChange}
                            name="user_carModel"
                            placeholder="Automobilio modelis"
                            type="text"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Paslauga *</label>
                        <select
                            className="form-select"
                            name="user_option"
                            id=""
                        >
                            <option
                                className="form-options"
                                value={optionValue}
                                name="user_option"
                            >
                                {option}
                            </option>
                        </select>
                    </div>

                    <textarea
                        placeholder="Jusu komentaras"
                        name="message"
                        onChange={handleChange}
                        value={formData.message}
                        id=""
                        cols="30"
                        rows="3"
                    ></textarea>
                    <div className="form-button-div">
                        <button
                            type="submit"
                            value="Send"
                            className="form-button"
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
export default ContactForm;
