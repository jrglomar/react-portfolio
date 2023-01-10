import React from "react";

import {
  // FaHouseUser,
  // FaInfo,
  // FaBriefcase,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={footerWrapperStyle}>
      <div>
        <div className="fixed m-5 h-[164px] desktop:h-[364px] bottom-8">
          <div className="flex flex-col items-center">
            <a
              href="https://github.com/jrglomar"
              target="_blank"
              rel="noreferrer"
              className={iconStyle}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jrglomar/"
              target="_blank"
              rel="noreferrer"
              className={iconStyle}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/raven016"
              target="_blank"
              rel="noreferrer"
              className={iconStyle}
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/_ravenven"
              target="_blank"
              rel="noreferrer"
              className={iconStyle}
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/_ravenven"
              target="_blank"
              rel="noreferrer"
              className={iconStyle}
            >
              <FaTwitter />
            </a>
          </div>

          <span className={lineStyle}></span>
        </div>
      </div>
      <div className="fixed right-0 m-5 h-[150px] desktop:h-[350px] bottom-8">
        <div className="flex flex-col items-center">
          <a
            href="mailto:jrglomar016@gmail.com"
            className="footer-email text-sub-quaternary dark:text-sub-tertiary hover:text-[1.2rem]"
          >
            jrglomar016@gmail.com
          </a>
        </div>

        <span className={lineStyle}></span>
      </div>
    </div>
  );
};

const iconStyle = `text-sub-quaternary dark:text-sub-tertiary text-[1.8rem] py-2 hover:text-[2.2rem]`;
const footerWrapperStyle = `hidden desktop:flex justify-between fixed left-0 bottom-0 w-full py-5 font-monospace z-10`;
const lineStyle = `inline-block w-[1px] h-[100vh] align-middle desktop:border-2 border-[1px] border-gray-dark dark:border-gray-light bg-gray-dark dark:bg-gray-light m-4`;

export default Footer;
