import React,{useState, useEffect} from 'react';
import '../style/indexMy.css'
import About from './About';
import Project from './Project';
import Skills from './Skills';
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Home() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []);

  const[showItems, setShowItems] = useState(false);

  const imageButton = () =>
  {
    setShowItems(!showItems);
  };


  const[activeClass, setActiveClass] = useState("active");

  const createActiveClass = () => 
  {
    // let stateOf = true;
      // if(activeClass("active"))
      // {
      //   return stateOf = false;
      // }else
      // {
      //   return stateOf = true;
      // }

      // if(stateOf == false)
      // {
        setActiveClass('active_class');
        // stateOf  = true;
      //   console.log('active class');
      //   // console.log(stateOf);
      // // }else{
      //   setActiveClass('active');
      //   console.log('not active');
        // stateOf  = false;
        // console.log(stateOf);
      // }

      
  };


// bg color - 13003A

useEffect(()=> 
        {
            Aos.init({duration: 1000});
        }, []);
  
  return (
    <div className='relative flex flex-col w-full h-fit scroll-smooth focus:scroll-auto' id='Home'>
        <div className='bg-[#090314] w-full h-full fixed'>
          <div className='w-[250px] h-[220px] absolute top-[15%] left-[20%] bg-[#FF3838] blur-[120px]'></div>
          <div className='w-[210px] h-[200px] absolute top-[35%] left-[44%] bg-[#00E0FF] blur-[120px]'></div>

        </div>
        <div data-aos="fade-down" className='relative w-full flex items-center justify-center pt-[20px] z-10'>
            <img src='./assests/logologo.png' width={40} alt='Dilshan Maduranga[Logo]' className='absolute blur-[5px]'/>
            
            <img src='./assests/logologo.png' width={40} alt='Dilshan Maduranga[Logo]'/>
        </div>

        <div data-aos="fade-down" className='flex items-center justify-center w-full flex-col mt-[60px] z-10'>
            <p className='text-[#fff] text-[18px] font-Nova font-[400]'>Hello, I'm</p>
            <p className='text-[#65C9FF] text-[45px] font-Bruno'>DILSHAN</p>
            <p className='text-[#ffffff] text-[27px] tracking-[5px] font-Nova border-y-[1px] border-[#65c9ff65] py-[10px]'>web designer & developer</p>
        </div>

        <div className='flex items-center w-full justify-center z-10 h-[400px]'> 
          <div data-aos="fade-right" className='flex flex-col items-center justify-center w-1/3 pl-[180px]'>
            <p className='text-[#65c9ff65] text-[15px] font-Nova font-[400] mb-[-5px]'>click to view my skills</p>
            <img src='./assests/Arrow 3.png' alt='arrow' width={220} height={10} />
          </div>

          <div data-aos="fade-up" className='relative flex items-center justify-center w-1/3 gap-0' >
            <img src='./assests/avataaars.png' alt='avatar' width={150} id='avatar' onClick={imageButton} className='z-10'/>
            <div className='absolute top-[-12px] w-[200px] h-[200px] rounded-[50%] border-[#65C9FF] border-[2px] border-dashed animate-rotate'>

            </div>

              <div data-aos="fade-up" className='absolute top-0 left-0 flex items-center justify-center w-full h-full transition-opacity duration-300 ease-in-out'>

                  <div className={`${
                     showItems ? 'translate-y-[-125px] translate-x-[0px]': 'pointer-events-none'
                  }absolute ease-in-out duration-200 hover:scale-125 flex flex-col items-center`}>
                    <img src='./assests/html-480.png' width={40} alt='html' />
                    <p className='text-[#65c9ff81] font-Nova text-[12px]'>html</p>
                  </div>

                  <div className={`${
                     showItems ? 'translate-y-[-60px] translate-x-[-130px]  rotate-[0deg] ': 'pointer-events-none'
                  }absolute transition ease-in-out duration-300 hover:scale-125 flex flex-col items-center`}>
                      <img src='./assests/css-480.png' width={40} alt='css' />

                      <p className='text-[#65c9ff81] font-Nova text-[12px]'>css</p>
                  </div>

                  <div className={`${
                     showItems ? 'translate-y-[-60px] translate-x-[130px]  rotate-[0deg] ': 'pointer-events-none origin-[20px] absolute  left-0'
                  }absolute transition ease-in-out duration-300 hover:scale-125 flex flex-col items-center`}>
                      <img src='./assests/js-480.png' width={40} alt='java-script' />
                      <p className='text-[#65c9ff81] font-Nova text-[12px]'>javascript</p>
                  </div>

                  <div className={`${
                     showItems ? 'translate-y-[60px] translate-x-[-130px]  rotate-[0deg] ': 'pointer-events-none origin-center absolute top-0'
                  }absolute transition ease-in-out duration-300 hover:scale-125 flex flex-col items-center`}>
                      <img src='./assests/react-480.png' width={40} alt='react-js' />
                      <p className='text-[#65c9ff81] font-Nova text-[12px]'>react js</p>
                  </div>

                  <div className={`${
                     showItems ? 'translate-y-[60px] translate-x-[130px]  rotate-[0deg] ': 'pointer-events-none origin-center absolute top-0'
                  }absolute transition ease-in-out duration-300 hover:scale-125 flex flex-col items-center`}>
                      <img src='./assests/php-500.png' width={40} alt='php' />
                      <p className='text-[#65c9ff81] font-Nova text-[12px]'>php</p>
                  </div>

                  <div className={`${
                     showItems ? 'translate-y-[140px] translate-x-[-50px]  rotate-[0deg] ': 'pointer-events-none origin-center absolute top-0'
                  }absolute transition ease-in-out duration-300 hover:scale-125 flex flex-col items-center`}>
                      <img src='./assests/firebase-480.png' width={40} alt='firebase' />
                      <p className='text-[#65c9ff81] font-Nova text-[12px]'>firebase</p>
                  </div>

                  <div className={`${
                     showItems ? 'translate-y-[140px] translate-x-[60px]  rotate-[0deg] ': 'pointer-events-none origin-center absolute top-0'
                  }absolute transition ease-in-out duration-300 hover:scale-125 flex flex-col items-center`}>
                      <img src='./assests/tailwind-css-480.png' width={40} alt='tailwind-css' />
                      <p className='text-[#65c9ff81] font-Nova text-[12px]'>tailwind css</p>
                  </div>
            </div>

          </div>

          <div data-aos="fade-left" className='flex items-center justify-center w-1/3 flex-col pr-[180px]'>
            <p className='text-[#65c9ff65] text-[15px] font-Nova font-[400] mb-[-5px]'>click to view my skills</p>
            <img className='rotate-180' src='./assests/Arrow 3.png' alt='arrow' width={220} height={10} />
          </div>
      
        </div>
        
        <About/>
        <Project/>
        <Skills/>
    
    </div>
  )
}
