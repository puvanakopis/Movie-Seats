import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { dummyTrailers } from '../assets/assets'
import BlurCircle from './BlurCircle'
import { PlayCircleIcon } from 'lucide-react'

const TrailerSection = () => {

    const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">

            {/* ----------- Section Title ----------- */}
            <p className="text-gray font-medium text-lg max-w-[960px] mx-auto">Trailer</p>

            {/* ----------- Video Player Area ----------- */}
            <div className="relative mt-6 flex justify-center">

                {/* Background Blur Circle */}
                <BlurCircle top="-100px" right="-100px" />

                {/* Main Trailer Player */}
                <div className="w-full max-w-[960px] aspect-video rounded-xl overflow-hidden">
                    <ReactPlayer
                        src={currentTrailer.videoUrl}
                        controls
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>

            {/* ----------- Trailer Thumbnails Grid ----------- */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 max-w-[960px] mx-auto">
                {dummyTrailers.map((trailer, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentTrailer(trailer)}
                        className="relative cursor-pointer hover:-translate-y-1 transition duration-300"
                    >

                        {/* ----------- Thumbnail Image ----------- */}
                        <img
                            src={trailer.image}
                            className="rounded-lg w-full h-full object-cover brightness-75"
                            alt="Trailer Thumbnail"
                        />

                        {/* ----------- Play Icon ----------- */}
                        <PlayCircleIcon
                            strokeWidth={1.6}
                            className="absolute top-1/2 left-1/2 
                                       w-10 h-10 md:w-12 md:h-12 
                                       transform -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TrailerSection