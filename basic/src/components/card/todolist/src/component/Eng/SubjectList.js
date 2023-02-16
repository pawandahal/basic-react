import React from 'react'
import { Link } from 'react-router-dom'
const Container = () => {
  return (
    <div>
    <nav>
    <ul>
       <Link to="/firstYear" style={{color:'red'}}>FirstYear</Link>
       <Link to="/secondYear" style={{color:'red'}}>SecondYear</Link>
       <Link to="/thirdYear" style={{color:'red'}}>ThirdYear</Link>
       <Link to="/forthYear" style={{color:'red'}}>FourthYear</Link>
   </ul>
 </nav></div>
  )
}

export default Container