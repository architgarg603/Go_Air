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
                        <div className={style.subhead}>Time take to clear all checkpoints</div>
                        <div className={style.info}>56 mins</div>

                    </li>
                    <li>
                        <div className={style.subhead}>Departure Time</div>
                        <div className={style.info}>13:45</div>

                    </li>
                    <li>
                        <div className={style.subhead}>Gate Number</div>
                        <div className={style.info}>13</div>

                    </li>
                    <li>
                        <div className={style.subhead}>Rush Hours</div>
                        <div className={style.info}>
                            09:00 - 12:00
                            <br />

                            15:00 - 16:00
                            <br />

                            20:00 - 24:00
                        
                        </div>

                    </li>
                    
                    <li>
                        <div className={style.subhead}>Tempreture</div>
                        <div className={style.info}>23 Degree</div>

                    </li>
                    
                    
                </ul>


            </div>
            <Navbar />
        </div>
    )
}

export default Info