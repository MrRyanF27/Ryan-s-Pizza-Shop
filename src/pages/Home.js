import Aos from "aos";
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect'
import { useEffect } from "react";

const Home = () => {

     useEffect(()=>{
          Aos.init({duration:2000})
     },[])


    return ( 
        <div className="container justify-content-center" id="HomeId">

            <div className="d-none d-md-block gap-5" id="hpText" data-aos="fade-up">
                 <h1>Ryan's Pizzeria</h1>
            <div className="my-4"> <Typewriter options={{
               autoStart: true,
               loop: true,
               duration: 1000,
               strings:["PIZZA TO FIT ANY TASTES","AFFORDABLE PRICES","IT IS FINGER LICKIN GOOD!"]
            }}/> </div>
            <a className="btn btn-dark px-5"href="/Menu">Order</a>

            </div>

            <div className="d-md-none bg-black text-light text-center p-4 rounded-5" id="hpText2" data-aos="fade-up">
                 <h1>Ryan's Pizzeria</h1>
            <div className="my-4"><Typewriter options={{
               autoStart: true,
               loop: true,
               duration: 1000,
               strings:["PIZZA TO FIT ANY TASTES","AFFORDABLE PRICES","IT IS FINGER LICKIN GOOD!"]
            }}/></div>
            <a className="btn btn-warning text-dark px-5" href="/Menu">Order</a>

            </div>
           
        </div>
     );
}
 
export default Home;