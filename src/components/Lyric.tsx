import { useState } from "react";

interface Lyrics {
  lines: string[];
}

const Lyric = () => {
  const [lyrics, setLyrics] = useState<Lyrics>({
    lines: [
      "I can see ya, I know what you're feelin'",
      "So let me tell you 'bout my little secret",
      "I'm a little crazy underneath this",
    ],
  });

  return (
    <div className="w-full h-24 mt-1 flex justify-center items-center">
      <div className="w-[260px] h-20 flex flex-col justify-center items-center text-white space-y-0">
        <div className="text-sm font-semibold">{lyrics.lines[0]}</div>
        <div className="text-sm opacity-40 mt-2 ">{lyrics.lines[1]}</div>
        <div className="text-sm opacity-10 mt-2 ">{lyrics.lines[2]}</div>
      </div>
    </div>
  );
};

export default Lyric;
