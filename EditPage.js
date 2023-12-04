import React from 'react';
import {FaWandMagicSparkles} from 'react-icons/fa6';


const EditPage = () => {
    return (
        <div className='bg-black h-screen flex justify-center'>
            <div className='font-poppins text-white py-10 shadow-md shadow-red-300 p-5 my-[20vh]'>
                <h2 className='text-2xl md:text-5xl flex gap-4'>Hi, This is your Edit Page <FaWandMagicSparkles/> </h2>
            </div>
        </div>
    );
};

export default EditPage;