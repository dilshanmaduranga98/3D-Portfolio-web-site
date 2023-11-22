import React, { useEffect, useState } from 'react'
import TagCloud from 'TagCloud'
import '../CSS/index.css'


const ThreeDText = () => {

    const [hoveredText, setHoveredText] = useState(null);


    useEffect(() => {
        return () => {
            const container = ".tagcloud";
            const text = [
                "PHP",
                "Tailwind CSS",
                "Java",
                "Git",
                "React Js",
            ];

            const option = {
                radius: 300,
                maxSpeed: "normal",
                initSpeed: "normal",
                keep: true,
            };

            TagCloud(container, text, option);
        };
    }, []);

    return (
        <>
            <div className='text-sheper'>
                <span className='tagcloud font-Orbitron text-[18px] font-bold'></span>
            </div>
        </>
    );
};

export default ThreeDText;
