import React from 'react';
import {FaPencilAlt} from 'react-icons/fa';
import Typed from 'react-typed'

const CreatePage = () => {
    return (
        <div className='bg-black h-screen flex justify-center'>
            <div className='text-white font-poppins py-10 shadow-md shadow-red-300 p-5 my-[20vh]'>
                <h1 className='text-2xl md:text-5xl flex gap-4'>This is your Create Page <FaPencilAlt className='text-red-300 '/> </h1>
                <div className=' flex justify-center text-3xl md:text-6xl py-8 text-red-300 font-bold'>
                    <Typed strings={['Create.' ,'Innovate.','Repeat.']} typeSpeed={100} backSpeed={100} loop></Typed>
                </div>

            </div>
        </div>
    );
};

export default CreatePage;