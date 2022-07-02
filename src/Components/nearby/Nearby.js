import React from 'react'
import style from './Nearby.module.scss'
import domi from '../../Assets/domi.webp'
import bg from '../../Assets/bg.webp'
import ph from '../../Assets/ph.webp'
import sub from '../../Assets/sub.webp'
import tb from '../../Assets/tb.webp'
import Navbar from '../Nav/Navbar'
function Nearby() {
    let arr = [
        [domi, 'Dominos', '4.2', '30 mins', 'Pizza, Fast Food'],
        [bg, 'Burger King', '4.0', '40 mins', 'Burger and Fries'],
        [ph, 'Pizza Hut', '4.5', '35 mins', 'Pizza'],
        [sub, 'Subway', '3.9', '20 mins', 'Fully Customized Fast food'],
        [tb, 'Taco Bell', '3.94.0', '30 mins', 'Tacos, Fast Food'],
    ]


    return (
        <div className={style.wrapper}>
            <div className={style.details}>
                <div className={style.head}>NearBy Shops</div>
                <div className={style.search}>
                    <input type="text" placeholder="Search your restaurant" />
                </div>
                {arr.map(data => {
                    return (
                        <div className={style.card}>
                            <div className={style.img}>
                                <div className={style.bl}></div>
                                <img src={data[0]} />
                            </div>
                            <div className={style.info}>
                                <div className={style.name}>{data[1]}</div>
                                <div className={style.rank}><i class="fa-solid fa-star"></i> {data[2]} <strong>·</strong> {data[3]}</div>
                                <div className={style.type}>{data[4]}</div>
                            </div>

                        </div>
                    )
                })}

            </div>
           <Navbar />
        </div>
    )
}

export default Nearby