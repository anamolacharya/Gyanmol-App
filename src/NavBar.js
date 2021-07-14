import React from 'react';
import {Link} from 'react-router-dom';
const NavBar = () => (
 <nav>
     <ul>
         <li>
                <Link to="/" > Home </Link>
                <Link to="/testprep" > Test Prep </Link>
                <Link to="/about" > About </Link>
                <Link to="/projects" > Project </Link>
                <Link to="/articles" > Articles </Link>
         </li>
     </ul>
 </nav>
    

);
 
export default NavBar;