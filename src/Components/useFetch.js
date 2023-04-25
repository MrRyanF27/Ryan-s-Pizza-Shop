import { useEffect, useState } from "react";

const UseFetch = (url) => {


    const [data,setData] = useState([])
    
    const [pending, isPending] = useState(false)
    const [error, isError] = useState(false)

    useEffect(()=>{ 

        isPending(true)

        setTimeout(() => {
            fetch(url).then((res)=>{ 

            if(!res.ok){
                throw Error("Error")
            }

            return res.json()

        }).then((data)=>{
            setData(data)
            isPending(false)
        }).catch((e)=>{ 
            console.log(e)
            isPending(false)
            isError(true)
        })
        }, 1000);

        

    },[url])

   return {data,pending,error} 
}
 
export default UseFetch;