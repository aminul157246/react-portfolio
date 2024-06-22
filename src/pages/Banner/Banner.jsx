import React from 'react';
// import profileImg from '../../assets/profile-circle.png'
// import profileImg from '../../assets/IMG_4656-01.jpeg'
import profileImg from '../../assets/pro-img.png'

import './banner.css'

const Banner = () => {
    return (
        <div className=' bg-black gap-10 flex wrapper justify-center items-center px-12  text-white h-screen '>
            <div className='flex-1 space-y-6'>
                <h4 className='uppercase'>Hello,  <span className='text-[#29A587]'>My name is</span></h4>
                <h1 className='uppercase  text-7xl font-bold '>AMINUL ISLAM</h1>
                <p className='text-xl font-jost'>I'm a Frontend Developer</p>
                <p className="text-lg mt-4">I enjoy building solid and scalable frontend products  that <br /> offer  great  <span className="font-bold">user experiences</span>.</p>

            </div>
            <div className='profile flex-1 '>
                <img className='w-[500px]  hover:scale-105 hover:-translate-y-2 transition-transform duration-300' src={profileImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;