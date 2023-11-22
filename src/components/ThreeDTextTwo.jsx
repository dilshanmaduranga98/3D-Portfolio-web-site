import React, { useEffect, useState } from 'react'
import TagCloud from 'TagCloud'
import '../CSS/index.css'


const ThreeDTextTwo = () => {

    const [hoveredText, setHoveredText] = useState(null);


    useEffect(() => {
        return () => {
            const containerT = ".tagcloudT";
            const textT = [
                "HTML",
                "CSS",
                "JavaScript",
                "GitHub",
                "Three Js",
            ];

            const optionT = {
                radius: 400,
                maxSpeed: "normal",
                initSpeed: "normal",
                keep: true,
            };

            TagCloud(containerT, textT, optionT);
        };
    }, []);


    return (
        <>
            <div className='text-sheperT'>
                <span className='tagcloudT font-Orbitron text-[18px] font-bold'></span>
            </div>
        </>
    );
};

export default ThreeDTextTwo;
