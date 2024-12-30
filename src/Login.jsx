import { useEffect, useState } from "react";

function Login(){
      let [input , setInput] = useState({
            username:'',
            address:'',
            subject:'',
            age:''
    
        })
    
        let [udata,setUdata] = useState(null)
       
        const hinput = (event) => {
            const {name,value} = event.target;
            setInput({
                ...inputname,
                [name]:value
            })
        }
        const finalsubmit = (event) => {
            event.preventDefault()
        }

        useEffect(()=>{
           let logindata = JSON.parse( localStorage.getItem('data'))
        
           setUdata(logindata)
        },[]) 

    return(
        <>
        <h1>login</h1>
        <form onSubmit={finalsubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="username" value={input.username} onChange={hinput} /> <br /> <br />

        <label htmlFor="">Address</label>
        <input type="text" name="address" value={input.address} onChange={hinput} /> <br /> <br />

        <label htmlFor="">Subject</label>
        <input type="text" name="subject" value={input.subject} onChange={hinput} /> <br /> <br />

        <label htmlFor="">Age</label>
        <input type="text" name="age" value={input.age} onChange={hinput} /> <br /> <br />

        <input type="submit" />
    </form>
        </>
    )
}
export default Login