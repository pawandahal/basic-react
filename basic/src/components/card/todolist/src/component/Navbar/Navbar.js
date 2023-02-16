import React from 'react'
import { Link } from 'react-router-dom'
import { faBook,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Navbar.css"
const Navbar=()=>{
    return(
        <div className="Navbar">
          <FontAwesomeIcon className="icons" icon={faBook} />
        <nav>
        <ul className="listing" style={{
          marginTop:"-40px"
        }}>
        <li>
         <Link to="/myday" style={{color:'red'}}>MyTask</Link>
        </li>
          <li>
            <Link to="/assigment" style={{color:'red'}}>Assigment</Link>
          </li>
          <li>
            <Link to="/formula" style={{color:'red'}}>Formula</Link>
          </li>
          <li>
            <Link to="/freeCourse" style={{color:'red'}}>FreeCourse</Link>
          </li>
          <li>
            <Link to="/subject" style={{color:'red'}}>Subject</Link>
          </li>
          <li>
          <Link to="/completedTask" style={{color:'red'}}>CompletedTask</Link>
        </li>
        <div className="form">
        <input className="inputleft" type="text" placeholder="Search" />
        <FontAwesomeIcon className="iconsubmit " icon= {faMagnifyingGlass} />
       </div>
        <li>
            <Link to="/login" style={{color:'red'}}>Login</Link>
          </li>
        </ul>
      </nav>
      
        </div>
    )
}
export default Navbar