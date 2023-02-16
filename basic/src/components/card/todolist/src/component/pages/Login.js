import React,{useState} from 'react'
import { set,database,ref,update,onValue } from '../../config/firebase'
import "./login.css"
const SignIn = () => {
  const [userData,setUserData]=useState({})
  const[status,setStatus]=useState("")

  const handleChange=(event)=>{
    setUserData({...userData,[event.target.name]:event.target.value})
  }
  const insertUser=()=>{
     setStatus("insert....")
    set(ref(database,"users/"+Date.now()),{
    ...userData,
    }).then(error=>{
      if(error) setStatus("Error occured during inserion to DB")
      else setStatus("SuccessFully inseted to DB")
    })
  }
  return (
    <div className="formSection">
     <form style={{textAlign:"center",marginTop:"-20px"}} onSubmit={(event)=>{
      event.preventDefault();
      insertUser()
     }}>
    
        <div className="nameSection">
           <h3>Name:</h3>
           <input type="text" name="fullname" style={{width:"30vw",height:"5vh"}}
           placeholder="First Name" 
           onChange={(event)=>handleChange(event)}/>
        </div>
       
      <div className="lastNameSection">
      <h3>Last Name:</h3>
      <input type="text" name="lastName" 
      style={{width:"30vw",height:"5vh",alignItems:"center"}}
      placeholder="Last Name" 
      onChange={(event)=>handleChange(event)}/>
      </div>

      <div className="emailSection">
      <h3>Email:</h3>
      <input type="text" style={{width:"30vw",height:"5vh"}}
      name="email" 
      placeholder="xyz@gmail.com"
      onChange={(event)=>handleChange(event)}/>
      </div>
     <div className="Password">
     <h3>Password</h3>
      <input type="text" name="password" style={{width:"30vw",height:"5vh"}} placeholder="Enter your password"/>
     </div>
     <div className="Password">
     <h3>Confirm Password</h3>
      <input type="text" name="confirm"  style={{width:"30vw",height:"5vh"}}  placeholder="Confirm Password"/>
     </div>
      <div className="classSection">
      <h3>Level you are studing</h3>
      <input type="text"  style={{width:"30vw",height:"5vh"}}  
      name="class" 
      placeholder="Which class you are studying"
      onChange={(event)=>handleChange(event)}/>
      </div>
      <div className="address">
      <h3>Address</h3>
      <input type="text"  style={{width:"30vw",height:"5vh"}}  
      name="address" 
      placeholder="address"
      onChange={(event)=>handleChange(event)}/>
      </div>
      <button type="submit" style={{marginBottom:"20px",marginTop:"10px"}}>submit</button>
     </form>
       <div style={{height:"20px",width:"100vw",backgroundColor:"blue",
      color:"White",textAlign:"center",position:"fixed",
      bottom:"0px",left:"0px"
    }}>{status}</div>
    </div>
  )
}

export default SignIn