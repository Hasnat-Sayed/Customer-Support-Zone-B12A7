import React from 'react';
import vector1 from '../assets/vector1.png'
import vector2 from '../assets/vector2.png'

const Banner = () => {
    return (
        <div className="bg-[#F5F5F5] py-12">
        <div className="flex flex-col md:flex-row gap-5  container mx-auto px-4">
          <div className="h-[250px]  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex-1 rounded-xl flex items-center justify-center flex-col text-white relative">
            <div className="flex justify-between w-full">
              <img src={vector1} alt="" />
              <img src={vector2} alt="" />
            </div>
            <div className="absolute text-center">
              <h3 className="text-xl md:text-2xl">In-Progress</h3>
              <p className="text-5xl md:text-6xl font-semibold mt-2">0</p>
            </div>
          </div>
          <div className="h-[250px] bg-gradient-to-r from-[#54CF68] to-[#00827A] flex-1 rounded-xl flex items-center justify-center flex-col text-white relative ">
            <div className="flex justify-between w-full">
              <img src={vector1} alt="" />
              <img src={vector2} alt="" />
            </div>
            <div className="absolute text-center">
              <h3 className="text-xl md:text-2xl">Resolved</h3>
              <p className="text-5xl md:text-6xl font-semibold mt-2">0</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;