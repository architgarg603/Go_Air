import React from 'react'
import Navbar from '../Nav/Navbar'
import style from './info.module.scss'
import airport from '../../Assets/airport.jpeg'
function Info() {
    return (
        <div className={style.wrapper}>

            <div className={style.details}>
                <div className={style.head}>About the Airport</div>
                <div className={style.img}>
                    <img src={airport} className={style.img} />
                </div>
                <div className={style.Name}>Delhi Internation Airport</div>
                <ul>
                    <li>
                        <div className={style.subhead}>Time take to reach airport</div>
                        <div className={style.info}>2.5 hrs</div>
                    </li>
                    <li>
                        <div className={style.subhead}></div>
                        <div className={style.info}></div>

                    </li>
                </ul>


            </div>
            <Navbar />
        </div>
    )
}

export default Info