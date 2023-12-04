import React from 'react';
import {FaRegPaperPlane} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';



const Footer = () => {
    return (
        <div className='bg-black h-full '>
            <div className=' p-5 px-[20vh] items-center flex flex-col md:flex-row  justify-between'>
                <h2 className="text-3xl font-bold text-red-300">Logo</h2>;
                <p className='text-white  flex items-center gap-5'>Contact-9487293670
                  <div className='text-red-300 flex flex-col md:flex-row gap-2 text-2xl hover:scale-95 '>
                    <FaRegPaperPlane/>
                    <FaInstagram/>
                    <FaXTwitter/>

                </div>
                </p>

            </div>
           
           
        </div>
    );
};

export default Footer;