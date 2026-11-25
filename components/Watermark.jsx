import PropTypes from "prop-types";
import Parallax from "./Parallax";

const Watermark = ({ text, speed = 0.12, className = "" }) => (
  <Parallax
    speed={speed}
    className={`pointer-events-none select-none absolute z-0 ${className}`}
    aria-hidden="true"
  >
    <span className="block font-extenda40 leading-none tracking-tighter text-[6rem] sm:text-[9rem] md:text-[12rem] lg:text-[15rem] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent opacity-[0.05] dark:opacity-[0.06] whitespace-nowrap">
      {text}
    </span>
  </Parallax>
);

Watermark.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
  className: PropTypes.string,
};

export default Watermark;
