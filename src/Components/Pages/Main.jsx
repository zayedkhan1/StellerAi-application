import React from 'react';
import { assets } from '../../assets/assets';

const Main = () => {
    return (
        <div className=' relative flex-1 min-h-screen pb-[15vh] '>
           
           
           <div className='flex items-center justify-between p-5'>
            <p className='text-2xl  text-gray-600'>Steller</p>
            <img  className='w-[40px] rounded-full' src={assets.user_icon} alt="" />
           
           </div>
            
            <div className='w-8/12 mx-auto ' >
                <div className='my-13 font-semibold p-5 text-6xl text-gray-300'>
                    <p className='mb-4  bg-gradient-to-r from-blue-500 via-pink-600 to-red-500 bg-clip-text text-transparent'> <span>Hello,Dev.</span> </p>
                    <p>How can I help you today?</p>
                </div>
                {/* card field */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3 '>
                    <div className='relative h-[190px] p-5 border-none text-gray-700 border-gray-400 rounded-xl bg-gray-100 cursor-pointer hover:bg-gray-200 shadow'>
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img className='w-[35px] absolute p-1  bg-white rounded-full bottom-[10px] right-[10px] ' src={assets.compass_icon} alt="" />
                    </div>
                    <div className='relative h-[190px] p-5 border-none text-gray-700 border-gray-400 rounded-xl bg-gray-100 cursor-pointer hover:bg-gray-200 shadow'>
                        <p>Briefly summarize this concept: urban planning</p>
                        <img className='w-[35px] absolute p-1  bg-white rounded-full bottom-[10px] right-[10px] ' src={assets.bulb_icon} alt="" />
                    </div>
                    <div className='relative h-[190px] p-5 border-none text-gray-700 border-gray-400 rounded-xl bg-gray-100  cursor-pointer hover:bg-gray-200 shadow'>
                        <p>Tell me about React js and React native</p>
                        <img className='w-[35px] absolute p-1  bg-white rounded-full bottom-[10px] right-[10px] ' src={assets.code_icon} alt="" />
                    </div>
                    <div className='relative h-[190px] p-5 border-none text-gray-700 border-gray-400 rounded-xl bg-gray-100 cursor-pointer hover:bg-gray-200 shadow'>
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img  className='w-[35px] absolute p-1  bg-white rounded-full bottom-[10px] right-[10px] ' src={assets.message_icon} alt="" />
                    </div>
                </div>
      
{/* input field */}
               <div  className='absolute w-[100%] max-w-[955px] mx-auto py-2'>
                   <div className='flex items-center justify-between gap-5 bg-gray-100 p-3 rounded-4xl '>
                    <input className='flex-1 bg-transparent border-none outline-none p-1 text-xl'  type="text" placeholder='Enter Prompt here ...' />
                    <div className='flex items-center gap-2.5'>
                        <img className='w-[25px] cursor-pointer' src={assets.gallery_icon} alt="" />
                        <img className='w-[25px] cursor-pointer' src={assets.mic_icon} alt="" />
                        <img className='w-[25px] cursor-pointer' src={assets.send_icon} alt="" />
                    </div>
                   </div>
                <p className='text-small text-gray-600 mt-4 mx-auto text-center '>Steller may display inaccurate info, including about people, so double-check its responses. Your privacy and Steller Apps.</p>
               </div>


            </div>
           


          
        </div>
    );
};

export default Main;