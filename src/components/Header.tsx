import { useState } from "react";

type PlaylistDetail = string;

const Header = () => {
  const [Playlistdetail, setPlaylistdetail] = useState<PlaylistDetail>("PLAYING FROM PLAYLIST");

  return (
    <div className="flex justify-between px-5 items-center h-[10%] sm:h-auto sm:mb-2 sm:mt-5 pt-1">
      <div className="text-white">
        <button>
          <svg
            className="sm:w-5 sm:h-5 h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </button>
      </div>

      <div>
        <p className="text-white text-sm sm:text-[11px] font-thin">{Playlistdetail}</p>
      </div>

      <div className="text-white">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="sm:w-6 sm:h-6 h-7 w-7"
          >
            <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
