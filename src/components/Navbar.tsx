import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosMenu, IoMdClose } from 'react-icons/io'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { useRouter } from "next/router";
const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const router = useRouter();
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#121212]">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
            src="/../public/navPic.png"
            alt="/"
            width="75"
            height="75"
        />
            <div>
                <ul className="hidden md:flex">
                    <Link href="/">
                        <li className={router.pathname === "/" ? "font-bold ml-10 text-sm underline decoration-[#6f32ff] decoration-2 underline-offset-4 hover:decoration-4 cursor-pointer" : "font-bold ml-10 text-sm hover:underline decoration-[#6f32ff] decoration-2 underline-offset-4 cursor-pointer"}>Home</li>
                    </Link>
                    <Link href="/about">
                        <li className={router.pathname === "/about" ? "font-bold ml-10 text-sm underline decoration-[#6f32ff] decoration-2 underline-offset-4 hover:decoration-4 cursor-pointer" : "font-bold ml-10 text-sm hover:underline decoration-[#6f32ff] decoration-2 underline-offset-4 cursor-pointer"}>About</li>
                    </Link>
                    <Link href="/journey">
                        <li className={router.pathname === "/journey" ? "font-bold ml-10 text-sm underline decoration-[#6f32ff] decoration-2 underline-offset-4 hover:decoration-4 cursor-pointer" : "font-bold ml-10 text-sm hover:underline decoration-[#6f32ff] decoration-2 underline-offset-4 cursor-pointer"}>Journey</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden cursor-pointer'>
                    <IoIosMenu size={25}/>
                </div>
            </div>
        </div>

        <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70" : ''}>
            <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-full shadow-xl shadow-[#000000] bg-[#121212] p-10 ease-in duration-300" : "fixed left-[-100%] top-0 p-10 ease-in duration-150"}>
                <div>
                    <div className="flex w-full items-center justify-between">
                        <Image src="/../public/navPic.png" width="45" height="45" alt="/"/>
                        <div onClick={handleNav} className="cursor-pointer">
                            <IoMdClose color='6f32ff' size={23} />
                        </div>
                    </div>
                    <div className="border-b border-[#6f32ff] my-4">
                        <p className="w-[85%] md:w-[90%] py-4">Student Software Engineer & Entrepreneur</p> 
                    </div>
                </div>
                <div className="py-4 flex flex-col h-full">
                    <ul className="grow">
                        <Link href="/">
                            <li className={router.pathname === "/" ? "font-bold py-4 w-[33%] text-md underline decoration-[#6f32ff] decoration-2 underline-offset-4 hover:decoration-4 cursor-pointer" : "font-bold py-4 w-[33%] text-md hover:underline decoration-[#6f32ff] decoration-2 underline-offset-4 cursor-pointer"}>Home</li>
                        </Link>
                        <Link href="/about">
                            <li className={router.pathname === "/about" ? "font-bold py-4 w-[33%] text-md underline decoration-[#6f32ff] decoration-2 underline-offset-4 hover:decoration-4 cursor-pointer" : "ont-bold py-4 w-[33%] text-md hover:underline decoration-[#6f32ff] decoration-2 underline-offset-4 cursor-pointer"}>About</li>
                        </Link>
                        <Link href="/journey">
                            <li className={router.pathname === "/journey" ? "font-bold py-4 w-[33%] text-md underline decoration-[#6f32ff] decoration-2 underline-offset-4 hover:decoration-4 cursor-pointer" : "ont-bold py-4 w-[33%] text-md hover:underline decoration-[#6f32ff] decoration-2 underline-offset-4 cursor-pointer"}>Journey</li>
                        </Link>
                       
                    </ul>
                    
                    <div>
                        <p className="tracking-wideset text-center">Connect with me</p>
                        <div className="flex items-center justify-between my-5 w-full">
                            <div className="rounded-full p-3 cursor-pointer hover:bg-[#6f32ff] ease-in duration-100">
                                <FaLinkedin />
                            </div>
                            <div className="rounded-full  p-3 cursor-pointer hover:bg-[#6f32ff] ease-in duration-100">
                                <FaGithub />
                            </div>
                            <div className="rounded-full  p-3 cursor-pointer hover:bg-[#6f32ff] ease-in duration-100">
                                <AiOutlineMail />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar