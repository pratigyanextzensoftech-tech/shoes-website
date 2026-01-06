import React from 'react'
import CartData from '../component/cartData/CartData'

const Checkout = () => {
    
  return (
    <div className='container my-5'>
      <h1 className='text-centerv fw-bold'>checkout </h1>
      <div className="row">
        <div className="col-md-6">
           <h6 className='fw-bold'>Shipping Information</h6>

      <div className="row">
        <div className="col">
            <button className='btn btn-success w-100'>Delivery</button>
        </div>
        <div className="col">
            <button className='btn btn-warning w-100'>Delivery</button>
            </div>
      </div>
      <form action="">
        <div className='my-2'>
        <label htmlFor="">Full Name</label>
        <input type="text" placeholder='enter Full name' className='form-control'/>
        </div>
          <div className='my-2'>
        <label htmlFor="">Email Address</label>
        <input type="text" placeholder='enter Email Address' className='form-control'/>
        </div>
           <div className='my-2'>
        <label htmlFor="">Phone No</label>
        <input type="number" placeholder='Enter Phone No' className='form-control'/>
        </div>
         <div className='my-2'>
        <label htmlFor="">Country</label>
            <select  className='form-control' name="" id="">
                <option>India</option>
                <option>USA</option>

            </select>
        </div>
        <div className='my-2'>
            <div className='row'>
<div className="col">
     <label htmlFor="">City</label>
            <select className='form-control' name="" id="">
                <option>India</option>
                <option>USA</option>

            </select>
    </div>  
    <div className="col">
         <label htmlFor="">State</label>
            <select className='form-control' name="" id="">
                <option>India</option>
                <option>USA</option>

            </select>
    </div>
    <div className="col">
          <label htmlFor="">Zipcode</label>
        <input type="text" placeholder='Enter Zipcode' className='form-control'/>
    </div>        
  </div>
        </div>
      </form>
      </div>
              <div className="col-md-6">
                <h6 className=' fw-bold '>Review your cart</h6>
                <CartData />
                <div className='d-flex gap-2'>
                <input className='form-control w-100' type="text" placeholder='Discount'/>
                <button className='btn'>Apply</button>
                </div>
                <div className="d-flex gap-3 d-flex align-items-center justify-content-between my-3">
                    <div>
                    <p className='fw-bold'>Total </p>
                    <p className='fw-bold'>SubTotal</p>
                    <p className='fw-bold'>Shipping</p>
                    <p className='fw-bold'>Discount</p>
                    </div>
                    <div>
<p>Rs.500</p>        
<p>Rs.500</p>        
<p>Rs.500</p>        
<p>Rs.500</p>        

            </div>
                </div>
                <div className='text-center'>
                    <button className='btn btn-warning w-100'>Pay Now</button>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Checkout
