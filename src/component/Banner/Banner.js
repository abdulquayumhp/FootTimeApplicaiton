import React from 'react';
import main from "../../assart/main.png"
import mainTwo from "../../assart/maintwo.png"
import flower from "../../assart/flower.png"
import search from "../../assart/search.png"
import rectangle from "../../assart/Rectangle 5.png"
import tik from "../../assart/tik.png"
import "../Service/style.css"

const Banner = () => {
    return (
        <div className='relative'>
            <div className='max-w-[1500px]  lg:mx-auto flex items-center md:flex-row flex-col pl-5'>
                <div className='w-full lg:w-[700px]  pt-[150px]  relative z-50' style={{ fontFamily: 'Merienda', }} >
                    <h1 className='text-[#396C03] text-[30px] md:text-[40px] lg:text-[65px] '>Order food online from your favourite local restaurants.</h1>

                    <p className='text-[#676767] text-[24px] font-semibold'>Freshly made food delivered to your door.</p>
                    <div className='border flex font-sans mt-5 rounded-full pl-2 items-center h-[70px]'>
                        <div className='w-[60px] h-[50px] rounded-full bg-[#FF8B00]'></div>
                        <input className='py-3 h-[68px] w-[80%] bg-[#f0f4ec] rounded-x-full md:rounded-full outline-none pl-5' type="text" placeholder='Enter Your Location' />
                        <button className='flex gap-2 items-center justify-center bg-[#396c03] w-[150px] md:w-[200px] rounded-x-full md:rounded-full text-white h-[70px]'>
                            <img src={search} alt="" />
                            <span>Search</span>
                        </button>
                    </div>
                </div>
                <div className='position relative pt-[100px] w-full md:w-[800px]'>
                    <img className='z-50 relative w-full' src={main} alt="" />
                    <div>
                        <img className='absolute top-16 left-0 ' src={mainTwo} alt="" />
                        <img className='absolute right-0 top-0 z-10' src={flower} alt="" />
                    </div>
                    <div className='rectangle py-2'>
                        <div className='flex items-center gap-2 mx-5 mt-2'>
                            <img className='w-5 ' src={tik} alt="" />
                            <h1 className='text-2xl font-bold text-[#FF8B00]'>200k+</h1>
                        </div>
                        <h1 className='text-center text-[15px] text-[#838383]'>People Delivery</h1>
                    </div>
                </div>
                <div>
                    <img className='absolute -top-16 left-0' src={flower} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;