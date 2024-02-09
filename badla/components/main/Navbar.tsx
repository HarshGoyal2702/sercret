import React from "react";
import Image from  'next/image'
import {Socials} from "../../../constants/index";
const Navbar =() => {
    return (
       <div className="w-full h-[65px] top-0 shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
            <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
                <Image src="/NavLogo.png" alt="logo" width={70} height={70} className="cursor-pointer hover:animate-slowspin"/>
                <span className="font-bold ml-[10px] hidden md:block text-gray-300">Vaish College of Engineering</span>
            </a>

            <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                <div className="flex items-center justify-center border border-[#7042f861] bg-[#0300145e] w-full h-auto mr-[15px] px-[20px] py-[10px] rounded-full">
                    <a href="#home" className="cursor-pointer">Home</a>
                    <a href="#events" className="cursor-pointer">Events</a>
                    <a href="#about" className="cursor-pointer">About</a>
                    {/* <a href="#register" className="cursor-pointer">Register</a> */}
                </div>
            </div>
            <div className="flex flex-row gap-5 ">
               { Socials.map((social)=>(
                    <Image src={social.src} alt={social.name} key={social.name} width={24} height={24}/>
                ))}

            </div>

        </div>
       </div>
    )
}
export default Navbar;