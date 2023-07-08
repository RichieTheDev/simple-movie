import { BsStars } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";
import { data } from "../../data.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Categories = () => {
  return (
    <>
      {/* Categories header */}
      <div className="flex pt-4 sm:pt-10 justify-between items-center">
        <p className="headings">
          Categories
          <BsStars size={30} className="text-[#FD6678]" />
        </p>
        <p className="miniheading">
          See all <FaGreaterThan size={20} />
        </p>
      </div>

      {/* Categories carousel */}
      <Splide
        options={{
          perPage: 5,
          pagination: false,
          rewind: true,
          autoplay: true,
          arrows: true,
          type: "loop",
          gap: "1rem",
          drag: "free",
          breakpoints: {
            768: {
              perPage: 4,
              arrows: false,
            },
            640: {
              perPage: 2,
              arrows: false,
            },
          },
        }}
      >
        {/* Render category slides */}
        {data.slice(8, 16).map((choice) => (
          <SplideSlide key={choice.title} className="  ">
            {/* Category thumbnail */}
            <img src={choice.thumbnail} alt="/" className=" mt-8 movieimages" />
            {/* Category genre */}
            <p className=" text-center text-sm sm:text-base">{choice.genres}</p>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default Categories;
