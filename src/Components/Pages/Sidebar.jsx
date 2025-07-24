import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { Context } from '../../Context/Context';


const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {

        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div>

            <div className=' h-full inline-flex flex-col justify-between bg-gray-100 py-5 px-5 '>

                <div>
                    <div>
                        <img onClick={() => { setExtended(!extended) }} className='w-[30px] ' src={assets.menu_icon} alt="" />
                        <div onClick={() => { newChat() }} className='inline-flex items-center text-gray-600 gap-2.5 py-2 px-3 mt-13 mb-3 bg-gray-200 rounded-3xl cursor-pointer'>
                            <img className='w-[20px]' src={assets.plus_icon} alt="" />
                            {extended ? <p >New Chat</p> : null}
                        </div>
                    </div>
                    {extended ? <div className='flex flex-col'>
                        <p className='text-start mt-4'>Recent</p>
                        {
                            prevPrompt.map((item, idx) => {
                                return (
                                    <div onClick={() => { loadPrompt(item) }} key={idx} className='cursor-pointer inline-flex items-center text-gray-600 gap-2 mt-4 border-none rounded-2xl hover:bg-gray-400 p-2'>
                                        <img className='w-[25px] ' src={assets.message_icon} alt="" />
                                        <p>{item.slice(0, 18)}...</p>
                                    </div>
                                )

                            })
                        }

                    </div> : null}

                </div>


                <div className='flex flex-col '>
                    <div className='inline-flex items-center gap-2 border-none rounded-2xl hover:bg-gray-400 p-2 cursor-pointer'>
                        <img className='w-[25px]' src={assets.question_icon} alt="" />
                        {extended ? <p>Help </p> : null}
                    </div>
                    <div className='inline-flex items-center gap-2 border-none rounded-2xl hover:bg-gray-400 p-2 cursor-pointer'>
                        <img className='w-[25px]' src={assets.history_icon} alt="" />
                        {extended ? <p>Activity </p> : null}
                    </div>
                    <div className='inline-flex items-center gap-2 border-none rounded-2xl hover:bg-gray-400 p-2 cursor-pointer'>
                        <img className='w-[25px]' src={assets.setting_icon} alt="" />
                        {extended ? <p>Seetings </p> : null}
                    </div>

                </div>

            </div>

        </div>


    );
};

export default Sidebar;