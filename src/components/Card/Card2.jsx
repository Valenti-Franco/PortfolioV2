import React, { useState } from "react";
import style from "./index.module.css";
import { AnimatePresence, motion } from "framer-motion";

const Card2 = ({
  par,
  title,
  estado,
  desc,
  desc2,
  url,
  type,
  link,
  imageWindow,
  imagePhone,
  color1,
  color2,
  subtitle,
  logo,
  teclogies,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.a
      href={link}
      style={{ textDecoration: "none" }}
      className={isHovered ? style.index : null}
      transition={{ duration: 1.4 }}
      initial={{ opacity: 0, y: "200px" }}
      whileInView={{ opacity: 1, y: "0px" }}
    >
      <div
        className={`${style.containerCard} `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className={style.containerShow}
              initial={{ opacity: 0, y: "-200px" }}
              animate={{ opacity: 1, y: "0px" }}
              transition={{ duration: 0.4 }}
            >
              <div className={style.arrow}>
                <motion.svg
                  initial={{ opacity: 0.8, y: "30px" }}
                  animate={{ opacity: 0, y: "-30px" }}
                  transition={{ repeat: Infinity, duration: 1.4 }}
                  viewBox="0 -4.5 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#000"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>arrow_up [#340]</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      {" "}
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-140.000000, -6683.000000)"
                        fill="#fff"
                      >
                        {" "}
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          {" "}
                          <path
                            d="M84,6532.61035 L85.4053672,6534 L94.0131154,6525.73862 L94.9311945,6526.61986 L94.9261501,6526.61502 L102.573446,6533.95545 L104,6532.58614 C101.8864,6530.55736 95.9854722,6524.89321 94.0131154,6523 C92.5472155,6524.40611 93.9757869,6523.03486 84,6532.61035"
                            id="arrow_up-[#340]"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </motion.svg>
                <motion.svg
                  initial={{ opacity: 0.8, y: "-10px" }}
                  animate={{ opacity: 0, y: "-70px" }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  viewBox="0 -4.5 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#ffffff"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>arrow_up [#340]</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      {" "}
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-140.000000, -6683.000000)"
                        fill="#ffffff"
                      >
                        {" "}
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          {" "}
                          <path
                            d="M84,6532.61035 L85.4053672,6534 L94.0131154,6525.73862 L94.9311945,6526.61986 L94.9261501,6526.61502 L102.573446,6533.95545 L104,6532.58614 C101.8864,6530.55736 95.9854722,6524.89321 94.0131154,6523 C92.5472155,6524.40611 93.9757869,6523.03486 84,6532.61035"
                            id="arrow_up-[#340]"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </motion.svg>
              </div>
              <motion.p
                initial={{ y: 0 }}
                animate={{ y: -2 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 0.6,
                }}
              >
                Ver Proyecto
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isHovered && imagePhone && (
            <>
              <motion.img
                src={logo}
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                exit={{ opacity: 0 }}
                className={style.imgfondo}
                alt=""
              />
              <motion.img
                src={logo}
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                exit={{ opacity: 0 }}
                className={style.imgfondo2}
                alt=""
              />
              <motion.img
                src={imagePhone}
                loading="lazy"
                initial={{ opacity: 0, x: "200px", rotateZ: "100deg" }}
                animate={{ opacity: 1, x: "0px", rotateZ: "0deg" }}
                transition={{ duration: 0.4 }}
                exit={{ opacity: 0, x: "200px", rotateZ: "100deg" }}
                className={style.imgHover}
                alt=""
              />
            </>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isHovered && imageWindow && (
            <>
              <motion.img
                src={logo}
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                exit={{ opacity: 0 }}
                className={style.imgfondo}
                alt=""
              />
              <motion.img
                src={logo}
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                exit={{ opacity: 0 }}
                className={style.imgfondo2}
                alt=""
              />
              <motion.img
                loading="lazy"
                initial={{ opacity: 0, x: "200px" }}
                animate={{ opacity: 1, x: "-100px" }}
                transition={{ duration: 0.4 }}
                exit={{ opacity: 0, x: "200px" }}
                className={style.imgHoverWindow}
                src={imageWindow}
                alt=""
              />
            </>
          )}{" "}
        </AnimatePresence>

        <div className={style.containerImg}>
          <img loading="lazy" className={style.img} src={logo} alt="" />
        </div>
        <div className={style.containerText}>
          <h3>{title}</h3>
          <div>
            <p>{type}</p>
            <p>{subtitle}</p>
          </div>
        </div>
        <div className={style.cantainerSvg}>
          {teclogies?.map((technology, index) => (
            <div key={index} className={style.iconContainer}>
              {technology}
            </div>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default Card2;
