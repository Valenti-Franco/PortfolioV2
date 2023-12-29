import style from "./index.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Card = ({
  par,
  title,
  estado,
  desc,
  desc2,
  url,
  imageWindow,
  imagePhone,
  color1,
  color2,
  logo,
}) => {
  // console.log(par)
  // console.log(imageWindow)
  const [hovered, setHovered] = useState(false);
  const [moreinfo, setMoreinfo] = useState(false);

  const handlerMoreInfo = () => {
    setMoreinfo(!moreinfo);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <main className={par === false ? style.main : style.main1}>
      {par === false ? (
        <>
          <div
            className={style.images1}
            style={{ backgroundImage: imageWindow }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence>
              {hovered && (
                <>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    src={imagePhone}
                    alt=""
                  />

                  {url !== undefined ? (
                    <motion.svg
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={style.svg}
                      width="100px"
                      height="100px"
                      viewBox="-6.24 -6.24 36.48 36.48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      transform="rotate(270)"
                      onClick={() => (window.location.href = url)}
                    >
                      <g
                        id="SVGRepo_bgCarrier"
                        strokeWidth="0"
                        transform="translate(1.8000000000000007,1.8000000000000007), scale(0.85)"
                      >
                        <rect
                          x="-6.24"
                          y="-6.24"
                          width="36.48"
                          height="36.48"
                          rx="18.24"
                          strokeWidth="0"
                        ></rect>
                      </g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="#f0ff1a"
                        strokeWidth="0.096"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
                          stroke="#ffffff"
                          strokeWidth="1.7759999999999998"
                          strokeLinecap="round"
                        ></path>{" "}
                        <path
                          d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                          stroke="#ffffff"
                          strokeWidth="1.7759999999999998"
                          strokeLinecap="round"
                        ></path>{" "}
                      </g>
                    </motion.svg>
                  ) : null}
                </>
              )}
            </AnimatePresence>
          </div>
          <div
            style={{ borderRadius: "10px 0px 0px 10px" }}
            className={style.description}
          >
            <div style={{ background: color1 }} className={style.title}>
              <img src={logo} alt="" />
            </div>
            <div style={{ background: color2 }} className={style.containerDesc}>
              <h1 style={{ marginTop: "20px" }} className={style.title}>
                {title}
              </h1>
              <p className={style.desc}>{desc}</p>
              {!moreinfo ? (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  style={{ background: color1 }}
                  className={style.btn}
                  onClick={handlerMoreInfo}
                >
                  Monstrar Mas
                </motion.button>
              ) : (
                <>
                  <p className={style.desc}>{desc2}</p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    style={{ background: color1 }}
                    className={style.btn}
                    onClick={handlerMoreInfo}
                  >
                    Monstrar Menos
                  </motion.button>
                </>
              )}
            </div>

            <p style={{ background: color1, margin: 0 }} className={style.desc}>
              Estado: {estado}
            </p>
          </div>
        </>
      ) : (
        <>
          <div
            style={{ borderRadius: "10px 0px 0px 10px" }}
            className={style.description}
          >
            <div style={{ background: color1 }} className={style.title}>
              <img src={logo} alt="" />
            </div>
            <div style={{ background: color2 }} className={style.containerDesc}>
              <h1 style={{ marginTop: "20px" }} className={style.title}>
                {title}
              </h1>
              <p className={style.desc}>{desc}</p>
              {!moreinfo ? (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  style={{ background: color1 }}
                  className={style.btn}
                  onClick={handlerMoreInfo}
                >
                  Monstrar Mas
                </motion.button>
              ) : (
                <>
                  <p className={style.desc}>{desc2}</p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    style={{ background: color1 }}
                    className={style.btn}
                    onClick={handlerMoreInfo}
                  >
                    Monstrar Menos
                  </motion.button>
                </>
              )}
            </div>

            <p style={{ background: color1, margin: 0 }} className={style.desc}>
              Estado: {estado}
            </p>
          </div>

          <div
            className={style.images}
            style={{ backgroundImage: imageWindow }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence>
              {hovered && (
                <>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    src={imagePhone}
                    alt=""
                  />
                  {url !== undefined ? (
                    <motion.svg
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={style.svg}
                      width="100px"
                      height="100px"
                      viewBox="-6.24 -6.24 36.48 36.48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      transform="rotate(270)"
                      onClick={() => (window.location.href = url)}
                    >
                      <g
                        id="SVGRepo_bgCarrier"
                        transform="translate(1.8000000000000007,1.8000000000000007), scale(0.85)"
                      >
                        <rect
                          x="-6.24"
                          y="-6.24"
                          width="36.48"
                          height="36.48"
                          rx="18.24"
                        ></rect>
                      </g>
                      <g id="SVGRepo_tracerCarrier" stroke="#f0ff1a"></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
                          stroke="#ffffff"
                        ></path>{" "}
                        <path
                          d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                          stroke="#ffffff"
                        ></path>{" "}
                      </g>
                    </motion.svg>
                  ) : null}
                </>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </main>
  );
};

export default Card;
