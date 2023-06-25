import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
function Navbar() {

    let Links =[
        {name:"HOME",link:"/"},
        {name:"CART",link:"/cart"},
      ];
      const [open,setOpen]=useState(false);
  return (
   <>
    <div className='  shadow-md w-full   border-b-2 border-b-indigo-600 z-[100] relative'>
    <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7 '>
    <Link to='/' className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800'>
      AnyShop
    </Link>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      {
        open? <AiOutlineClose/>:<AiOutlineMenu/>
      }
    </div>
   
    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' :'top-[-490px] px-16'}`}>
      {
        Links.map((link)=>(
          <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
            <Link to={link.link} className='text-gray-800 hover:text-indigo-600 duration-500'>{link.name}</Link>
          </li>
        ))
      }
      
    
    </ul>
    </div>
  </div>
  </>
  )
}

export default Navbar