import React from 'react';
import arrow from "../../assart/arrow.png"
import building from "../../assart/building2.png"
import man from "../../assart/man.png"
import "./style.css"

const Service = () => {
    return (
        <div className='max-w-[1500px]  mx-auto flex items-center justify-between md:flex-row flex-col'>
            <div className='w-full text-center md:text-left  md:w-[550px] py-[100px] z-50 mx-5'>
                <h1 className='text-[50px] text-[#396C03]' style={{ fontFamily: 'Merienda', }}>Explore your favourite city’s food.</h1>
                <p className='text-[#676767]'>Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique. Non ligula tristique ut ut libero sit convallis maecenas. At egestas auctor porta mattis.</p>
                <button className='flex gap-2 items-center justify-center bg-[#396c03] w-[150px] md:w-[200px] rounded-x-full md:rounded-full text-white h-[50px] mt-10 mx-auto md:mx-0'>
                    <span>Search</span>
                    <img src={arrow} alt="" />
                </button>
            </div>
            <div className='relative'>

                <img className='buildingImage' src={building} alt="" />
                <div className='absolute top-0 left-0'>
                    <img src={man} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Service;