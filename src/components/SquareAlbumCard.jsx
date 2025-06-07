import React from "react";
import { Link } from "react-router-dom";

const SquareAlbumCard = ({ props }) => {
  return (
    <Link
      to={`/album/${props.id}`}
      state={{
        title: props.title,
        coverImage: props.coverImage,
        singer: props.singer,
        color: props.glowColor,
      }}
      className="h-[190px] "
     >
      <div className="bg-white w-[150px] h-[150px] rounded-lg border-black border-[2px] border-r-[4px] border-b-[4px] flex-shrink-0 overflow-hidden flex justify-center items-center">
        <img className="bg-cover" src={props.coverImage} alt="" />
      </div>
      <div className="text-[12px] mt-1 ml-1 font-semibold ">{props.title}</div>
    </Link>
  );
};

export default SquareAlbumCard;
