import { useState } from 'react';
import pizzaLeft from '../imgs/pizzaLeft.jpg'

import Aos from 'aos';
import Typewriter from 'typewriter-effect'

import { useEffect } from 'react';



const Contact = () => {

    useEffect(()=>{
        Aos.init({duration:1000})
    },[])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [success,isSuccess] = useState(false)
    const [error,isError] = useState(false)

    const handleSubmit = (e)=>{
        // e.preventDefault()
        const data = {name,email,message}

        fetch('http://localhost:8000/messages',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify(data)
        }).then(()=>{
            isSuccess(true)
            alert("message sent success!")
        }).catch((e)=>{
            isError(e)
            isSuccess(false)
        })

    }


    return ( 
        <div className="container-xxxxl bg-white " id="contactSection">
            <div className="row shadow">

                <div className="col-12 col-md-6 d-none d-md-block">
                    <img src={pizzaLeft} alt="pizza left" className="img img-fluid shadow" style={{height:'100vh', width:'100vw'}} data-aos="fade-up"/>
                </div>
                <div className="col-12 col-md-6 d-md-none">
                    <img src={pizzaLeft} alt="pizza left" className="img img-fluid shadow-lg" style={{height:'200px', width:'100vw'}} data-aos="fade-up" />
                </div>
                <div className="col-12 col-md-6">
                  {success &&  <h2 className='text-primary text-center mt-3'>Your message is send successfully!</h2>}
                  {error &&  <h2 className='text-danger text-center mt-3'>Failed to sent your message sorry</h2>}

                    <form className='py-5 px-2' onSubmit={handleSubmit} data-aos="fade-down">
                        <h1 className='my-5 text-center text-md-start'>Contact Us</h1>

                        <label  className="form-label">Full name</label>
                        <input type="text" className='form-control 'required value={name} onChange={(n)=>{setName(n.target.value)}}/>

                        <label className="form-label">Email address</label>
                        <input type="email" className='form-control' required  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

                        <label className="form-label">Your Message</label>
                        <textarea className='form-control' required value={message} onChange={(m)=>{setMessage(m.target.value)}}></textarea>

                        <button className='btn  btn-dark mt-5 px-5 w-100 d-md-none'>Send</button>
                        <button className='btn  btn-dark mt-5 px-5 d-none d-md-block'>Send</button>

                    </form>

                  

                </div>
            </div>
        </div>
     );
}
 
export default Contact;