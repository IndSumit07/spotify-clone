import React from 'react'

const DetailsPageRectangleCard = ({title, singer}) => {
  return (
    <div
     className="w-[90vw] bg-white h-[60px] border-black border-[2px] border-r-[4px] border-b-[4px] rounded-xl px-3 py-2">
      <h3 className="leading-tight">{title}</h3>
      <div className='flex justify-start items-center gap-2'>
        <i className="bg-white rounded-full px-[3px] py-[0.5px] font-semibold border-gray-600 border-[2px] text-[10px] ri-arrow-down-line text-gray-600"></i>
        <p className="text-[12px] text-gray-600">{singer}</p>
      </div>
    </div>
  );
}

export default DetailsPageRectangleCard