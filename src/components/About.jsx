import React from "react";
import CardwithImg from "./CardwithImage";

const About = () => {
  return (
    <div id="about">
      <div className=" grid lg:grid-cols-2 gap-2 ">
        <div className="lg:px-[25px] pt-[80px]">
          <div className="text-[#000] text-justify  text-[30px] font-semibold  ">
            Aid Pharma would be outlined in their mission and vision
            statements or through official communications from the company.
          </div>
          <div className=" text-base font-normal font-league-spartan  text-[#404040] mt-4 leading-[150%] text-justify px-6">
            AID Pharma was established in 2015 and operates as a wholesaler of
            pharmaceutical tablets, pharmaceutical syrup, and flowering plants,
            it suggests a diverse range of products within the pharmaceutical
            and plant-related sectors. For individuals or businesses interested
            in obtaining products from AID Pharma, it is advisable to contact
            them directly for more specific details. You may want to inquire
            about the specific range of pharmaceutical tablets and syrups they
            offer, as well as any particular varieties of flowering plants
            available for wholesale. Additionally, you might want to ask about
            their quality control measures, certifications, and any other
            relevant information that could help you assess the reliability and
            suitability of their products for your needs. AID Pharma attributes
            its rapid growth to several key factors, including quality services,
            a strong network, time-bound deliverables, and transparency with
            clients. These factors are often crucial for the success and
            reputation of any business, especially in industries like
            Pharma where reliability and trust are paramount.
          </div>
        </div>
        <div className="pt-14">
          <img src="/images/2.jpg" alt="banner" className="w-full px-10" />
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto">
        <CardwithImg
          imgurl="/images/magicShot.jpeg"
          label="EFFICACY AND SAFETY"
          text="It seems you have provided specific information about Aid Pharma, stating that the efficacy and safety of their products are proven by clinical trials conducted by top institutions in India, including in Noida, Uttar Pradesh. This is valuable information and suggests that the company has undergone rigorous testing to ensure the effectiveness and safety of its pharmaceutical products."
          className="bg-[#FFF3F6]"
          width={"w-1/3"}
        />
        <CardwithImg
          imgurl="/images/OralJelly.jpeg"
          label="Pharmaceutical Tablets"
          text="This likely refers to a range of oral medications provided in tablet form. Tablets are a common and convenient method of delivering pharmaceutical compounds, and they come in various formulations and dosage strengths to address different medical conditions."
          className="bg-[#EAFFFB]"
          width={"w-1/3"}
        />
        <CardwithImg
          imgurl="/images/Syrup.jpeg"
          label="Pharmaceutical Syrup"
          text="We are a well-established network of highly experienced Abstractors, proudly serving clients across 2025 counties in the United States. Our core mission is to cater to the needs of Title & Settlement Companies, Title Insurance agencies, Homeowners, and a wide range of valued partners, delivering comprehensive solutions with a commitment to excellence."
          className="bg-[#FCF5FF]"
          width={"w-1/3"}
        />
        <CardwithImg
          imgurl="/images/DSC_0010.1.jpg"
          label="Flowering Plants"
          text="The inclusion of flowering plants in the product range is intriguing. It suggests a possible expansion into the horticultural or botanical sector. Flowering plants could have various applications, including ornamental purposes, landscaping, or potentially even medicinal plant cultivation."
          className="bg-[#FFFAEA]"
          width={"w-1/3"}
        />
      </div>
    </div>
  );
};

export default About;
