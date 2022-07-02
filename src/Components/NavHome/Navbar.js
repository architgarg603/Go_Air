import React from 'react'
import style from './navbar.module.scss'
import {Link} from 'react-router-dom'
function NavHome() {
    return (
        <div className={style.options}>
            <Link to="/">
            <i class="fa-solid fa-house"></i>
            </Link>
            <Link to="/map">
            <i class="fa-solid fa-location-arrow"></i>

            </Link>
            <Link to="/nearby">

            <i class="fa-solid fa-utensils"></i>
            </Link>
            <Link to="/info">

            <i class="fa-regular fa-circle-question"></i>
            </Link>
        </div>
    )
}

export default NavHome