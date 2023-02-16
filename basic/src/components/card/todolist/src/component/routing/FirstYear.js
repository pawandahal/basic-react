import React from 'react'
import { Link } from 'react-router-dom'
const FirstYear = () => {
  return (
    <div className="First year">
    <div className="firstSection">
    
       <h2>First Semster</h2>
         <Link  to="/math">	Engineering Mathematics I</Link>
         <li>	Computer Programming</li>
         <li>	Engineering Drawing I</li>
         <li>	Engineering Physics</li>
         <li>	Digital Logic</li>
         <li>	Basic Electrical Engineering</li>
    </div>
    <div className="secondSection">
       <h2>Second Smester</h2>
        <li>	Engineering Mathematics II</li>
        <li>	Microprocessor</li>
        <li>	Object-Oriented Programming</li>
        <li>	Engineering Chemistry</li>
        <li>	Electric Circuits and Machines</li>
        <li>	Workshop Technology</li>
    </div>
    </div>
  )
}

export default FirstYear