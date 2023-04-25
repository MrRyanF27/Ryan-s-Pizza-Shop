
import peperoni from '../imgs/pepperoni.jpg'
import margherita from '../imgs/margherita.jpg'
import pedroT from '../imgs/pedrotechspecial.jpg'
import vegan from '../imgs/vegan.jpg'
import pineaaple from '../imgs/pineapple.jpg'
import expensive from '../imgs/expensive.jpg'

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Menu = () => {

    useEffect(()=>{
        Aos.init({duration:1000})
    },[])


    return ( 
        <div className="container-xxxl bg-light" id="menuPage" >

            <div className="container ">

                <div className="text-center " >
                    <h1 className='pt-5 ' style={{borderBottom:'3px solid gold'}}>Our Menu</h1>
                </div>

                <div className="row pt-5">
                    <div className="col-12 col-md-4 mt-3">
                        <div className="card shadow " data-aos="flip-right">
                            <div className="card-header bg-white">
                                <img src={peperoni} className='img-fluid w-100' />
                            </div>
                            <div className="card-body text-center">
                                <h2 >Pepperoni Pizza</h2>
                                <p>₱120</p>
                                <button className='btn btn-success'>Buy 🛒</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mt-3">
                        <div className="card shadow "data-aos="flip-right">
                            <div className="card-header bg-white">
                                <img src={margherita} className='img-fluid w-100' />
                            </div>
                            <div className="card-body text-center">
                                <h2 >Margherita Pizza</h2>
                                <p>₱270</p>
                                <button className='btn btn-success'>Buy 🛒</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mt-3">
                        <div className="card shadow "data-aos="flip-right">
                            <div className="card-header bg-white">
                                <img src={pedroT} className='img-fluid w-100' />
                            </div>
                            <div className="card-body text-center">
                                <h2 >Pedrotech Pizza</h2>
                                <p>₱400</p>
                                <button className='btn btn-success'>Buy 🛒</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row pb-5">
                    <div className="col-12 col-md-4 mt-3">
                        <div className="card shadow "data-aos="flip-right">
                            <div className="card-header bg-white">
                                <img src={vegan} className='img-fluid w-100' />
                            </div>
                            <div className="card-body text-center">
                                <h2 >Vegetarian Pizza</h2>
                                <p>₱200</p>
                                <button className='btn btn-success'>Buy 🛒</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mt-3">
                        <div className="card shadow "data-aos="flip-right">
                            <div className="card-header bg-white">
                                <img src={pineaaple} className='img-fluid w-100' />
                            </div>
                            <div className="card-body text-center">
                                <h2 >Pineapple Pizza</h2>
                                <p>₱320</p>
                                <button className='btn btn-success'>Buy 🛒</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mt-3">
                        <div className="card shadow "data-aos="flip-right">
                            <div className="card-header bg-white">
                                <img src={expensive} className='img-fluid ' />
                            </div>
                            <div className="card-body text-center">
                                <h2 >Expensive Pizza</h2>
                                <p>₱900</p>
                                <button className='btn btn-success'>Buy 🛒</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
     );
}
 
export default Menu;