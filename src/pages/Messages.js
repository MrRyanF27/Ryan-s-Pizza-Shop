

// http://localhost:8000/messages



import { Link } from "react-router-dom";
import UseFetch from "../Components/useFetch";


const Messages = () => {

    const {data:messages,pending,error} = UseFetch('http://localhost:8000/messages')

    

    return ( 
        <div className="container text-bg-dark mt-5 px-5 " style={{marginBottom:'400px', border:'5px solid gold'}}>
          { pending && <h2 className="text-center text-primary mt-5" style={{height:'100vh'}}>Loading...</h2>}
          { error && <h2 className="text-center text-danger">Have an Error!</h2>}
           {
            messages.map((msg)=>( 
                <div className="message-preview py-4" key={msg.id}>

                    <Link to={`/message/${msg.id}`} style={{textDecoration:'none'}}>
                        <h2 className="text-warning">{msg.name}</h2>
                        <p>{msg.message}</p>
                    </Link>
                    
                </div>
            ))
           }

        </div>

     );
}
 
export default Messages;