import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const sendData = (e) => {
    e.preventDefault();
    const postData = {
      reciepents: email,
      subject: name,
      msg: msg,
    };

    // Making the API call using Axios
    axios
      .post("https://mail-t85v.onrender.com/mail", postData)
      .then((response) => {
        // Handle successful response
        console.log("response", response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error.message);
      });
  };

  return (
    <div id="contact" className="bg-[#FFF3F6] py-20 xl:px-40 lg:px-28 md:px-16">
      <div className="max-w-[800px]  md:max-w-680 mx-auto  ">
        <div className="text-center text-[36px] font-semibold leading-[150%]">
          Let's Get in Touch
        </div>
        <div className="text-center text-base text-noraml text-[#4E4E4E] leading-[150%]">
          Speak to one of our experts today.
        </div>
        <div className="mt-12  grid grid-cols-2 gap-6">
          <div>
            <label className="text-sm px-2 text-gray-500 font-[600]" htmlFor="">
              Full Name
            </label>
            <input
              labelText="Full Name"
              placeHolder="Enter Here"
              className="w-full p-3"
              height="h-12"
              labelTextStyle="text-[#737373] "
              name="full_name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm px-2 text-gray-500 font-[600]" htmlFor="">
              {" "}
              Email
            </label>
            <input
              labelText="Email "
              placeHolder="Enter Here"
              className="w-full p-3"
              height="h-12"
              labelTextStyle="text-[#737373] "
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm px-2 text-gray-500 font-[600]" htmlFor="">
              Mobile Phone
            </label>
            <input
              labelText="Mobile Phone"
              placeHolder="xxx - xxx - xxxx"
              className="w-full p-3"
              height="h-12"
              labelTextStyle="text-[#737373] "
              name="mobile"
              onChange={(e) => setPhone(e.target.value)}
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
            onChange={(e) => setMsg(e.target.value)}
          />
        </div>
        <div className="mt-10 mb-14 p-4 rounded-lg border border-[#BAE6FD] bg-[#F0F9FF]">
          <div className="text-base font-normal leading-[150%] text-[#075985]">
            To place an order, ask about costs, or ask a general question, you
            can email us at info@aidPharma.com We appreciate your reaching out
            to us. Give us a chance to meet your title and settlement needs, we
            ensure to take this opportunity to greater lengths.
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            disabled={false}
            className={` bg-[#003F7C]  text-white px-8 py-4 w-[176px] rounded-lg `}
          >
            <span
              className="font-semibold text-base"
              onClick={(e) => sendData(e)}
            >
              Submit
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
