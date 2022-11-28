import React, {Fragment} from 'react'
import { PlayIcon } from "@heroicons/react/24/outline";

const Clip = ({img, clip}) => {
  return (
    <Fragment>
      <div className="relative h-28 w-32 lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300">
        <img
          src={img}
          alt="img-clip"
          className="inset-0 w-full h-full object-cover absolute top-0 left right-0 rounded-xl opacity-100 z-10"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 right-0 w-full h-full object-cover  opacity-0 z-0 group-hover:z-20 group-hover:opacity-100 transition-opacity duration-500"
        >
          <source type="video/mp4" src={clip} />
        </video>
        <div className="absolute top-0 left-0 right-0 z-30 w-full h-full flex items-center justify-center transition-all duration-200 group-hover:hidden">
          <PlayIcon className='icon-style text-white w-12 h-12 lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-6 sm:h-6'/>
        </div>
      </div>
    </Fragment>
  );
}

export default Clip