import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'

const Navbar = () => {
    return (
        <div >
            <ul className='nav'>
             
           <Link to={"/About"}> <li>about us</li></Link>
           <Link to={"/home"}> <li>Home</li></Link>
           <Link to={"/conta"}> <li>Contact</li></Link>

            
            
            
            
            
            </ul>
        </div>
    )
}

export default Navbar
