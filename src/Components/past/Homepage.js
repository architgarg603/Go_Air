import React from 'react'
import NavHome from '../NavHome/Navbar'
import style from './Homepage.module.scss'
import del from '../../Assets/del.jpg'
import mum from '../../Assets/mum.jpg'
import x from '../../Assets/x.jpg'
import y from '../../Assets/y.webp'
import z from '../../Assets/z.jpg'


function Past() {

    let arr = [
        ["Delhi - Cape Town", "Delhi Internation - T3", "08-09-2021  15:00", x],
        ["Cape Town - Mumbai", "Cape Town Airport", "30-09-2021 05:00", z],
        ["Mumbai - New York", "Chhatrapati Shivaji Airport", "17-03-2022 05:00", y]
    ]
    return (
        <div className={style.wrapper}>
            <div className={style.booking}>
                <div className={style.head}>Past Booking</div>
                {arr.map((data,idx) => {
                    return (
                        <div className={style.card} style={{borderBottom:idx==arr.length-1? "none":"1px solid gray"}}>
                            <div className={style.info}>
                                <div className={style.name}>{data[0]}</div>
                                <div className={style.rank}> {data[1]} </div>
                                <div className={style.type}>Departure Time - {data[2]}</div>
                            </div>
                            <div className={style.img}>
                                <div className={style.bl}></div>
                                <img src={data[3]} />
                            </div>

                        </div>
                    )
                })}
            </div>
            <NavHome />
        </div>
    )
}

export default Past