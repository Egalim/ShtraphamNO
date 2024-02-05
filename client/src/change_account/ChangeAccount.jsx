import React, { useState } from 'react'
import Header from '../components/header/Header';
import { Link } from 'react-router-dom';

export default function ChangeAccount() {
  const infoUser = {
    name: "Петров Петр Петрович",
    email: "petrov@gmail.com"
  }

  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
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
      <Header visible={1} />
      <div className="content">
        <Link to={"/account"}><p className='txt_grey' style={{marginBottom: "30px"}}>К профилю</p> </Link>

        <form onSubmit={handleSubmit} className='form'>
          <div className="info_user">
            <h1 className='txt_semi_bold'>Изменить данные профиля</h1>
            <div className="userTXT">
              <h2 className='txt_semi_bold'>{infoUser.name}</h2>
              <p className='txt_semi_bold'>{infoUser.email}</p>
            </div>
          </div>
          <div className="form-content">
            <div>
              <input
                placeholder="Изменить ФИО:"
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
                placeholder="Изменить почту почту:"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
          </div>
          <button className='btn_form' type="submit">Изменить данные</button>
        </form>
      </div>
    </div>
  )
}

