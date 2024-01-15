import React from "react";

const Service = () => {
  return (
    <div className="px-20  bg-[#FCF5FF]" id="products">
      <div className="flex flex-col items-center  gap-4  max-w-[768px] mx-auto">
        <div className="text-[30px] pt-2  text-[#4E4E4E] font-semibold leading-[150%] tracking-[4px]  ">
          OUR PRODUCTS
        </div>
      </div>
      <div className="mt-12">
        <div className="flex flex-wrap  ">
          {/* card-3 */}
          <div className="xl:w-1/4 lg:w-1/4 md:w-1/2 px-6 py-3  ">
            <div className=" flex flex-col items-center">
              <div className=" mb-5 flex justify-center items-center">
                <img src="/images/DSC_0019.1.jpg" alt="" />
              </div>
              <div className="text-center mb-4 text-2xl font-semibold leading-[150%]">
                Erecto 24 (2 pack)
              </div>
            </div>
          </div>
          {/* card-4 */}
          <div className="xl:w-1/4 lg:w-1/4 md:w-1/2 px-6 py-3  ">
            <div className="flex flex-col items-center">
              <div className=" mb-5 flex justify-center items-center">
                <img src="/images/DSC_0017.1.jpg" alt="" />
              </div>
              <div className="text-center mb-4 text-2xl font-semibold leading-[150%]">
                Erecto 24
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 lg:w-1/4 md:w-1/2 px-6 py-3  ">
            <div className="flex flex-col items-center">
              <div className=" mb-5 flex justify-center items-center">
                <img src="/images/magicShot.jpeg" alt="" width={140} />
              </div>
              <div className="text-center mb-4 text-2xl font-semibold leading-[150%]">
                Magic Shot
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 lg:w-1/4 md:w-1/2 px-6 py-3  ">
            <div className="flex flex-col items-center">
              <div className=" mb-5 flex justify-center items-center">
                <img src="/images/OralJelly.jpeg" alt="" width={160} />
              </div>
              <div className="text-center mb-4 text-2xl font-semibold leading-[150%]">
                Tadafil Oral jelly
              </div>
            </div>
          </div>
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
  );
};

export default Service;
