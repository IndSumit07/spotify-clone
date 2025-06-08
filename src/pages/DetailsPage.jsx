import React, { useEffect } from "react";
import DetailsPageRectangleCard from "../components/DetailsPageRectangleCard";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import recentlyPlayed from "../localdatabase/RecentlyPlayed";
import madeForYou from "../localdatabase/MadeForYou";
const DetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {title, coverImage, singer, color, related} = location.state || {};
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const allSongs=[...recentlyPlayed, ...madeForYou]
  const relatedsongs=allSongs.filter((song)=>{
    return related?.includes(song.id)
  })
  return (
    <div
      className={`w-full min-h-screen h-auto py-16 relative pb-40`}
      style={{ backgroundColor: color }}>
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="absolute top-8 left-4">
        <i className="bg-white px-2 rounded-full border-black border-[2px] py-2 ri-arrow-left-line "></i>
      </div>
      <div className="w-full h-[250px] overflow-hidden mt-2 flex justify-center items-center ">
        <div className="w-[250px] h-[250px] overflow-hidden rounded-lg border-black border-[2px] border-r-[4px] border-b-[4px]">
          <img src={coverImage} alt="" />
        </div>
      </div>
      <div className="py-8 px-5 relative ">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <div className="flex mt-1 justify-start gap-2 items-center">
          <div className="w-[25px] h-[25px] rounded-full overflow-hidden ">
            <img src={coverImage} alt="" />
          </div>
          <p className="text-[12px] font-semibold">{singer}</p>
        </div>
        <div className="text-[12px] mt-2 text-gray-600 font-medium">
          Album • 2017
        </div>
        <div className="flex gap-4 mt-2 justify-start items-center">
          <i className="text-black text-3xl ri-heart-line"></i>
          <i className="bg-white rounded-full px-[5px] py-[1px] font-semibold border-black border-[2px] ri-arrow-down-line"></i>
          <i className="font-bold text-2xl ri-more-line"></i>
        </div>
        <div className="absolute right-6 bottom-12 flex justify-center items-center">
          <i
            className={`border-black border-[2px] rounded-full  text-white px-4 py-3 text-xl ri-play-fill`}
            style={{ backgroundColor: "white", color: color }}></i>
        </div>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center">
        <DetailsPageRectangleCard title={title} singer={singer} />
        {relatedsongs ? <div className="py-5">
          <p className="text-start text-xl ">You might also like</p>
        </div>: ""}
        {relatedsongs.map((song) => (
          <DetailsPageRectangleCard
            title={song.title}
            singer={song.singer}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailsPage;
