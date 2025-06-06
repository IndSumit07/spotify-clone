import React from 'react'
import { Link } from 'react-router-dom';

const SquareAlbumCard = ({props}) => {
  return (
    <Link to="/details">
      <div className="bg-white w-[150px] h-[150px] rounded-lg border-black border-[2px] border-r-[4px] border-b-[4px] flex-shrink-0 overflow-hidden flex justify-center items-center">
        <img className="bg-cover" src={props.coverImage} alt="" />
      </div>
      <div className='text-sm mt-1 ml-1 font-semibold'>
        {props.title}
      </div>
    </Link>
  );
}

export default SquareAlbumCard