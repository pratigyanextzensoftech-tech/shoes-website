import React from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { IoMdClose } from "react-icons/io";
import CartData from '../component/cartData/CartData';
import { useCartStore } from "../store/CartStore";
import cartImage from '../assets/cart.avif'

interface modalProps {
  modalIsOpen: boolean;
 setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const CartModal = ({modalIsOpen,setIsOpen}:modalProps) => {
      const cart = useCartStore((state) => state.cart);
        const { emptyCard } = useCartStore();

    const totalPrice = cart.reduce(
  (sum, item) => sum + item.price * item.qty,
  0
);
  
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  const customStyles: Modal.Styles = {
    content: {
      top: "0",
      right: "0",
      bottom: "0",
      left: "auto",
      width: "25%",
      height: "100vh",
      padding: "20px",
      borderRadius: "0",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: 1000,
    },
  };
  return (
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
         style={customStyles}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='d-flex align-items-center justify-content-between'>
 <h2 className='fw-bold' >Shopping Cart</h2>
        <IoMdClose className='fw-bold fs-2' onClick={closeModal}/>
        </div>
        <hr />
        {cart.length === 0 ? (
       <div className="text-center d-flex align-items-center flex-column h-100 justify-content-center">
      <img  width="200px" src={cartImage} className='img-fluid ' alt="cart" />
      <h3>Your Cart is Empty</h3>
      <p>You may check out all the available products and buy some in the shop.</p>
      <button className='btn btn-dark text-white '>Continue Shopping</button>
      </div>)
      :
      <>
      <CartData/>
      <p className='text-center '><span className='fw-bold'>Total price : </span>Rs. {Math.round(totalPrice)}/-</p>
        <div className='text-center position-absolute w-100 mb-3 bottom-0 start-50 translate-middle-x'>
            
                <button onClick={()=>emptyCard()} className="btn w-100 my-2  btn-danger ">Remove All Items</button>
                <button  onClick={()=>emptyCard()} className="btn   w-100 btn-success "> Proceed to Checkout</button>
        </div>
</>
        }
      </Modal>
  )
}

export default CartModal
