import { NextPage } from "next";
import Link from "@/components/link";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Home: NextPage = function () {

  return (
    <div className="bg-[#121212]">
        <Head>
            <title>Carlo D'Ugo</title>
        </Head>
      {/* <section className="flex w-full grow flex-col justify-center py-10">
        <p className="text-3xl font-semibold">Home</p>
        <Link className="text-blue-500 hover:text-blue-700" href="/about">Go to about</Link>
      </section> */}
      <div className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
                <h1 className="py-4">Hi, I'm <span className="text-[#6f32ff]">Carlo</span></h1>
                <h2 className="py-2 text-xl">Student Software Engineer & Entrepreneur</h2>
                <p className="py-4 text-gray-400 max-w-[70%] m-auto">I'm a third year student at Northeastern University studying Computer Science and Business with a concentration in FinTech.</p>
                <p className="py-4 text-gray-400 max-w-[70%] m-auto">I love building things with software and exploring new industries using practices I learn along the way.</p>
                <p className="py-4 pt-10 text-gray-400 max-w-[70%] m-auto">Read more <Link href="/about" className="text-[#6f32ff] hover:underline cursor-pointer">about me</Link> and <Link className="text-[#6f32ff] hover:underline cursor-pointer" href="/journey">my journey</Link></p>

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
    </div>
  );
};

export default Home;
