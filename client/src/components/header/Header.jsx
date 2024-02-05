import React from 'react'
import logo from '../../assets/logo.svg'
import user from '../../assets/user.svg'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = ({visible}) => {

    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo" />
            {
                visible ?
                    <button><h2 className=' txt_semi_bold'>Выйти</h2></button>
                    :
                    <Link to={"/account"}> <img className="user" src={user} alt="logo" /> </Link>
            }
        </div>
    )
}

export default Header