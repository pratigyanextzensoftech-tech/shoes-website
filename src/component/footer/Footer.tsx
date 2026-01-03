import React from 'react'
import Logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-3">
        <img width="100px" height="50px" className='img-fluid' src={Logo} alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut voluptas iusto a quas velit voluptatum !</p>
        <h6><span className='fw-bold'>Addresss: </span>#123 mohali</h6>
        <h6> <span className='fw-bold'>Email:  </span>as@gmail.com</h6>
        <h6><span className='fw-bold'> Phone: </span> 91 +12434234</h6>
        </div>
          <div className="col-md-2">
                <h6 className='fw-bold'>About Us</h6>
                <p>Site Map</p>
                
                <p>Privacy Policy</p>
                <p>Your Account</p>
                 <p>Site Map</p>
                <p>Privacy Policy</p>
                <p>Your Account</p>
        </div>
<div className="col-md-2">
<h6 className='fw-bold'>Category</h6>
                <p>Site Map</p>
                <p>Privacy Policy</p>
                <p>Your Account</p>
                 <p>Site Map</p>
                <p>Privacy Policy</p>
                <p>Your Account</p>
        </div>
        <div className="col-md-2">
    <h6 className='fw-bold'>Information</h6>
                <p>Site Map</p>
                <p>Privacy Policy</p>
                <p>Your Account</p>
                 <p>Site Map</p>
                <p>Privacy Policy</p>
                <p>Your Account</p>
        </div>
        <div className="col-md-3">
<h6 className='fw-bold'>Information</h6>
<hr />
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A labore, doloribus consequuntur minus, cupiditate maiores doloremque eligendi totam voluptatibus omnis eos suscipit saepe id voluptate tempore est ullam, esse sit?</p>
        </div>

      </div>
    </div>
  )
}

export default Footer
