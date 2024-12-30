import Login from "./Login";
import React from "react";
import { useState } from "react";

const Frm = () => {
    let [inputname , setInput] = useState({
        username:'',
        address:'',
        subject:'',
        age:''

    })

    let [status,setStatus] = useState(false)
    const hinput = (event) => {
        const {name,value} = event.target;
        setInput({
            ...inputname,
            [name]:value
        })
    }
    const finalsubmit = (event) => {
        event.preventDefault();
        console.log(inputname)
        if(inputname.username=="" || inputname.address=="" || inputname.subject==""|| inputname.age==""){
            alert("both feilds are required")

        }
        else{
            localStorage.setItem("data",JSON.stringify(inputname))
            setStatus(true)
        }
    }

    if(status){
        return <Login/>
    }

return(
    <>
    <form onSubmit={finalsubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="username" value={inputname.username} onChange={hinput} /> <br /> <br />

        <label htmlFor="">Address</label>
        <input type="text" name="address" value={inputname.address} onChange={hinput} /> <br /> <br />

        <label htmlFor="">Subject</label>
        <input type="text" name="subject" value={inputname.subject} onChange={hinput} /> <br /> <br />

        <label htmlFor="">Age</label>
        <input type="text" name="age" value={inputname.age} onChange={hinput} /> <br /> <br />

        <input type="submit" />
    </form>
    </>
)}

export default Frm















