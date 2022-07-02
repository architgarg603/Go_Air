import React from 'react'
import style from './navbar.module.scss'
import {Link} from 'react-router-dom'
function NavHome() {
    return (
        <div className={style.options}>
            <Link to="/">
            <i class="fa-solid fa-house"></i>
            </Link>
            <Link to="/past">
            <i class="fa-solid fa-clock-rotate-left"></i>

            </Link>
           
        </div>
    )
}

export default NavHome