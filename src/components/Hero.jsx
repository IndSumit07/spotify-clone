import React from 'react'
import trendingAlbums from '../localdatabase/TrendingAlbums';
import RectangleCategoryCard from './RectangleCategoryCard';
import SquareAlbumCard from './SquareAlbumCard';
import recentlyPlayed from '../localdatabase/RecentlyPlayed';
const Hero = () => {
  return (
    <div className="w-full h-auto min-h-screen bg-[var(--bg-color)] py-10 px-5">
      <div className="flex justify-start items-center space-x-3">
        <div className="w-[34px] h-[34px] bg-cover bg-[url(../../public/girl-1-dp.jpg)] rounded-full border-[3px] border-black"></div>
        <button className="text-sm bg-white px-4 py-[5px] rounded-full border-black border-[3px] ">
          All
        </button>
        <button className="text-sm bg-white px-4 py-[5px] rounded-full border-black border-[3px] ">
          Music
        </button>
        <button className="text-sm bg-white px-4 py-[5px] rounded-full border-black border-[3px] ">
          Podcasts
        </button>
      </div>
      <div>
        <div className="py-5 text-2xl font-semibold">Good afternoon!</div>
        <div className="grid grid-cols-2 grid-rows-3 gap-x-2 gap-y-1 justify-center place-items-center justify-items-center">
          {trendingAlbums.map((album) => (
            <RectangleCategoryCard props={album} />
          ))}
        </div>
      </div>
      <div className='mt-2'>
        <div className="py-5 text-2xl font-semibold">Recently played</div>
        <div className="flex justify-start items-center gap-3 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
          {
            recentlyPlayed.map((song)=>(
              <SquareAlbumCard props={song}/>
            ))
          }
        </div>
      </div>
      <div className='mt-2'>
        <div className="py-5 text-2xl font-semibold">Made for You</div>
        <div className="flex justify-start items-center gap-3 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
          {
            recentlyPlayed.map((song)=>(
              <SquareAlbumCard props={song}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Hero