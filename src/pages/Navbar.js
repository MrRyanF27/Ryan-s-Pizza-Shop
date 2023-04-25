import { Link } from 'react-router-dom';
import pizzaLogo from '../imgs/pizzaLogo3.jpg'

import Aos from 'aos';
import { useEffect } from 'react';


const Navbar = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])


    return ( 
        <nav className="navbar navbar-expand-md   shadow-lg sticky-top" id="navbar">

  <div className="container">

    <a className="navbar-brand text-light " href="#">
        
        <img className="img-fluid" src={pizzaLogo} alt="" data-aos="flip-right"/></a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon "></span> */}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list navbar-toggler-icon text-warning" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>

    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav text-center">
        <li className="nav-item">
          <Link className="nav-link "  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/Menu">Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  " to="/About">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  " to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  " to="/Messages">Messages</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
     );
}
 
export default Navbar;