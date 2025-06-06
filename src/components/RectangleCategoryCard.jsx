import React from 'react'
import { Link } from 'react-router-dom'
const RectangleCategoryCard = ({props}) => {
  return (
    <Link to={`/album/${props.id}`} state={{title:props.title, coverImage:props.coverImage, singer:props.singer}} className='bg-white w-[160px] h-[55px] rounded-lg border-black border-[2px] border-r-[4px] border-b-[4px] flex justify-center items-center overflow-hidden'>
        <div className='w-[57px] h-[55px] bg-cover border-r-[2px] border-black bg-yellow-300'>
            <img className='w-auto h-auto' src={props.coverImage} alt="" />
        </div>
        <div className='w-[103px] h-[55px] flex justify-start items-center text-sm px-2 font-semibold'>
            {props.title}
        </div>
    </Link>
  )
}

export default RectangleCategoryCard