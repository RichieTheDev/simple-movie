import {
  SlSocialGoogle,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Contact Us section */}
      <div className="text-center">
        <p className="text-2xl sm:text-3xl">Contact Us</p>
      </div>

      {/* Social media icons */}
      <p className="flexdivs text-[#B3B3B3] pb-4 mt-4 space-x-4 ">
        <SlSocialGoogle size={30} /> {/* Google icon */}
        <SlSocialInstagram size={30} /> {/* Instagram icon */}
        <SlSocialLinkedin size={30} /> {/* LinkedIn icon */}
        <SlSocialTwitter size={30} /> {/* Twitter icon */}
      </p>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 bg-[#FF8A8A] text-white p-2 rounded-full shadow-md"
      >
        <FaArrowAltCircleUp size={40} /> {/* Up arrow icon */}
      </button>
    </>
  );
};

export default Footer;
