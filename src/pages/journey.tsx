import { NextPage } from "next";
import { Chrono } from "react-chrono";
import ReadMore from "@/components/ReadMore";
import {isMobile} from 'react-device-detect';
import { useState } from "react";
import info from "../../public/info.json"

const Journey: NextPage = function () {
    const items = info.items;
    const titles = items.map(item => { return { title: item.title }});

    const [isOpen, setIsOpen] = useState(false)
    const mode = isMobile ? "HORIZONTAL" : "VERTICAL_ALTERNATING"
    return (
        <div className="w-full h-full">
            <div className="w-[75%] justif-center m-auto">
                <div className="text-center">
                    <h2 className="max-w-[1240px] pt-36 pb-12 m-auto flex justify-center items-center">My Journey</h2>
                </div>
                
                <Chrono mode={mode} items={titles} theme={{
                        primary: '#6f32ff',
                        secondary: '#121212',
                        cardBgColor: '#1B1B1B',
                        cardForeColor: 'white',
                        titleColor: 'white',
                        titleColorActive: 'white',
                    }}>
                        {
                        items.map(item => 
                            <div className="flex flex-col max-w-5xl items-center justify-center">
                                <h3 className="text-white">{item.cardTitle}</h3>
                                <h3 className="text-gray-500">{item.cardSubtitle}</h3>
                                <p className="">
                                    <ReadMore>
                                        { item.cardDetailedText }
                                    </ReadMore>
        
                                </p>
                            </div>
                        )}
                </Chrono>
            </div>
           
           
        </div>
      )
};

const isReadMore = (item) => { 
    return item.cardDetailedText.substring(0, 300).length < item.cardDetailedText.length;
}

export default Journey;
