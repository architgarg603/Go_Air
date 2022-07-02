import React from 'react'
import NavHome from '../NavHome/Navbar'
import style from './Homepage.module.scss'
import del from '../../Assets/del.jpg'
import mum from '../../Assets/mum.jpg'
function Homepage() {

    let arr = [
        ["Delhi - Mumbai", "Delhi Internation - T3", "08-6-2022  15:00", del],
        [" Mumbai - Delhi", "Chhatrapati Shivaji Airport", "15-6-2022 05:00", mum]
    ]
    return (
        <div className={style.wrapper}>
            <div className={style.booking}>
                <div className={style.head}>Booking</div>
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

export default Homepage