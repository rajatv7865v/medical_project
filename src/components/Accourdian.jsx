import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Dropup from "../assets/Icon/dropup.svg"
import Dropdown from "../assets/Icon/dropdown.svg"
function Accourdian() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const [seven, setSeven] = useState(false);
  const [eight, setEight] = useState(false);
  const [nine, setNine] = useState(false);
  const [ten, setTen] = useState(false);
  const [eleven, setEleven] = useState(false);

  return (
    <div className="flex flex-col gap-10 text-csBlue text-xs md:text-base lg:text-xs 2xl:text-base scroll-smooth">
      <div className={`${one ? "" : ""}  rounded-lg `}>
        <div className="flex justify-between px-5 py-3">
          <span className="font-bold  text-2xl text-[#262626] leading-[150%]">
            <span className="text-[#D4D4D4] text-[32px] font-semibold mr-2">
              01
            </span>
            Are you Insured?
          </span>
          <span className="cursor-pointer" onClick={() => setOne(!one)}>
            {one ? <img src={Dropup} alt="Your Alt Text" width={35} height={35} /> :
            <img src={Dropdown} alt="Your Alt Text" width={35} height={35} />}
          </span>
        </div>
        {/* {one && <div className="border border-csSkyBlue "></div>} */}
        {one && <div className="px-10 py-3 text-xl">YES, we carry E&O.</div>}
      </div>
      <div className={`${two ? "" : ""}  rounded-lg `}>
        <div className="flex justify-between px-5 py-3">
          <span className="font-bold  text-2xl text-[#262626] leading-[150%]">
            <span className="text-[#D4D4D4] text-[32px] font-semibold mr-2">
              02
            </span>
            Number of States we cover?
          </span>
          <span className="cursor-pointer" onClick={() => setTwo(!two)}>
            {two ? <img src={Dropup} alt="Your Alt Text" width={35} height={35} /> :
            <img src={Dropdown} alt="Your Alt Text" width={35} height={35} />}
          </span>
        </div>
        {/* {two && <div className="border border-csSkyBlue "></div>} */}
        {two && <div className="px-10 py-3 text-xl">We cover 38 States.</div>}
      </div>
      <div className={`${three ? "" : ""}  rounded-lg `}>
        <div className="flex justify-between px-5 py-3">
          <span className="font-bold  text-2xl text-[#262626] leading-[150%]">
            <span className="text-[#D4D4D4] text-[32px] font-semibold mr-2">
              03
            </span>
            What sets us apart?
          </span>
          <span className="cursor-pointer" onClick={() => setThree(!three)}>
            {three ? <img src={Dropup} alt="Your Alt Text" width={35} height={35} /> :
            <img src={Dropdown} alt="Your Alt Text" width={35} height={35} />}
          </span>
        </div>
        {/* {three && <div className="border border-csSkyBlue "></div>} */}
        {three && (
          <div className="px-10 py-3 text-xl">
            Revolutionizing Title Searches Nationwide with Our Unparalleled
            Network of On-Site Abstractors!
          </div>
        )}
      </div>
      <div className={`${four ? "" : ""}  rounded-lg `}>
        <div className="flex justify-between px-5 py-3">
          <span className="font-bold  text-2xl text-[#262626] leading-[150%]">
            <span className="text-[#D4D4D4] text-[32px] font-semibold mr-2">
              04
            </span>
            What is your response time for service requests?
          </span>
          <span className="cursor-pointer" onClick={() => setFour(!four)}>
            {four ? <img src={Dropup} alt="Your Alt Text" width={35} height={35} /> :
            <img src={Dropdown} alt="Your Alt Text" width={35} height={35} />}
          </span>
        </div>
        {/* {four && <div className="border border-csSkyBlue "></div>} */}
        {four && (
          <div className="px-10 py-3 text-xl">Our average response time is 2 hours.</div>
        )}
      </div>
   
     
    </div>
  );
}

export default Accourdian;
