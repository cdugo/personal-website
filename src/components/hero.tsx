import React from 'react'
import { AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const hero = () => {
  return (
    <div className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
                <h1 className="py-4">Hi, I'm <span className="text-[#6f32ff]">Carlo</span></h1>
                <h1 className="py-2">Student Software Engineer & Entrepreneur</h1>
                <p className="py-4 text-gray-400 max-w-[70%] m-auto">I'm a third year student at Northeastern University studying Computer Science and Business with a concentration in FinTech.</p>
                <p className="py-4 text-gray-400 max-w-[70%] m-auto">I love building things with software and exploring new industries using practices I learn along the way.</p>
                <p className="py-4 pt-10 text-gray-400 max-w-[70%] m-auto">Read more <a className="text-[#6f32ff] hover:underline cursor-pointer">about me</a> and <a className="text-[#6f32ff] hover:underline cursor-pointer">my journey</a></p>

                <div className="flex items-center justify-between max-w-[330px] pt-16 m-auto py-6">
                    <div className="rounded-full p-2 cursor-pointer hover:bg-[#6f32ff] ease-in duration-100 scale-[1.5]">
                        <FaLinkedin />
                    </div>
                    <div className="rounded-full p-2 cursor-pointer hover:bg-[#6f32ff] ease-in duration-100 scale-[1.5]">
                        <FaGithub />
                    </div>
                    <div className="rounded-full p-2 cursor-pointer hover:bg-[#6f32ff] ease-in duration-100 scale-[1.5]">
                        <AiOutlineMail />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default hero