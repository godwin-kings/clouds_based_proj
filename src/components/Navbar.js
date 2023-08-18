import React, {useState} from 'react';
import {MdOutlineRestaurantMenu, MdOutlineMenu} from 'react-icons/md';

 const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h3 className='w-full  text-3xl font-bold text-[#ff4c68]'>REACT.</h3>
        <ul className='hidden md:flex'>
            <li className='p-4'>HOME</li>
            <li className='p-4'>COMPANY</li>
            <li className='p-4'>RESOURCE</li>
            <li className='p-4'>ABOUT</li>
            <li className='p-4'>CONTACT</li>
        </ul>
            <div onClick={handleNav} className='block md:hidden'>
              {nav ? <MdOutlineRestaurantMenu size={35}/> : <MdOutlineMenu size={35}/> }

            </div>

            <div className= {!nav ? ' fixed left-[-100%]': 'fixed left-0 top-0 h-full border-r border-r-gray-900 w-[60%] bg-[#000300] ease-in-out duration-200'} >

            
 
              <ul className='pt-24 uppercase p-4 '>
            <li className='p-4 border-b border-b-gray-500'>HOME</li>
            <li className='p-4 border-b border-b-gray-500'>COMPANY</li>
            <li className='p-4 border-b border-b-gray-500'>RESOURCE</li>
            <li className='p-4 border-b border-b-gray-500'>ABOUT</li>
            <li className='p-4'>CONTACT</li>
        </ul>
            </div>
    </div>
  )
}

export default Navbar