import React from 'react';
import cart from "../../assart/cart.png"
import downArrow from "../../assart/down arrow.png"
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <div className='flex items-center h-[80px] max-w-[1500px]  mx-auto justify-between'>
                <h1 style={{ fontFamily: 'Merienda', }} className='text-[#396C03] text-[28px] flex items-center cursor-pointer'>
                    FoodTime
                </h1>

                <div className='md:flex hidden'>
                    <ul style={{ fontFamily: "Poppins" }} className='flex items-center gap-14 font-medium text-lg '>
                        <li className=' cursor-pointer'>Home</li>
                        <li className=' cursor-pointer'>Blog</li>
                        <li className=' cursor-pointer'>About us</li>
                        <li className='flex items-center gap-2 cursor-pointer'>EN
                            <img className='w-full h-full' src={downArrow} alt="" />
                        </li>


                        <button className='bg-[#396C03] text-white rounded-full py-[12px] px-[50px]'>Login</button>
                        <div className='relative cursor-pointer'>
                            <li className='bg-[#396C03] w-[60px] h-[60px] rounded-full flex items-center justify-center'>
                                <img src={cart} alt="" />
                            </li>
                            <h1 className='absolute top-2 -right-2 bg-[#FF8B00] w-5 h-5 rounded-full flex items-center justify-center text-white'>
                                2
                            </h1>


                        </div>

                    </ul>


                </div>
                <div className='cursor-pointer text-2xl md:hidden flex'>
                    <FaBars />
                </div>

            </div>
            <hr className='' />
        </>

    );
};

export default Navbar;