import React, { useEffect, useState } from 'react'
import style from './Map.module.scss'
import Navbar from '../Nav/Navbar'
import air from '../../Assets/air.jpeg'
function Map() {

  const [dis, setDis] = useState("none");
  useEffect(() => {
    setTimeout(() => {
      setDis("flex")
    }, 3000);

    setTimeout(() => {
      setDis("none");
    }, 5000);
  }, [])
  return (
    <div className={style.wrapper}>
      <div className={style.details}>
        <img className={style.img} src={air} />
        <div className={style.banner}>

          <div className={style.info}>
            <div className={style.info1}>Moving Towards</div>
            <div className={style.info2}> Security Check</div>
          </div>
          <div className={style.arrow}>
            <i class="fa-solid fa-arrow-up-long"></i>
          </div>
        </div>

        <div className={style.timeline}>
          <div><i class="fa-solid fa-check"></i></div>
          <div><i class="fa-solid fa-check"></i></div>
          <div></div>
          <div></div>
        </div>
        <div className={style.popup}  style={{ display: dis }}>
          <div className={style.info1}>Gate Number Changed to 13</div>
        </div>
        <div className={style.status} >Status : On-Time</div>
      </div>
      <Navbar />

    </div>
  )
}

export default Map