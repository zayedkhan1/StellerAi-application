import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Context } from '../../Context/Context';
import '../../../src/CssFile/Main.css'
const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, input, setInput } = useContext(Context);

    return (
        <div className=' relative flex-1 min-h-screen pb-[15vh] '>

            {/* nav */}
         
            <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-8 py-4">
                <p className="text-xl sm:text-2xl text-gray-600 font-semibold">StellerAI</p>
                <img
                    className="w-8 sm:w-10 h-8 sm:h-10 rounded-full object-cover"
                    src={assets.user_icon}
                    alt="User"
                />
            </div>
            {/* nav */}

            <div className='w-8/12 mx-auto ' >

                {
                    !showResult
                        ?
                        <>
                            {/* Writing */}

                            <div className="my-8 sm:my-10 md:my-13 font-semibold px-4 sm:px-6 md:px-8 py-5 text-center sm:text-left">
                                <p className="mb-4 text-3xl sm:text-5xl md:text-7xl text-transparent bg-gradient-to-r from-blue-500 via-pink-600 to-red-500 bg-clip-text">
                                    <span>Hello, Dev.</span>
                                </p>
                                <p className="text-xl sm:text-6xl text-gray-300">How can I help you today?</p>
                            </div>
                            {/* Writing */}
                            {/* card field */}

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-3">
                                <div className="relative h-[190px] p-5 text-gray-700 rounded-xl bg-gray-100 cursor-pointer hover:bg-gray-200 shadow">
                                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                                    <img
                                        className="w-[35px] absolute p-1 bg-white rounded-full bottom-[10px] right-[10px]"
                                        src={assets.compass_icon}
                                        alt=""
                                    />
                                </div>
                                <div className="relative h-[190px] p-5 text-gray-700 rounded-xl bg-gray-100 cursor-pointer hover:bg-gray-200 shadow">
                                    <p>Briefly summarize this concept: urban planning</p>
                                    <img
                                        className="w-[35px] absolute p-1 bg-white rounded-full bottom-[10px] right-[10px]"
                                        src={assets.bulb_icon}
                                        alt=""
                                    />
                                </div>
                                <div className="relative h-[190px] p-5 text-gray-700 rounded-xl bg-gray-100 cursor-pointer hover:bg-gray-200 shadow">
                                    <p>Tell me about React js and React native</p>
                                    <img
                                        className="w-[35px] absolute p-1 bg-white rounded-full bottom-[10px] right-[10px]"
                                        src={assets.code_icon}
                                        alt=""
                                    />
                                </div>
                                <div className="relative h-[190px] p-5 text-gray-700 rounded-xl bg-gray-100 cursor-pointer hover:bg-gray-200 shadow">
                                    <p>Brainstorm team bonding activities for our work retreat</p>
                                    <img
                                        className="w-[35px] absolute p-1 bg-white rounded-full bottom-[10px] right-[10px]"
                                        src={assets.message_icon}
                                        alt=""
                                    />
                                </div>
                            </div>
                            {/* card field */}
                        </>

                        :
                        <div className=' p-[0px to-5%] min-h-[70vh] overflow-auto  '>

                            <div className='mx-5 p-5 flex items-center gap-6'>
                                <img className='w-[40px] rounded-full' src={assets.user_icon} alt="" />
                                <p>{recentPrompt}</p>
                            </div>
                            <div>
                                <div className='scrollbar p-5 flex items-start gap-6 overflow-y-scroll max-h-[60vh] '>
                                    <img className=' ml-5 w-[40px]' src={assets.gemini_icon} alt="" />
                                    {
                                        loading
                                            ?
                                            <div className='loader'>
                                                <hr />
                                                <hr />
                                                <hr />
                                            </div>
                                            :
                                            <p
                                                className='text-base  font-light leading-[1.8] '
                                                dangerouslySetInnerHTML={{ __html: resultData }}></p>

                                    }


                                </div>
                            </div>

                        </div>

                }







                {/* input field */}

                <div className="absolute w-full max-w-[955px] left-0 right-0 mx-auto px-4 sm:px-6 md:px-8 py-2">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-5 bg-gray-100 p-3 rounded-3xl w-full">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            className="w-full sm:flex-1 bg-transparent border-none outline-none p-2 text-base sm:text-lg"
                            type="text"
                            placeholder="Type your question..."
                        />
                        <div className="flex items-center gap-3 mt-3 sm:mt-0">
                            <img className="w-6 sm:w-[25px] cursor-pointer" src={assets.gallery_icon} alt="Gallery" />
                            <img className="w-6 sm:w-[25px] cursor-pointer" src={assets.mic_icon} alt="Mic" />
                            <img
                                onClick={() => {
                                    onSent();
                                }}
                                className="w-6 sm:w-[25px] cursor-pointer"
                                src={assets.send_icon}
                                alt="Send"
                            />
                        </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-4 text-center">
                        Steller may display inaccurate info, including about people, so double-check its responses. Your privacy and Steller Apps.
                    </p>
                </div>
                {/* input filed */}


            </div>




        </div>

    );
};

export default Main;