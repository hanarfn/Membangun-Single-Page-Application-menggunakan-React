import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { BiArchiveIn } from 'react-icons/bi';

function Navigation() {
   return (
      <>
         <nav>
            <li className='navigation'><Link to='/archive'><BiArchiveIn /></Link></li>
            <li className='navigation'><Link to='/'><FiHome /></Link></li>  
         </nav>
      </>
   )
}
export default Navigation;