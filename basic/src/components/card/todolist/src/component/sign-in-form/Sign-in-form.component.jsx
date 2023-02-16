// import React,{useState} from 'react'
// import { set,database,ref,update,onValue } from '../../config/firebase'

// const SignIn = () => {
//   const [userData,setUserData]=useState({})
//   const[status,setStatus]=useState("")

//   const handleChange=(event)=>{
//     setUserData({...userData,[event.target.name]:event.target.value})
//   }
//   const insertUser=()=>{
//      setStatus("inserting....")
//     set(ref(database,"users/"+Date.now()),{
//     ...userData,
//     }).then(error=>{
//       if(error) setStatus("Error occured during inserion to DB")
//       else setStatus("SuccessFully inseted to DB")
//     })
//   }
//   return (
//     <div>
//      <form onSubmit={(event)=>{
//       event.preventDefault();
//       insertUser()
//      }}>
//         <input type="text" name="fullname"
//          placeholder="full Name" 
//        onChange={(event)=>handleChange(event)}/>
//         <input type="text" 
//         name="address" 
//         placeholder="address"
//         onChange={(event)=>handleChange(event)}/>
//         <button type="submit">insert Users</button>
//      </form>
//      <div style={{height:"20px",width:"100vw",backgroundColor:"blue",
//     color:"White",textAlign:"center",position:"fixed",
//     bottom:"0px",left:"0px"
//   }}>{status}</div>
//     </div>
//   )
// }

// export default SignIn