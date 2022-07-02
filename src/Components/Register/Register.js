import React from 'react'
import style from './Register.module.scss'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.JPG'
function Register() {
    return (
        <div className={style.wrapper}>
            <div className={style.logo}>
                <img src={logo} />
            </div>
            <div className={style.details}>
                <input type='text' placeholder='Name' />
                <input type='text' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <Link to="/">
                    <div className={style.btn}>Sign Up</div>
                </Link>
                <Link to='/login'>
                    <div className={style.nav}>Login</div>
                </Link>
            </div>

            <div className={style.bottom}>Go Air</div>

        </div>

    )
}

export default Register