import { useState } from "react";

interface Song {
  name: string;
  artist: string;
}

const Card = () => {
  const [song, setSong] = useState<Song>({
    name: "So am I",
    artist: "Ava Max",
  });

  return (
    <div className="w-full sm:h-[280px]  h-[45%] flex justify-center items-center text-white sm:mb-1 ">
      <div className="w-[320px] sm:w-[270px] h-[360px] sm:h-[280px] rounded-3xl bg-gradient-to-b from-[#001625] to-[#06273a] flex flex-col items-center justify-evenly">
        <div className="w-[285px] h-[285px] sm:w-[220px] sm:h-[220px] rounded-full overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/7/7e/Ava_Max_-_So_Am_I.png"
            alt="So am I - Ava Max"
          />
        </div>
        <div>
          <h2 className="sm:text-sm text-xl font-bold">{song.name}</h2>
          <h4 className="sm:text-[12px] text-sm text-center">{song.artist}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
