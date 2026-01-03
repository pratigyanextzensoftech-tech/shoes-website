import React from 'react'
// import nike1 from '../../assets/nike1.avif'
// import nike2 from '../../assets/nike2.avif'
// import nike3 from '../../assets/nike3.avif'
import nike4 from '../../assets/nike4.webp'
import nike5 from '../../assets/nike5.webp'
import nike6 from '../../assets/nike6.jpg'
import { FaHeart,FaSearch  } from "react-icons/fa";
import { FaCartArrowDown,FaSalesforce  } from "react-icons/fa";
import style from './Product.module.css'
const Product = () => {
    const productData=[
        {
        "image":nike6,
        "name":"Air Jorden",
        "newprice":"3000",
        "oldPrice":"4000"
    },
      {
        "image":nike4,
        "name":"Air force",
        "newprice":"3000",
        "oldPrice":"4000"
    },
     {
        "image":nike6,
        "name":"nike dunk",
        "newprice":"3000",
        "oldPrice":"4000"
    },
     {
        "image":nike4,
        "name":"Air Jorden",
        "newprice":"3000",
        "oldPrice":"4000"
    },
     {
        "image":nike5,
        "name":"Air Jorden",
        "newprice":"3000",
        "oldPrice":"4000"
    },
     {
        "image":nike5,
        "name":"Air Jorden",
        "newprice":"3000",
        "oldPrice":"4000"
    },
      {
        "image":nike5,
        "name":"Air Jorden",
        "newprice":"3000",
        "oldPrice":"4000"
    },

{
        "image":nike5,
        "name":"Air Jorden",
        "newprice":"3000",
        "oldPrice":"4000"
    },


]
  return (
    <div className='container my-5'>
      <h1 className='text-center fw-bold '>New Products</h1>
      <div className="row">
        {
            productData.map((item,i)=>(
                <div className="col-md-3 rounded-2 my-2">
                    <div className='position-relative rounded-2 object-fit-fill'>
                        <img width="300px" height="200px" className='img-fluid  object-fit-cover border rounded' src={item.image} alt="" />
                    
                        <div className="position-absolute w-100 d-flex gap-3 top-50 align-items-center justify-content-center">
                             <FaCartArrowDown className={style.icon}/>
                    <FaSearch className={style.icon}/>
                    <FaHeart className={style.icon}/>
                   
                    </div>
                    <div style={{right:"25px",top:"10px"}}  className='position-absolute  '>
                        <FaSalesforce style={{color:"white",fontSize:"32px"}}/>
                    </div>
                    <div className="text-center my-3">
                   <h6 className='fw-bold mb-0'>{item.name}</h6>
                   <div className="d-flex gap-3 align-items-center justify-content-center my-2 ">
                        <p className='mb-0 text-primary'>Rs. {item.newprice}</p>
                     <p className='mb-0 text-decoration-line-through' style={{color:"gray"}}> RS.{item.oldPrice}</p>
                   </div>
                   </div> 
                   </div>
                 </div>
            ))
        }
       
      </div>
    </div>
  )
}

export default Product
