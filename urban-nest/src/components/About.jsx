import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div 
      initial={{opacity:0,x:200}}
       transition={{duration:1}}
       whileInView={{opacity:1,x:0}}
       viewport={{once:true}}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id="About">

        <h1 className="text-2xl sm:text-4xl font-bold mb-2">About <span className="underline underline-offset-4 decoration-1 under font-light">Our Brand</span></h1>
        <p className="text-gray-500 max-w-80 text-center mb-8">Passionate About Properties, Dedicated to Your Vision</p>
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
          <img src={assets.brand_img} className="w-full sm:w-1/2 max-w-lg"></img>
          <div className="flex flex-col items-center md:items-start mt-10 text-[#212529]">
            <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
              <div>
                <p className="text-4xl font-medium text-gray-800">10+</p>
                <p className="text-[#212529]">Years of Excellence</p>

              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">12+</p>
                <p>Projects Completed</p>

              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">20+</p>
                <p>Mn. Sq. Ft. Delivered</p>

              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">25+</p>
                <p>Ongoing Projects</p>

              </div>

            </div>
            <p className="my-10 max-w-lg">UrbanNest is a dynamic real estate company dedicated to providing exceptional properties that cater to modern living needs. We focus on delivering innovative, sustainable, and comfortable spaces for individuals and families. With a deep understanding of the market, UrbanNest strives to make homeownership easy and accessible, offering personalized services and a seamless experience. Our commitment to quality, integrity, and customer satisfaction drives every project we undertake.</p>
            <button className="bg-[#212529] text-[#f8f9fa] px-8 py-2 rounded">Learn more</button>

          </div>

        </div>
      </motion.div>
    </>
  )
}

export default About