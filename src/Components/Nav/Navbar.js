import React from 'react'
import style from './navbar.module.scss'
function Navbar() {
    return (
        <div className={style.options}>
            <i class="fa-solid fa-location-arrow"></i>
            <i class="fa-solid fa-utensils"></i>
            <i class="fa-regular fa-circle-question"></i>
        </div>
    )
}

export default Navbar