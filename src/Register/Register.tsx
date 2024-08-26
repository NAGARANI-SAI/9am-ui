'use client'
import React from 'react'
export const Register = () => {
    const [data,setData]=React.useState({});
    const fnRegister=async ()=>{
      try{
      var dataObj={
        "data":data
      }
       const res= await fetch("9am-server-seven.vercel.app/std/register",
       {method:'post',
       headers:{
        'content-Type':'application/json',
       },
       body:JSON.stringify(dataObj)
      })
      const result=await res.json()
      const {acknowledged,insertedId}=result
      if(acknowledged && insertedId){
        alert("success")
      }else{
        alert("failed")
      }
      console.log(result)
    }catch(ex:any){
      console.error(ex)
      alert(ex.message)
    }
    }
    const handleChange=(eve:any)=>{
      const {name,value}=eve.target
      setData({...data,[name]:value})
    }
  return (
    <div>
        <h3>Register</h3>
        <p>
            <b>Name:</b><input name="name" onChange={handleChange}/>
        </p>
        <p>
        <b>Rno:</b><input type="number" name="rno" onChange={handleChange}/>
        </p>
        <p>
        <b>Location:</b><textarea name="loc" onChange={handleChange}/>
        </p>
        <p>
            <button onClick={fnRegister}>Register</button>
        </p>
    </div>
  )
}
