import React from "react";
import { useNavigate } from "react-router-dom";
import Contact from "./Contct";

const AdvertisePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="p-4 flex justify-center">
        <img src="/images/banner.jpeg" className="h-half " alt="" />
      </div>
      <Contact/>
    </div>
  );
};

export default AdvertisePage;
