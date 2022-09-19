import { NextPage } from "next";
import Image from 'next/future/image'
import Link from "@/components/link";

const About: NextPage = function () {

    return (
  
        <div className="w-full h-screen">
            <div className="text-center">
                <h2 className="max-w-[1240px] pt-36 pb-12 m-auto flex justify-center items-center">About Me</h2>
            </div>
            
           
            <div className="max-w-5xl w-full mx-auto p-2">
                <div>
                    <Image
                        src="https://storage.googleapis.com/cdugo-website/aboutPic.png"
                        alt="/"
                        height="394"
                        width="420"
                        className="rounded float-left pr-5"
                        quality="100"
                    />
                    <div>
                        <p className="pb-4 text-gray-400 m-auto">My name is Carlo D'Ugo, I'm a 3rd year CS and Business major (Fintech business concentration) at Northeastern University. I'm from Staten Island, New York, and currently live in Boston for school.</p>
                        <p className="py-4 text-gray-400 m-auto">Growing up, I was very involved in reselling exclusive sneakers for a profit. Exclusive sneakers often sold out online almost instantaneously, resulting in people creating software that automatically purchased these shoes upon release. It was always my dream to create a "sneaker bot", but I didn't have the required fundamentals of software development at the time do so. Because of this, I took a computer science class in my junior year of high school which actually introduced web development. At first I didn't recognize the importance or power of what I was learning, and it wasn't until the beginning of COVID lockdown when I began seriously pursuing web/software development. Check out my <Link className="text-white underline decoration-[#6f32ff] decoration-2 underline-offset-4 hover:decoration-4 cursor-pointer" href="/journey">journey</Link> for a more in depth timeline!</p>
                        <p className="pt-6 pb-4 text-gray-400 m-auto">I fell in love with starting my own projects and building things. I can proudly say I have an obsession with turning ideas into code with a user-first mentality. This led me to immerse myself in the startup world and I attempted to build my own startups!</p>
                        <p className="py-4 text-gray-400 m-auto">I just finished up an 8 month Software Engineer co-op at Moderna where I got to explore biotechnology and learn from intelligent contributors to a groundbreaking company with amazing tech.</p>
                        <p className="py-4 pb-10 text-gray-400 m-auto">Right now, I'm working on building Chronos Capital Group, a quantitative hedge fund with an event-based trading strategy. I've wanted to get my feet wet in the FinTech world for a while, so this has been an amazing opportunity to learn about the intersection of finance and technology.</p>
                    </div>
                    
                </div>
            </div>
        </div>
      )
};

export default About;
