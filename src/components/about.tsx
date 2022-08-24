import React from 'react'
import Image from 'next/future/image'

const about = () => {
  return (
    <div className="w-full h-screen">
        <div className="text-center">
            <h2 className="max-w-[1240px] pt-36 pb-12 m-auto flex justify-center items-center">Carlo D'Ugo</h2>
        </div>
        
       
        <div className="max-w-5xl w-full mx-auto p-2">
            <div>
                <Image
                    src="/../public/aboutPic.png"
                    alt="/"
                    height="394"
                    width="420"
                    className='rounded float-left p-5'
                />
                <div>
                    <p className="py-4 text-gray-400 m-auto">I just finished up an 8 month Software Engineer co-op at Moderna where I got to explore biotechnology and learn from intelligent contributors to a groundbreaking company with amazing tech.</p>
                    <p className="py-4 pb-10 text-gray-400 m-auto">Right now, I'm working on building Chronos Capital Group, a hedge fund with an event-based trading strategy. I've wanted to get my feet wet in the FinTech world for a while, so this has been an amazing opportunity learning the intersection of finance and technology.</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default about