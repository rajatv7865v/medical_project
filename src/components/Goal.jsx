import React from "react";

const Goal = () => {
  return (
    <div>
      <div className="p-20 my-10  bg-[#FCF5FF]" id="goal">
        <div className="flex flex-col items-center  gap-4  max-w-[768px] mx-auto">
          <div className="text-xl text-[#4E4E4E] font-semibold leading-[150%] tracking-[4px]  ">
            OUR GOALS
          </div>
          <div className="text-4xl  text-black text-center font-league-spartan font-semibold leading-9">
            We Work with ambitious people to deliver exceptional services
          </div>
          <div className="text-gray-700 text-center  text-base font-normal leading-[150%]">
            <ul className="list-disc w-full p-6 ">
              <li className="text-start py-2">
               <span className="font-bold">Research and Development:</span>  Advancing scientific research
                to develop new and innovative pharmaceutical products.
              </li>
              <li  className="text-start py-2">
                <span className="font-bold">Market Expansion:</span>Expanding market reach and increasing
                the availability of their products.
              </li>
              <li  className="text-start py-2">
                <span className="font-bold">Quality and Compliance:</span> Ensuring the production and
                distribution of high-quality pharmaceuticals while complying
                with regulatory standards
              </li>
              <li  className="text-start py-2">
                <span className="font-bold">Customer Satisfaction:**</span> Focusing on meeting the needs of
                healthcare providers and patients.
              </li>
              <li  className="text-start py-2">
                <span className="font-bold">Corporate Social Responsibility:</span> Engaging in socially
                responsible practices, which may include initiatives related to
                environmental sustainability, community development, or
                philanthropy.
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="mt-16 flex justify-center items-center gap-2">
      <div className="text-[#003F7C] text-base">Explore All</div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
        >
          <mask
            id="mask0_568_2374"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="17"
            height="16"
          >
            <rect x="0.5" width="16" height="16" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_568_2374)">
            <path
              d="M11.2846 8.66674H3.83464C3.64575 8.66674 3.48741 8.60285 3.35964 8.47507C3.23186 8.3473 3.16797 8.18896 3.16797 8.00007C3.16797 7.81118 3.23186 7.65285 3.35964 7.52507C3.48741 7.39729 3.64575 7.33341 3.83464 7.33341H11.2846L8.01797 4.06674C7.88464 3.93341 7.82075 3.77785 7.8263 3.60007C7.83186 3.4223 7.9013 3.26674 8.03464 3.13341C8.16797 3.01118 8.32352 2.9473 8.5013 2.94174C8.67908 2.93618 8.83464 3.00007 8.96797 3.13341L13.368 7.53341C13.4346 7.60007 13.4819 7.6723 13.5096 7.75007C13.5374 7.82785 13.5513 7.91118 13.5513 8.00007C13.5513 8.08896 13.5374 8.1723 13.5096 8.25007C13.4819 8.32785 13.4346 8.40007 13.368 8.46674L8.96797 12.8667C8.84575 12.989 8.69297 13.0501 8.50964 13.0501C8.3263 13.0501 8.16797 12.989 8.03464 12.8667C7.9013 12.7334 7.83464 12.5751 7.83464 12.3917C7.83464 12.2084 7.9013 12.0501 8.03464 11.9167L11.2846 8.66674Z"
              fill="#003F7C"
            />
          </g>
        </svg>
      </div>
    </div> */}
      </div>
    </div>
  );
};

export default Goal;
