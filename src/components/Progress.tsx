import React, { useRef, useState } from "react";
import { TbPlayerSkipBack, TbPlayerSkipForward } from "react-icons/tb";
import { GrPause } from "react-icons/gr";
import { IoPlayOutline } from "react-icons/io5";
import { IoMdShuffle } from "react-icons/io";
import { FiRepeat } from "react-icons/fi";
import { RiDownloadLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const Progress: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((currentTime / duration) * 100);
  };

  const handleSeek = (value: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = (value / 100) * duration;
    setProgress(value);
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full max-w-md mx-auto sm:h-auto h-[19%] px-4 text-white">
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      <div className="flex items-center sm:h-auto h-[30%]  space-x-4">
        <span className="text-lg sm:text-sm text-gray-400">
          {formatTime((progress / 100) * duration)}
        </span>
        <div className="relative flex-grow h-2 bg-gray-700 rounded-full">
          <div
            className="absolute h-2 bg-blue-500 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>

          <div
            className="absolute  w-4 h-4 bg-white border-2 border-blue-400 rounded-full -top-1 left-0 transform -translate-x-1/2 cursor-pointer"
            style={{ left: `${progress}%` }}
          ></div>

          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => handleSeek(Number(e.target.value))}
            className="absolute  top-0 left-0 w-full h-2  opacity-0 cursor-pointer"
          />
        </div>
        <span className="text-lg sm:text-sm text-gray-400">
          {formatTime(duration)}
        </span>
      </div>

      <div className="flex items-center justify-between sm:h-auto h-[30%] sm:my-2">
        {/* my-5 */}
        <button className="text-gray-400 hover:text-white">
          <IoMdShuffle size={window.innerWidth >= 640 ? 25 : 30}  />
        </button>

        <button className="text-gray-400 hover:text-white">
          <TbPlayerSkipBack size={window.innerWidth >= 640 ? 30 : 35}  />
        </button>

        <button className="text-white" onClick={togglePlayPause}>
          {isPlaying ? (
              <GrPause size={window.innerWidth >= 640 ? 28 : 33}  />
          ) : (
              <IoPlayOutline size={window.innerWidth >= 640 ? 28 : 33}  />
          )}
        </button>

        <button className="text-gray-400 hover:text-white">
        <TbPlayerSkipForward 
    size={window.innerWidth >= 640 ? 30 : 35} 
  />        </button>

        <button className="text-gray-400 hover:text-white">
          <FiRepeat size={window.innerWidth >= 640 ? 25 : 30}  />
        </button>
      </div>
      <div className="flex justify-between sm:h-auto h-[30%] sm:my-0">
        {/* my-4 */}
        <button className="text-gray-400 hover:text-white">
          <RiDownloadLine size={window.innerWidth >= 640 ? 28 : 33}  />
        </button>
        <button
          className="text-gray-400 hover:text-white"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? (
            <MdOutlineFavorite color="red" size={window.innerWidth >= 640 ? 27 : 32}  />
          ) : (
            <MdOutlineFavoriteBorder size={window.innerWidth >= 640 ? 27 : 32}  />
          )}
        </button>
      </div>
    </div>
  );
};

export default Progress;
