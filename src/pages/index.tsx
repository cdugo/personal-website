import { NextPage } from "next";
import Link from "@/components/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Home: NextPage = function () {

  return (
    <div className="bg-[#121212]">
        
      <div className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
                <h1 className="py-4">Hi, I'm <span className="text-[#6f32ff]">Carlo</span></h1>
                <h2 className="py-2 text-xl">Student Software Engineer & Entrepreneur</h2>
                <p className="py-4 text-gray-400 max-w-[70%] m-auto">I'm a third year student at Northeastern University studying Computer Science and Business with a concentration in FinTech.</p>
                <p className="py-4 text-gray-400 max-w-[70%] m-auto">I love building things with software and exploring new industries using practices I learn along the way.</p>
                <p className="py-4 pt-10 text-gray-400 max-w-[70%] m-auto">Read more <Link href="/about" className="text-white underline decoration-[#6f32ff] decoration-2 underline-offset-4 hover:decoration-4 cursor-pointer">about me</Link> and <Link className="text-white underline decoration-[#6f32ff] decoration-2 underline-offset-4 hover:decoration-4 cursor-pointer" href="/journey">my journey</Link> or <Link href="https://storage.googleapis.com/cdugo-website/Carlo%20D'Ugo%20Resume%202023.pdf" className="text-white underline decoration-[#6f32ff] decoration-2 underline-offset-4 hover:decoration-4 cursor-pointer">download my resume</Link></p>
                <div className="flex items-center justify-between max-w-[330px] pt-16 m-auto py-6">
                    <a href="https://linkedin.com/in/carlo-dugo" className="rounded-full p-2 cursor-pointer hover:bg-[#6f32ff] ease-in duration-100 scale-[1.5]">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/cdugo" className="rounded-full p-2 cursor-pointer hover:bg-[#6f32ff] ease-in duration-100 scale-[1.5]">
                        <FaGithub />
                    </a>
                    <a href="mailto:dugo.c@northeastern.edu" className="rounded-full p-2 cursor-pointer hover:bg-[#6f32ff] ease-in duration-100 scale-[1.5]">
                        <AiOutlineMail />
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Home;
