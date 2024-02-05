import React from 'react'
import './CardAdmin.css'

export default function CardAdmin({ id, author, image, date, number, addres, comment, status }) {
  return (
    <div className='container_card'>
      <h4>Заявка: {id}</h4>

      <div className="info_card">
        <img className="img_card" src={image} alt="" />
        <div className="txt_card">
          <div className="row"><p className='txt_bold'>Автор:</p>{author}</div>
          <div className="row"><p className='txt_bold'>Дата:</p>{date}</div>
          <div className="row"><p className='txt_bold'>Адрес:</p>{addres}</div>
          <div className="row"><p className='txt_bold'>Номер автомобиля:</p>{number}</div>
          <div ><span className='txt_bold'>Комментарий: </span>{comment}</div>

          <div className="btn_admin txt_white">
            <button className='btn_admin_no txt_semi_bold'>Отклонить</button>
            <button className='btn_admin_yes txt_semi_bold'>Принять</button>
          </div>
        </div>
      </div>

    </div>
  )
}

