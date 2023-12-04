import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navi = useNavigate()

    const loginSwitch = () => {
        navi('/')
    }
    return (
       <div className='bg-black h-screen w-full flex justify-center  '>
            <div className='mt-[8%] '>
                <form className='font-mono text-white flex flex-col text-start shadow-lg shadow-red-300 p-[20px] md:p-[80px]'>
                    <h2 className='font-bold text-2xl md:text-4xl py-2 text-decoration: underline'>SignIn</h2>
                    <label className=' text-xl md:text-2xl font-bold py-2'>Mail</label>
                    <input className='p-1 md:p-2 rounded-[10px] bg-red-300 text-black' placeholder='Enter your mail'></input>
                    <label className='text-xl md:text-2xl font-bold py-2'>Password</label>
                    <input className='p-1 md:p-2 rounded-[10px] bg-red-300 text-black' placeholder='Enter your password'></input>
                    <button className='bg-white text-black font-bold 0 p-2 rounded-[20px] mt-2' onClick={loginSwitch}>SignIn</button>
                    
                </form>
        
            </div>
        </div>
    );
};

export default Login;