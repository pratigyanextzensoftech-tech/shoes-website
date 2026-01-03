import React from 'react'
import Banner1 from '../../../assets/banner1.webp'
import Banner2 from '../../../assets/banner2.webp'
import Banner3 from '../../../assets/banner3.avif'
import Banner4 from '../../../assets/banner4.webp'
import Banner5 from '../../../assets/banner5.jpg'
import style from './HeroSlider.module.css'
const HeroSlider = () => {
    const sliderData=[{
        image:Banner1
    },
{
    image:Banner2
},
{
    image:Banner3
},
{
    image:Banner4
},
{
    image:Banner5
},
]
  return (
    <div id="carouselExample" className="carousel slide"  data-bs-ride="carousel" data-bs-interval="5000">
  <div className="carousel-inner">
   {sliderData.map((item,i)=>(
    <div key={i} 
    className={`${style.carousalImage} carousel-item  ${i==0 ?"active":""}`}>
      <img src={item.image} className="d-block w-100" alt="..."/>
    </div>
   ))}
    
  
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default HeroSlider
