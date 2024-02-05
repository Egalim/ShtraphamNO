import React, { useState } from 'react'
import '../components/Form.css'
import logo from '../assets/logo.svg'

export default function Reg() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    password: '',
    confirmPassword: ''
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
          <h1 className='txt_semi_bold'>Регистрация</h1>
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
                placeholder="Введите ваше ФИО:"
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
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
            <div>
              <input
                placeholder="Повторите пароль:"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button className='btn_form' type="submit">Зарегестрироваться</button>
        </form>
      </div>
    </div>
  )
}

