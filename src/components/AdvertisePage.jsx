import React from "react";
import { useNavigate } from "react-router-dom";

const AdvertisePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="p-4 flex justify-center">
        <img src="/images/banner.jpeg" className="h-half " alt="" />
      </div>
      <div
        id="contact"
        className="bg-[#FFF3F6] py-20 xl:px-40 lg:px-28 md:px-16"
      >
        <div className="max-w-[800px]  md:max-w-680 mx-auto  ">
          <div className="text-center text-[36px] font-semibold leading-[150%]">
            Let's Get in Touch
          </div>
          <div className="text-center text-base text-noraml text-[#4E4E4E] leading-[150%]">
            Speak to one of our experts today.
          </div>
          <div className="mt-12  grid grid-cols-2 gap-6">
            <div>
              <label
                className="text-sm px-2 text-gray-500 font-[600]"
                htmlFor=""
              >
                Full Name
              </label>
              <input
                labelText="Full Name"
                placeHolder="Enter Here"
                className="w-full p-3"
                height="h-12"
                labelTextStyle="text-[#737373] "
                name="full_name"
              />
            </div>
            <div>
              <label
                className="text-sm px-2 text-gray-500 font-[600]"
                htmlFor=""
              >
                Company Name
              </label>
              <input
                labelText="Company Name"
                placeHolder="Enter Here"
                className="w-full p-3"
                height="h-12"
                labelTextStyle="text-[#737373] "
                name="company_name"
              />
            </div>
            <div>
              <label
                className="text-sm px-2 text-gray-500 font-[600]"
                htmlFor=""
              >
                Buisnes Email
              </label>
              <input
                labelText="Business Email "
                placeHolder="Enter Here"
                className="w-full p-3"
                height="h-12"
                labelTextStyle="text-[#737373] "
                name="email"
              />
            </div>
            <div>
              <label
                className="text-sm px-2 text-gray-500 font-[600]"
                htmlFor=""
              >
                Mobile Phone
              </label>
              <input
                labelText="Mobile Phone"
                placeHolder="xxx - xxx - xxxx"
                className="w-full p-3"
                height="h-12"
                labelTextStyle="text-[#737373] "
                name="mobile"
              />
            </div>
          </div>
          <div className="mt-10">
            <label className="text-sm px-2 text-gray-500 font-[600]" htmlFor="">
              Description
            </label>
            <input
              labelText="Description"
              className="w-full p-3  "
              labelTextStyle="text-[#737373] "
              height="h-20"
              placeHolder="write Here"
              name="message"
            />
          </div>
          <div className="mt-10 mb-14 p-4 rounded-lg border border-[#BAE6FD] bg-[#F0F9FF]">
            <div className="text-base font-normal leading-[150%] text-[#075985]">
              To place an order, ask about costs, or ask a general question, you
              can email us at info@aidPharma.com We appreciate your
              reaching out to us. Give us a chance to meet your title and
              settlement needs, we ensure to take this opportunity to greater
              lengths.
            </div>
          </div>
          <div className="flex justify-center items-center gap-20">
            <button
              disabled={false}
              className={` bg-[#003F7C]  text-white px-8 py-4 w-[176px] rounded-lg `}
            >
              <span className="font-semibold text-base">Submit</span>
            </button>
            <button
              onClick={() => navigate("/")}
              className={` bg-red-400  text-white px-8 py-4 w-[176px] rounded-lg `}
            >
              <span className="font-semibold text-base">Go to Website</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisePage;
