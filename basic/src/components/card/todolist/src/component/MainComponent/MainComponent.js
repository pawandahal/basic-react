import React from 'react'
import images from '../assets/images.jpg'
const MainComponent=()=>{
    return(
        <div className="Maincomponent">
             <div className="firstSection">
               <img src={images} alt="img"/>
             </div>
        </div>
    )
}
export default MainComponent