import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { useCartStore } from "../../store/CartStore";
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  images: string[];
  rating: number;
  thumbnail: string;
  returnPolicy:string;
  shippingInformation:string
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const[count,setCount]=useState(1)
  const [product, setProduct] = useState<Product | null>(null);
  const addToCart = useCartStore((state) => state.addToCart);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);
  const cart = useCartStore((state) => state.cart);
const cartItem = cart.find((item) => item.id === product?.id);
const qty = cartItem?.qty ?? 1;
  useEffect(() => {
   if (!id) return; 

    const productId = parseInt(id);
    if (isNaN(productId)) return;

    fetch(`https://dummyjson.com/products/${productId}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        console.log(data);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!product) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-6"> 
             <div style={{background:"#dfdada"}}  className="p-2 rounded-2 text-center" >
              <img
        src={product.thumbnail}
        alt={product.title}
        className="img-fluid mb-3"
      />  
      </div>
      <div  className="d-flex my-2 gap-2">

      {product.images.map((item,i)=>(
        <div style={{background:"#dfdada"}}  className="p-2 rounded-2" key={i}>
        <img className="img-fluid" src={item} alt="images" />
</div>
      ))} 
          </div>  
            </div>
                    <div className="col-md-6 ">
      <h2>{product.title}</h2>
         <div className="d-flex gap-3 align-items-center justify-content-start my-2 ">
                              <p className='mb-0 text-primary'>Rs. {Math.round(qty*product.price)}</p>
                           <p className='mb-0 text-decoration-line-through' style={{color:"gray"}}> RS.{Math.round(qty*product.price)}</p>
                         </div>
      <p>{product.description}</p>
      <p>Brand: {product.brand}</p>
      <p>⭐ {product.rating}</p>
      <a href="#">Ask a Question</a>
      <div className="d-flex w-100 my-2 gap-2">
    
    <div className="d-flex w-100">
 <button className="btn btn-outline-dark d-flex align-items-center justify-content-between w-100 px-3">

  {/* SUBTRACT */}
  <RiSubtractFill
    style={{
      cursor: qty > 1 ? "pointer" : "not-allowed",
      opacity: qty > 1 ? 1 : 0.4,
    }}
    onClick={() => {
      if (cartItem) {
        decreaseQty(product.id);
      }
    }}
  />

  {/* QTY */}
  <span className="fw-semibold">{qty}</span>

  {/* ADD */}
  <IoMdAdd
    style={{ cursor: "pointer" }}
    onClick={() => {
      if (cartItem) {
        increaseQty(product.id);
      } else {
        addToCart(product); // first time add
      }
    }}
  />
</button>

</div>

        <button onClick={()=>addToCart(product)} className="btn btn-dark text-light w-100 ">Add to Cart</button>
      </div>
      <button className=" my-2 btn w-100 btn-dark text-white">Buy it Now </button>
      <p className=" my-2 mb-0"><span className="fw-bold">Shippling Details:-</span> {product.shippingInformation}</p>
      <p className=""> <span className="fw-bold"> Return Policy:- </span>{product.returnPolicy}</p>
      </div>
      </div>
    </div>
  );
};

export default ProductDetail;
