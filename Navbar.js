import React from 'react';
import {FaHome} from 'react-icons/fa';
import {FaPencilAlt} from 'react-icons/fa';
import {FaWandMagicSparkles} from 'react-icons/fa6';
import {GiHamburgerMenu} from 'react-icons/gi';
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='bg-black p-5 h-full w-full' >
        <div className='flex justify-around font-poppins w-full'>
            <h2 className="text-3xl font-bold text-red-300">Logo</h2>

            <ul className='items-center text-2xl cursor-pointer text-white hidden md:flex gap-[75px]'>
                <Link to='/'>
                    <li className='hover:text-red-300 flex items-center gap-2'> <FaHome/>Explore</li>
                    
                </Link>
                <Link to='/create'>
                    <li className='hover:text-red-300 flex items-center gap-2'> <FaPencilAlt/> Create</li>

                </Link>
                <Link to='/edit'>
                     <li className='hover:text-red-300 flex items-center gap-2'> <FaWandMagicSparkles/>Edit</li>

                </Link>

            </ul>
            <Link to='/login'>
            <button className='text-2xl bg-red-300 px-[45px] rounded-[40px] hidden md:flex hover:text-white'>Login</button> 

            </Link>
            <div className='md:hidden text-red-300 text-3xl flex items-center' onClick={toggleNav}>
                {!isOpen ? <GiHamburgerMenu/> : <IoCloseCircleOutline/> }
            </div>

        </div>
        <ul className={!isOpen ? 'hidden' : ' bg-gray-200 w-full  p-8 text-2xl font-poppins '}>
            <Link to='/'>
                <li className='  border-b-2 border-gray-600 p-4 w-full text-red-300 font-bold hover:text-black'>Explore</li>


            </Link>
            <Link to='/create'>
                 <li className="border-b-2 border-gray-600 p-4 w-full text-red-300 font-bold hover:text-black ">Create</li>


            </Link>
            <Link to='/edit'>
                <li className="border-b-2 border-gray-600 p-4 w-full text-red-300 font-bold hover:text-black ">Edit</li>


            </Link>
            <Link to='/login'>
                <button className='text-2xl bg-red-300 rounded-[40px] hover:text-white border-b-2 border-gray-600 p-4 mt-3 w-full'>Login</button> 


            </Link>
        </ul>
        

         
            
        </div>
    );
};

export default Navbar;