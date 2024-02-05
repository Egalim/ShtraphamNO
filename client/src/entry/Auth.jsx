import React, { useState } from 'react'
import '../components/Form.css'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

export default function Auth() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Добавьте здесь логику обработки отправки формы
        console.log(formData);
    };
    return (
        <div className='container'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="content">

                <form onSubmit={handleSubmit} className='form'>
                    <h1 className='txt_semi_bold'>Авторизация</h1>
                    <div className="form-content">
                        <div>
                            <input
                                placeholder="Введите почту:"
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <input
                                placeholder="Введите пароль:"
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    
                        <button className='btn_form' type="submit">Войти</button><br></br>
                        <Link to={'/reg'}
                        className={path == "/reg" ? "location" : ''}>Регистрация</Link>
                   
                </form>
            </div>
        </div>
    )
}

