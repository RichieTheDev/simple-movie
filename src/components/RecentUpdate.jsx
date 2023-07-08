import { BsStars } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";
import { data } from "../../data.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const RecentUpdate = () => {
  return (
    <>
      {/* RecentUpdate header */}
      <div className="headercontainer">
        <p className="headings ">
          Recent Update
          <BsStars size={30} className="text-[#FD6678]" /> {/* Star icon */}
        </p>
        <p className="miniheading">
          See all
          <FaGreaterThan size={20} /> {/* Greater than icon */}
        </p>
      </div>

      {/* RecentUpdate carousel */}
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
        {/* Render recent update slides */}
        {data.slice(24, 30).map((choice) => (
          <SplideSlide key={choice.title} className="  ">
            {/* Slide thumbnail */}
            <img src={choice.thumbnail} alt="/" className="movieimages mt-8" />
            {/* Slide title */}
            <p className="text-center">{choice.title}</p>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default RecentUpdate;
