import React,{useEffect} from 'react'
import { useCartStore } from '../../store/CartStore';
const CartData = () => {
      const { cart, increaseQty, decreaseQty, removeFromCart } = useCartStore();
    // const[cartData,setCartData]=useState([])
    //  useEffect(() => {
    // fetch('https://dummyjson.com/products/category/mens-shoes')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     // setCartData(data.products)
    //   })
    //  .catch((error) => {
    //       console.error("Error fetching products:", error);
    //     });
    // },[])
  return (
    <div>
      {cart.map((item,index) => (
        <>
        <div
          key={item.id}
          className="d-flex gap-3 align-items-center mb-3 border-bottom pb-3"
        >
          <img src={item.thumbnail} width="60" />

          <div className="flex-grow-1">
            <p className="mb-1 fw-semibold">{item.title}</p>
            <small>₹{Math.round(item.qty*item.price)}</small>

            <div className="d-flex align-items-center gap-2 mt-2">
              <button
                className="btn btn-sm btn-outline-dark"
                onClick={() => decreaseQty(item.id)}
                disabled={item.qty === 1}
              >
                −
              </button>

              <span>{item.qty}</span>

              <button
                className="btn btn-sm btn-outline-dark"
                onClick={() => increaseQty(item.id)}
              >
                +
              </button>
            </div>
          </div>

          <button
            className="btn btn-sm btn-danger"
            onClick={() => removeFromCart(item.id)}
          >
            ✕
          </button>
        </div> 
        </>
      ))}
    
    </div>
  )
}

export default CartData
