import React from "react";
import Clips from "./utils/Clips";
import SocialLinks from "./utils/SocialLinks";

const Hero = ({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  return (
    <>
      <div className="  relative h-auto flex flex-col w-auto ">
        <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10"></div>
        <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container   ">
          <div className=" grid items-center justify-items-center mt-28 md:mt-24  ">
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">{title}</h1>
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">{subtitle}</h1>
            <button type="
            button"
            className="button-theme bg-slate-100 shadow-slate-200 rounded-xl my-5">{btntext}</button>
            <div className=" grid items-center gap-5 md:gap-3 absolute  top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto ">  { videos?.map ((val,i) => (
                <Clips 
                key={i}
                imgsrc={val.imgsrc}
                clip={val.clip} /> 
            ))}</div>
                <div className="grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3 ">
                    {sociallinks?.map((val,i) => (
                        <SocialLinks
                        key={i}
                        icon={val.icon} />
                    ))}</div> 
             </div>
          <div className=" flex items-center">
            <img  className='w-auto h-[45vh] lg:h-[30vh] p-3 md:p-2 md:h-[30vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[20deg] hover:rotate-[0deg] duration:300 object-fill 'src={img} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
