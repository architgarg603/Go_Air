import React from 'react'
import style from './Login.module.scss'
import logo from '../../Assets/logo.JPG'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <div className={style.wrapper}>
            <div className={style.logo}>
                <img src={logo} />
            </div>
            <div className={style.details}>
                <input type='text' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <Link to="/">

                    <div className={style.btn}>Login</div>
                </Link>
                <Link to='/register     '>
                    <div className={style.nav}>Sign Up</div>
                </Link>
            </div>

            <div className={style.bottom}>Go Air</div>

        </div>
    )
}

export default Login