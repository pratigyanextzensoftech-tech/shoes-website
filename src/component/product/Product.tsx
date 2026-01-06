import React, { useEffect, useState } from 'react'
// import nike1 from '../../assets/nike1.avif'
// import nike2 from '../../assets/nike2.avif'
// import nike3 from '../../assets/nike3.avif'
import nike4 from '../../assets/nike4.webp'
import nike5 from '../../assets/nike5.webp'
import nike6 from '../../assets/nike6.jpg'
import { FaHeart,FaSearch  } from "react-icons/fa";
import { FaCartArrowDown,FaSalesforce  } from "react-icons/fa";
import style from './Product.module.css'
import { useNavigate } from 'react-router-dom';
import CartModal from '../../cart/CartModal';
interface Product {
  id: number;
  title: string;
  price: number;
  images: string;
}
const Product:React.FC = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
  const[products,setProducts]=useState<Product[]>([])
  const navigate=useNavigate()
//     const productData=[
//         {
//         "image":nike6,
//         "id":"1",
//         "name":"Air Jorden",
//         "newprice":"3000",
//         "oldPrice":"4000"
//     },
//       {
//         "image":nike4,
//         "id":"2",
//         "name":"Air force",
//         "newprice":"3000",
//         "oldPrice":"4000"
//     },
//      {
//         "image":nike6,
//         "id":"3",
//         "name":"nike dunk",
//         "newprice":"3000",
//         "oldPrice":"4000"
//     },
//      {
//         "image":nike4,
//         "id":"4",
//         "name":"Air Jorden",
//         "newprice":"3000",
//         "oldPrice":"4000"
//     },
//      {
//         "image":nike5,
//         "id":"5",
//         "name":"Air Jorden",
//         "newprice":"3000",
//         "oldPrice":"4000"
//     },
//      {
//         "image":nike5,
//          "id":"6",
//         "name":"Air Jorden",
//         "newprice":"3000",
//         "oldPrice":"4000"
//     },
//       {
//         "image":nike5,
//         "id":"7",
//         "name":"Air Jorden",
//         "newprice":"3000",
//         "oldPrice":"4000"
//     },

// {
//         "image":nike5,
//         "id":"8",
//         "name":"Air Jorden",
//         "newprice":"3000",
//         "oldPrice":"4000"
//     },


// ]
 useEffect(() => {
fetch('https://dummyjson.com/products/category/mens-shoes')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setProducts(data.products)
  })
 .catch((error) => {
      console.error("Error fetching products:", error);
    });
},[])

const productDetails=(id:number)=>{
navigate(`product/${id},`)
}
  return (
    <div className='container my-5'>
      <h1 className='text-center fw-bold '>New Products</h1>
      <div className="row">
        {
            products.map((item,i)=>(
                <div key={i} className="col-md-3 rounded-2 my-2">
                    <div className='position-relative rounded-2 object-fit-fill'>
                        <img style={{cursor:"pointer"}} onClick={()=>productDetails(item.id)} width="300px" height="200px" className='img-fluid    object-fit-cover border rounded' src={item.images[0]} alt="" />
                    
                        <div style={{top:"250px"}} className="position-absolute w-100 d-flex gap-4  align-items-center justify-content-center">
                             <FaCartArrowDown onClick={()=>setIsOpen(true)} className={style.icon}/>
                    <FaSearch className={style.icon}/>
                    <FaHeart className={style.icon}/>
                   
                    </div>
                    <div style={{right:"25px",top:"10px"}}  className='position-absolute  '>
                        <FaSalesforce style={{color:"white",fontSize:"32px"}}/>
                    </div>
                    <div className="text-center my-3">
                   <h6 className='fw-bold mb-0'>{item.title}</h6>
                   <div className="d-flex gap-3 align-items-center justify-content-center my-2 ">
                        <p className='mb-0 text-primary'>Rs. {item.price}</p>
                     <p className='mb-0 text-decoration-line-through' style={{color:"gray"}}> RS.{item.price}</p>
                   </div>
                   </div> 
                   </div>
                 </div>
            ))
        }
       
      </div>
        <CartModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>

    </div>
  )
}

export default Product
