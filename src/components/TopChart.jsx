import { BsStars } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";
import { data } from "../../data.js";
import { useState } from "react";

const TopChart = () => {
  const [playing, setPlaying] = useState(-1);

  // Handle play/resume button toggle
  const handleTogglePlay = (index) => {
    setPlaying(index === playing ? -1 : index);
  };

  return (
    <>
      <div className="headercontainer">
        <p className="headings ">
          Top Chart
          <BsStars size={30} className="text-[#FD6678]" /> {/* Star icon */}
        </p>
        <p className="miniheading">
          See all
          <FaGreaterThan size={20} /> {/* Greater than icon */}
        </p>
      </div>
      <div className="mt-4 sm:grid flex flex-col sm:grid-cols-2 gap-8 ">
        {data.slice(17, 23).map((choice, index) => (
          <div
            key={choice.title}
            className="flex flex-row  items-center text-center"
          >
            <img src={choice.thumbnail} alt="/" className="movieimages" />
            <p className="flex flex-col pl-2">
              <p className="font-medium text-xl sm:text-2xl">{choice.title}</p>
              <p className="text-[#9A9A9A] text-xl">
                <p className="flexdivs sm:flex-row flex-col  space-x-2">
                  <img
                    src={choice.thumbnail}
                    alt=""
                    className="w-7 h-7 object-cover rounded-full"
                  />{" "}
                  {/* Thumbnail */}
                  Richie
                </p>
                <button
                  onClick={() => handleTogglePlay(index)}
                  className="py-1 px-4 w-fit sm:ml-4 text-[#FD6678] mt-2 bg-pink-200 rounded-xl"
                >
                  {playing === index ? "Resume" : "Play"}{" "}
                  {/* Play/Resume button */}
                </button>
              </p>
              <p className="text-sm sm:text-base mt-4">123k vote | 122 reads</p>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopChart;
