import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-teal-400">
          Reach out if you have any questions!
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Click the buttons below for the contact email and works cited.
        </p>
        <a href="mailto:920111@lcps.org">
          <MagicButton
            title="Contact Us"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        <a href="https://docs.google.com/document/d/13w7C0tB0F0WK-g2MXvkG4Gv9rexU9vr5KS3BYCH8ZCQ/edit?usp=sharing" target="_blank">
          <MagicButton
            title="Works Cited"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Mihir Nimkar
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
