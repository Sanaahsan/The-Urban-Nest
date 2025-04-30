import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
    return (
        <div className="pt-10 px-4 md:px-20 lg:px-32 bg-[#343a40] w-full overflow-hidden" id="Footer">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <img src={assets.newLogo} alt="" className="h-35 w-auto object-contain filter invert brightness-0 contrast-200" />
                    <p className="text-gray-400 mt-4">"Urban Nest is dedicated to helping you find your perfect home. Whether you're buying, renting, or just exploring, our curated listings and expert guidance make the process seamless and stress-free. Let us help you discover the ideal space to call your own.".</p>
                </div>
                <div className="w-full md:w-1/5 mb-8 md:mb-0">
                    <h3 className="text-white text-lg font-bold mb-4">Company</h3>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <a href="#Header" className="hover:text-white">Home</a>
                        <a href="#About" className="hover:text-white">About Us</a>
                        <a href="#Contact" className="hover:text-white">Contact Us</a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                    </ul>
                </div>
                <div className="w-full md:w-1/3">
                    <h3 className="text-white text-lg font-bold mb-4">Subscribe to our newsletter</h3>
                    <p className="text-gray-400 mb-4 max-w-80">The latest news, articles, and resources, sent to your inbox weekly</p>
                    <div className="flex gap-2 ">
                        <input type="email" placeholder="Enter your email" className="p-2 rounded bg-[#495057] text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto" ></input>
                        <button className="text-[#212529] bg-[#f8f9fa]  py-2 px-4 rounded">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
                Copyright 2025 @sanamallick. All Rights Reserved.
            </div>
        </div>
    )
}
export default Footer;