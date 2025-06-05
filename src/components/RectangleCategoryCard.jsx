import React from 'react'

const RectangleCategoryCard = ({props}) => {
  return (
    <div className='bg-white w-[160px] h-[55px] rounded-lg border-black border-[2px] border-r-[4px] border-b-[4px] flex justify-center items-center overflow-hidden'>
        <div className='w-[57px] h-[55px] bg-cover border-r-[2px] border-black bg-yellow-300'>
            <img className='w-auto h-auto' src={props.coverImage} alt="" />
        </div>
        <div className='w-[103px] h-[55px] flex justify-start items-center text-sm px-2 font-semibold'>
            {props.title}
        </div>
    </div>
  )
}

export default RectangleCategoryCard