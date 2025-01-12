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
    <div className="w-full sm:h-24 mt-1 flex justify-center items-center h-[20%]  sm:mb-0 ">
      {/* mb-9 */}
      <div className="sm:w-[260px] w-[315px] sm:h-20 h-28 flex flex-col justify-center items-center text-white space-y-0">
        <div className="sm:text-sm text-lg font-semibold">{lyrics.lines[0]}</div>
        <div className="sm:text-sm opacity-40 mt-2 ">{lyrics.lines[1]}</div>
        <div className="sm:text-sm opacity-10 mt-2 ">{lyrics.lines[2]}</div>
      </div>
    </div>
  );
};

export default Lyric;
