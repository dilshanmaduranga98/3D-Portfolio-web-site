import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/sliderProj.css";

export default function ProjectSlider() {
  useEffect(() => {
    const handleNextClick = () => {
      let list = document.querySelectorAll(".item");
      document.getElementById("slide").appendChild(list[0]);
    };

    const handlePrevClick = () => {
      let list = document.querySelectorAll(".item");
      document.getElementById("slide").prepend(list[list.length - 1]);
    };
    document.getElementById("next").onclick = handleNextClick;
    document.getElementById("prev").onclick = handlePrevClick;
    return () => {
      // Clean up event listeners when component unmounts
      document
        .getElementById("next")
        .removeEventListener("click", handleNextClick);
      document
        .getElementById("prev")
        .removeEventListener("click", handlePrevClick);
    };
  }, []);

  return (
    <div className="container">
      <div className="slider" id="slide">
        <div
          className="item"
          style={{ backgroundImage: "url('./Project/mobi.jpg')" }}
        >
          <div className="content">
            <div className="title">Mobile Vison</div>
            <div className="Description">
              Mobile shop web site.developed using HTML,CSS and JavaScript.
            </div>
            <Link to="https://github.com/dilshanmaduranga98/Mobile-vision-web-front-end" className='flex flex-row items-end justify-start gap-[10px]'>
              <p className="flex flex-row items-center justify-start w-auto">See More</p>
              <img src="./icons8-link-240.png" alt="" width={20} />
            </Link>
          </div>
        </div>

        <div
          className="item"
          style={{ backgroundImage: "url('./Project/shutter.jpg')" }}
        >
          <div className="content">
            <div className="title">Shutter</div>
            <div className="Description">
              Social media clone web site.developed using HTML,CSS and
              JavaScript.{" "}
            </div>
            <Link to="https://github.com/dilshanmaduranga98/Mobile-vision-web-front-end" className='flex flex-row items-end justify-start gap-[10px]'>
              <p>See More</p>
              <img src="./icons8-link-240.png" alt="" width={20} />
            </Link>
          </div>
        </div>

        <div
          className="item"
          style={{ backgroundImage: "url('./Project/slGro.jpg')" }}
        >
          <div className="content">
            <div className="title">Sl Grocery</div>
            <div className="Description">
              E-Commerce web site.developed using HTML, CSS and JavaScript.
            </div>
            <Link to="https://github.com/dilshanmaduranga98/E-commerce-web-site" className='flex flex-row items-end justify-start gap-[10px]'>
              <p>See More</p>
              <img src="./icons8-link-240.png" alt="" width={20} />
            </Link>
          </div>
        </div>

        <div
          className="item"
          style={{ backgroundImage: "url('./Project/wint.jpg')" }}
        >
          <div className="content">
            <div className="title">WintanCare</div>
            <div className="Description">
              Appointment web application.developed using HTML, CSS, JavaScript.
            </div>
            <Link to="https://github.com/dilshanmaduranga98/Mobile-vision-web-front-end" className='flex flex-row items-end justify-start gap-[10px]'>
              <p>See More</p>
              <img src="./icons8-link-240.png" alt="" width={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="button_div">
        <button id="prev">
          <img src="./Project/prew.png" width={25} />
        </button>

        <button id="next">
          <img src="./Project/next.png" width={25} />
        </button>
      </div>
    </div>
  );
}
