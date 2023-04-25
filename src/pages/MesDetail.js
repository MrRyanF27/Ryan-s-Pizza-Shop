import { useHistory, useParams } from "react-router-dom";
import UseFetch from "../Components/useFetch";


const MesDetail = () => {

    const {id} = useParams();

    const {data,pending,error} = UseFetch('http://localhost:8000/messages/'+id)

    const history = new useHistory()

   const handleDel = (id)=>{

      fetch('http://localhost:8000/messages/'+id,{
        method: 'DELETE'
      }).then(()=>{
        history.push('/Messages')
      })

   }

    
    return ( 
        <div className="container-xxxl bg-white text-center" style={{height:'100vh'}}>
          {pending &&  <h1>Loading..</h1>}
          {error &&  <h1>Error in Details</h1>}
          
          {data && <div className="p-5">
            <h1> {data.name}</h1>
            <p>{data.message}</p>
            <button className="btn btn-danger" onClick={()=>{handleDel(data.id)}}>Delete</button>
            
          </div>}
          
        </div>
     );
}
 
export default MesDetail;