
import aboutTop from '../imgs/multiplePizzas.jpeg'
import aboutLeft from '../imgs/makingpizza.jpeg'

import Aos from 'aos';
import { useEffect } from 'react';

const About = () => {

    useEffect(()=>{
        Aos.init({duration:1000})
    },[])


    return ( 
        <div className="container-xxxl" id='aboutContent'>


            <div className="row bg-light shadow-lg" >
                <div className="col-12" data-aos="fade-up">
                    <img src={aboutTop} className="img-fluid shadow-lg" style={{ height:'400px', width:'100%'}} />
                </div>
            </div>

            <div className="row align-content-center text-center justify-content-center bg-white py-5 ">

            <h1 className='d-md-none  pt-5 '>ABOUT US</h1>
                <div className="col-11 col-md-4 mt-5" data-aos="fade-right">
                    <img src={aboutLeft} className='img-fluid rounded-3 shadow-lg' style={{height:'500px'}}/>
                </div>
                <div className="col-11 col-md-7 text-center mt-md-5 pt-5 px-3 align-items-center" data-aos="flip-right">
                    <h1 className='d-none d-md-block pt-5'>ABOUT US</h1>
                    <p className='mt-md-5 pt-md-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, non tenetur! Necessitatibus laborum accusamus voluptates assumenda totam saepe blanditiis! Ipsa eaque vitae facere recusandae neque itaque, dolorem at accusantium iure laudantium. Voluptatibus blanditiis nesciunt velit nihil vero excepturi numquam repellendus, omnis quisquam, consequatur reiciendis autem ipsam. At odit quos iusto aperiam libero eos animi voluptates reprehenderit pariatur placeat. Natus, ipsum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam possimus cumque magni quam ad soluta, consectetur accusantium animi doloribus repellendus, nisi labore, impedit est fugiat incidunt expedita unde quas officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptas necessitatibus! Nam cumque quod provident nihil dignissimos deleniti facere officia repellat placeat repudiandae aspernatur incidunt perspiciatis ea ullam, aliquam odit?</p>
                </div>
            </div>

        </div>
     );
}
 
export default About;