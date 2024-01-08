import React from 'react'


const CardWithImg = ({ label, text, imgurl, className }) => {
  return (
    <> 
  <div className={`container mx-auto my-12 flex ${className}`}>
    <div className=" w-3/4 my-6 ml-6 mr-[112px] ">
      <div className=' align-middle'>
        <h1 className='text-2xl text-[#262626] font-bold mb-2 leading-[150%] '>{label}</h1>
        <p className='text-[#262626] text-xl font-normal leading-[150%] text-justify'>{text}</p>
      </div>
    </div>
    <div className="mb-0 pb-0 w-1/3">
      <img className="object-contain object-center rounded" alt="card-img" src={imgurl}  />
    </div>
  </div>
</> 
  )
}

export default CardWithImg
