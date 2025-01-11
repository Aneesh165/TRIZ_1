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
    <div className="w-full h-[280px] flex justify-center items-center text-white mt-2">
      <div className="w-[270px] h-[280px] rounded-3xl bg-gradient-to-b from-[#001625] to-[#06273a] flex flex-col items-center justify-evenly">
        <div className="w-[220px] h-[220px] rounded-full overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/7/7e/Ava_Max_-_So_Am_I.png"
            alt="So am I - Ava Max"
          />
        </div>
        <div>
          <h2 className="text-sm font-bold">{song.name}</h2>
          <h4 className="text-[12px]">{song.artist}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
