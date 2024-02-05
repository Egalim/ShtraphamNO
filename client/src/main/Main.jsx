import React, { useState } from 'react'
import Header from '../components/header/Header'
import './Main.css'

export default function Main() {
    const [formData, setFormData] = useState({
        date: '',
        number: '',
        addres: '',
        comment: '',
        photos: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData({ ...formData, photos: files });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Добавьте здесь логику отправки формы
        console.log(formData);
    };
    return (
        <div className='container'>
            <Header visible={false} />
            <div className="content">
                <div className="txt_main">
                    <h1 className='txt_semi_bold'>Оставить заявку</h1>
                    <p>Мы — ваш надежный помощник в борьбе за соблюдение правил дорожного движения. Здесь вы можете быстро и легко оставить заявку на нарушение Правил Дорожного Движения (ПДД) и помочь сделать наши дороги безопаснее для всех. </p>
                    <p> Наш сервис позволяет жителям сообщать о нарушениях, таких как превышение скорости, проезд на красный свет, неправильная парковка и многое другое. Просто заполните удобную форму заявки на нашем сайте, приложите необходимые доказательства (например, фотографии или видео), и мы обязательно рассмотрим вашу жалобу. </p>
                    <p> Присоединяйтесь к нам на ШтрафамДа и вместе мы сделаем наши дороги лучше!</p>
                </div>

                <form onSubmit={handleSubmit} className='form_main'>
                    <div className="form-content">
                        <div className="row_main_form">
                            <div>
                                <input placeholder='Дата' type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
                            </div>
                            <div>
                                <input placeholder="Номер транспортного средства" type="text" id="number" name="number" value={formData.number} onChange={handleChange} required />
                            </div>
                        </div>
                        <div>
                            <input placeholder="Адерс (населеный пункт, улица)" type="text" id="number" name="addres" value={formData.addres} onChange={handleChange} required />
                        </div>

                        <div>
                            <textarea placeholder="Комментарий" id="comment" name="comment" value={formData.comment} onChange={handleChange} rows="4" cols="50"></textarea>
                        </div>
                        <div>
                            <input placeholder="Выбрать файлы" type="file" id="photos" name="photos" accept="image/*" multiple onChange={handleFileChange} />
                        </div>
                    </div>
                        <button className='btn_form' type="submit">Отправить</button>
                </form>

            </div>
        </div>
    )
}

