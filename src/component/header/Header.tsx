import React,{useState} from 'react'
import Logo from '../../assets/logo.png'
import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import CartModal from '../../cart/CartModal';
const Header = () => {
const[show,setShow]=useState(false)
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
   <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand" href="#">
        <img width="100px" height="50px" src={Logo} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
         <li className="nav-item dropdown mx-3">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Man</a></li>
            <li><a className="dropdown-item" href="#">Woman</a></li>
            <li><a className="dropdown-item" href="#">Sports</a></li>
             <li><a className="dropdown-item" href="#">Casual</a></li>
             <li><a className="dropdown-item" href="#">Brands</a></li>


            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Kids</a></li>
          </ul>
        </li>

       <li className="nav-item mx-3">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
         <li className="nav-item mx-3">
          <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
        </li>
       
      </ul>
      <form className="d-flex gap-3 justify-content-center align-items-center" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        <FaHeart style={{fontSize:"32px"}} className='text-danger '/>
        <FaCartArrowDown onClick={()=>setIsOpen(true)} style={{fontSize:"32px"}}  className='text-success '/>
         <li className="nav-item dropdown mx-3">
         <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <MdAccountCircle onClick={()=>setShow(!show)} style={{fontSize:"32px"}}/>
          </a>
    
            {show &&(
                     <ul className="dropdown-menu  list-unstyled"
        >
            <li><a className="dropdown-item" href="#">Dashbord</a></li>
            <li><a className="dropdown-item" href="#">Orders</a></li>
            <li><a className="dropdown-item" href="#">Addresses</a></li>
             <li><a className="dropdown-item" href="#">Payments</a></li>
             <li><a className="dropdown-item" href="#">Offers</a></li>
                       <li><a className="dropdown-item" href="#">Notification</a></li>
             <li><a className="dropdown-item" href="#"> Help & Support</a></li>
            <li><hr className="dropdown-divider"/></li>

             <li><a className="dropdown-item" href="#"> Logout</a></li>


          </ul>
            )}
           </li>
      </form>
    </div>
  </div>
  <CartModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
</nav>
  )
}

export default Header
