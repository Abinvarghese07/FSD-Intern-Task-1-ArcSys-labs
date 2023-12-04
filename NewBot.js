import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewBot = () => {
    const navigate = useNavigate()

    const createBot = () => {
        navigate('/')
    }

    return (

            <div className='bg-black h-screen w-full flex justify-center  '>
                <div className='mt-[8%] '>
                    <form className='font-mono flex flex-col p-[20px] md:p-[60px] shadow-lg shadow-red-300 text-white mb-10'>
                        <h2 className='font-bold text-2xl md:text-4xl py-2 text-decoration: underline'>Create New Bot !</h2>
                        <label className='text-xl md:text-2xl font-bold py-2 text-start text-red-300'>Your Name</label>
                        <input className='p-1 md:p-2 rounded-[10px] text-black' placeholder='Enter your mail' type='name'></input>
                        <label className='text-xl md:text-2xlfont-bold py-2 text-start text-red-300'>Your Mail</label>
                        <input className='p-1 md:p-2 rounded-[10px] text-black' placeholder='Enter your password' type='email' ></input>
                        <button className='bg-red-300 p-2 rounded-[20px] mt-5 font-bold' onClick={createBot}>Create !</button>
                        
                    </form>
            
                </div>
        </div>
    );
};

export default NewBot;