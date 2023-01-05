import React from "react";

const Footer = () => {
  return (
    <div className={footerWrapperStyle}>
      <div>
        <div className="fixed m-10 h-64 bottom-8">
          <div>
            <a
              href="https://github.com/jrglomar"
              target="_blank"
              rel="noreferrer"
              className="filter-footer-icon"
            >
              <img
                className={imgStyle}
                src="./icons8-github.svg"
                alt="facebook"
                width="30"
              ></img>
            </a>
            <a
              href="https://www.linkedin.com/in/jrglomar/"
              target="_blank"
              rel="noreferrer"
              className="filter-footer-icon"
            >
              <img
                className={imgStyle}
                src="./icons8-linkedin.svg"
                alt="facebook"
                width="30"
              ></img>
            </a>
            <a
              href="https://facebook.com/raven016"
              target="_blank"
              rel="noreferrer"
              className="filter-footer-icon"
            >
              <img
                className={imgStyle}
                src="./icons8-facebook.svg"
                alt="facebook"
                width="30"
              ></img>
            </a>
            <a
              href="https://instagram.com/_ravenven"
              target="_blank"
              rel="noreferrer"
              className="filter-footer-icon"
            >
              <img
                className={imgStyle}
                src="./icons8-instagram.svg"
                alt="facebook"
                width="30"
              ></img>
            </a>
            <a
              href="https://twitter.com/_ravenven"
              target="_blank"
              rel="noreferrer"
              className="filter-footer-icon"
            >
              <img
                className={imgStyle}
                src="./icons8-twitter.svg"
                alt="facebook"
                width="30"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className="rotate-90">
        <div className="fixed m-10 w-64 right-0  text-sub-quaternary">
          <a className="hover:text-[20px] " href="mailto:jrglomar016@gmail.com">
            jrglomar016@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

const imgStyle = `py-2 hover:w-[64px]`;
const footerWrapperStyle = `flex justify-between fixed left-0 bottom-0 w-full py-3 font-monospace z-10`;

export default Footer;
