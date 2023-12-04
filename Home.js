import React from 'react';
import {AiOutlineWechat} from 'react-icons/ai';
import image from '../assets/pexels-stefan-stefancik-91227.jpg'
import {IoAddCircle} from 'react-icons/io5';
import {IoArrowBackCircle} from 'react-icons/io5';
import {RiDeleteBinFill} from 'react-icons/ri';
import chatImg from '../assets/pexels-andrea-piacquadio-762020.jpg';
import {FaTelegram} from 'react-icons/fa';
import {IoChatbubbleEllipses} from 'react-icons/io5';
import {IoCloseCircleOutline} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useState } from 'react';





const Home = () => {
    const[openChat,setOpenChat] = useState(false)

    const toggleChat = () => {
        setOpenChat(!openChat)
    }
    return (
        <div className='  bg-black flex h-screen w-full p-10 gap-[50px] overflow-hidden'>
            <div className='hidden md:flex flex-col bg-neutral-900  font-poppins text-white items-start rounded-lg h-full w-[80vh] p-6 '>
               
                
                
                <h2 className='sm:text-2xl md:text-3xl  text-start'>ALL YOUR CHATS</h2>
                <div className='sm:text-xl md:text-2xl  flex justify-center '>
                    <button className='flex gap-2 p-3 px-[50px] bg-red-300 rounded-xl text-black mt-6 hover:text-gray-600'><AiOutlineWechat className='text-3xl'/> Chat Images: ON</button>
                    
                </div>
                <p className= 'my-3 text-start '>When a bot sends you images, you will be charged one secondary image</p>
                <div className='flex flex-col gap-6'>
                  

                    <button className='bg-gray-700 rounded-[50px] hover:shadow-sm hover:shadow-red-300'>
                        <div className='flex flex-col gap-4 m-1 items-center md:flex-row '>
                            <img src={image} alt='text' className='w-[75px] rounded-[50px]'></img>
                             <div className=' text-start '>
                            <h2 className='font-bold'>Careesa Jeslin</h2>
                            <p className='mr-6'> Lorem aute dolor pariatur.</p>
                             </div>
                        </div>
                       
                    </button>
                    <button className='bg-black  rounded-[50px] hover:shadow-sm hover:shadow-red-300'>
                        <div className='flex flex-col  gap-4 m-1 items-center md:flex-row'>
                            <img src={image} alt='text' className='w-[75px] rounded-[50px] '></img>
                             <div className='text-start'>
                            <h2 className='font-bold '>Abin Varghese</h2>
                            <p> Lorem aute dolor pariatur.</p>
                             </div>
                        </div>
                       
                    </button>
                    <div className="border-b-2 border-slate-700 m-4" />

                    <div className='sm:text-xl px-4 md:text-3xl gap-3 text-center hover:text-red-300 h-screen'>
                        <Link to='/newbot'>
                              <button className='flex gap-2'> 
                                    <IoAddCircle className='text-4xl' />
                                    
                                    Create New Bot
                               </button>
                        </Link>
                      
                    </div>




                    
                </div>
             
            
                

               

            </div>

              <div className='md:hidden text-red-300 text-3xl flex' onClick={toggleChat}>
                {!openChat ? <IoChatbubbleEllipses/> : <IoCloseCircleOutline/> }
            </div>
            

            <div className={!openChat ? 'hidden' : 'bg-neutral-900  p-3 font-poppins text-white '}>
                <h2 className="sm:text-2xl font-bold   text-start">ALL YOUR CHATS</h2>
                 <div className='flex flex-col gap-2 m-1 items-center py-4 shadow-md shadow-red-300 mt-2 rounded-md'>
                            <img src={image} alt='text' className='w-[75px] rounded-[50px]'></img>
                             <div className=' text-center'>
                            <h2 className='font-bold'>Careesa Jeslin</h2>
                            <p className='text-xs font-bold'> Lorem aute dolor pariatur.</p>
                             </div>
                 </div>

                 <div className='flex flex-col gap-2 m-1 items-center py-4 shadow-md shadow-red-300 mt-5 rounded-md'>
                            <img src={image} alt='text' className='w-[75px] rounded-[50px]'></img>
                             <div className=' text-center'>
                            <h2 className='font-bold'>Abin Varghese</h2>
                            <p className='text-xs font-bold'> Lorem aute dolor pariatur.</p>
                             </div>
                 </div>

                  <div className=' px-4  gap-3 text-center hover:text-red-300  mt-7 shadow-sm shadow-red-300 p-2'>
                       <Link to='/newbot'>
                         <button className='flex flex-col items-center gap-2'> 
                            <IoAddCircle className='text-2xl' />
                            <h2 className='text-sm'>Create new bot</h2>
                        </button>
                       </Link>
                    </div>


            
            </div>
                
           



            

            <div className='bg-neutral-900 rounded-xl w-full h-full font-poppins'>
                <div className='bg-gray-700 flex flex-col justify-between items-center p-2 md:flex-row rounded-lg '>
                    <img src={image} alt="profile" className="w-[75px] rounded-[50px]" />
                    <h2 className="text-white  font-bold">Abin Varghese</h2>
                     <div className='flex flex-col gap-2 align-center text-white md:flex-row '>
                        <IoArrowBackCircle className='text-sm  text-white hover:text-red-300'/>
                        <h2 className='hover:text-red-300 cursor-default text-sm ' >Back</h2>
                        <RiDeleteBinFill className='text-sm  text-white hover:text-red-300'/>
                        <h2 className='hover:text-red-300 cursor-default text-sm '>Delete</h2>
                    </div>
                    

                    


                
                    
                </div>

                <div className='flex flex-col items-end text-black font-poppins overflow-hidden mr-7 md:mt-[20vh] '>
                        <div className='flex  items-center gap-1'>
                            <h2 className='bg-red-300 px-3 p-1 rounded-[7px] font-bold text-sm md:text-lg'>Hello</h2>
                            <img src={chatImg} alt='chatImage' className='w-[50px] rounded-[100px]'></img>
                            
                        </div>
                        <div className='text-black bg-red-300 px-3 p-1 rounded-[7px] mt-3 w-full md:w-[50vh]'>
                            <p className='font-bold text-start text-sm md:text-lg'>My order is pending , Please help!</p>
                        </div>
                </div>

                <div className='ml-7 overflow-hidden'>
                    <div className='flex  items-center gap-1'>
                            <img src={image} alt="chatImage" className="w-[55px] rounded-[100px]" />
                            <h2 className='bg-gray-700 px-3 p-1 rounded-[7px] font-bold text-sm md:text-lg text-white'>Hello!</h2>
                            
                        </div>
                        <div className='text-white bg-gray-700 px-3 p-1 rounded-[7px] mt-3 w-full md:w-[50vh]'>
                            <p className='font-bold text-start text-sm md:text-lg'>Sure I can help you! order id?</p>
                        </div>
                </div>
                 <div className='flex flex-col items-end text-black font-poppins overflow-hidden mr-7'>
                        <div className='flex  items-center gap-1'>
                            <h2 className='bg-red-300 px-3 p-1 rounded-[7px] font-bold text-sm md:text-lg'>Thankyou!</h2>
                            <img src={chatImg} alt='chatImage' className='w-[50px] rounded-[100px]'></img>
                            
                        </div>
                        <div className='text-black bg-red-300 px-3 p-1 rounded-[7px] mt-3 w-full md:w-[50vh]'>
                            <p className='font-bold text-start text-sm md:text-lg'>My order is 12F456, Do update me !</p>
                        </div>
                </div>
                <div className='flex p-3 gap-2 mt-[50px] md:mt-[14vh] font-poppins font-bold'>
                    <input placeholder='Message' className='px-3 p-2 rounded-[40px] w-full bg-gray-700'></input>
                    <button className='text-3xl'>
                        <FaTelegram className='text-red-300'/>
                    </button>
                </div>

            </div>
           
        </div>
    );
};

export default Home;