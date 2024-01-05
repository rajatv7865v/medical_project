import React from "react";

const Hero = () => {
  return (
    <div className=" h-screen">
      <video
        src="/video.mp4"
        autoPlay
        loop
        muted
        className=" object-cover w-full h-full t-5 "
      />

      {/* <Image src={HeroBanner}  
       className="absolute top-0 left-0 object-cover w-full h-full"
       layout="fill"
       alt="Hero Banner"/> */}
      {/* Content */}
    </div>
  );
};

export default Hero;
