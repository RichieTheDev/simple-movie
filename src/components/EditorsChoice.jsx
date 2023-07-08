import { BsStars } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";
import { data } from "../../data.js";

const EditorsChoice = () => {
  return (
    <>
      {/* EditorsChoice header */}
      <div className="headercontainer">
        <p className="headings ">
          Editors Choice
          <BsStars size={30} className="text-[#FD6678]" />
        </p>
        <p className="miniheading">
          See all
          <FaGreaterThan size={20} />
        </p>
      </div>

      {/* EditorsChoice grid */}
      <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 grid-row-2 gap-4 sm:grid-flow-row mx-auto sm:text-lg text-center">
        {/* Render EditorsChoice items */}
        {data.slice(0, 6).map((choice) => (
          <div key={choice.title}>
            {/* Thumbnail */}
            <img
              src={choice.thumbnail}
              alt="/"
              className="movieimages flexdivs"
            />
            {/* Title */}
            <p>{choice.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default EditorsChoice;
