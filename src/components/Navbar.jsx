import React from 'react'
import {BsFillBriefcaseFill} from 'react-icons/bs';
import {FaUserAlt, FaEnvelope} from 'react-icons/fa';
function Navbar() {
    return (
     <div> <nav class="nav">
     <ul>
         
         <li><a href="#aboutme"><FaUserAlt/> About Me</a></li>
         <li><a href="#Projects"><BsFillBriefcaseFill/> Projects</a></li>
         <li><a href="#contact"><FaEnvelope/> Contact Me</a></li>
     </ul>
 </nav></div>
      
    );
  }
  
export default Navbar;