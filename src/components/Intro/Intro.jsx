import { useState } from "react";
import style from "./index.module.css";
import ButtonMain from "../buttonMain/ButtonMain";

import CV from "../../../public/CV_FrancoValenti.pdf";
import { AnimatePresence, motion } from "framer-motion";
import MainSectionPresentation from "../NameTex/NameText";
// import myImg from "../../../public/YO-removebg.png";
import myImg from "../../assets/img/fotoPerfil.webp";
const Intro = () => {
  const [isHover, setisHover] = useState(false);
  const HoverName = () => {
    setisHover(!isHover);
  };
  return (
    <div className={style.container}>
      <div className={style.conatainer2}>
        <h3 className={style.h3Style}>HOLA, MI NOMBRE ES</h3>
        <div className={style.containerH1}>
          <div>
            <div style={{ position: "relative" }}>
              <AnimatePresence>
                <MainSectionPresentation />
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className={style.continerButtons}>
          <a
            style={{ textDecoration: "none" }}
            href="https://github.com/Valenti-Franco"
          >
            <ButtonMain
              Text={"GitHub"}
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="36"
                  viewBox="0 0 41 36"
                  fill="none"
                >
                  <path
                    d="M20.0516 3.58077C11.1929 3.58077 4.01038 9.99393 4.01038 17.9038C4.01038 24.6154 9.18636 30.2312 16.1643 31.7853C16.0895 31.5919 16.0413 31.3675 16.0413 31.0894V28.6414C15.3903 28.6414 14.2995 28.6414 14.0255 28.6414C12.928 28.6414 11.9521 28.22 11.4789 27.437C10.9536 26.5669 10.8627 25.2361 9.56066 24.422C9.17433 24.1511 9.46842 23.842 9.91356 23.8837C10.7357 24.0914 11.4174 24.5951 12.0591 25.3423C12.6981 26.0907 12.9988 26.2602 14.1926 26.2602C14.7714 26.2602 15.6376 26.2303 16.4531 26.1157C16.8915 25.1215 17.6495 24.206 18.5758 23.7739C13.2341 23.2834 10.6849 20.9105 10.6849 17.689C10.6849 16.302 11.3466 14.9605 12.4708 13.8301C12.1019 12.7081 11.638 10.42 12.6125 9.54872C15.016 9.54872 16.4691 10.9404 16.818 11.3164C18.0157 10.95 19.3311 10.7423 20.7133 10.7423C22.0982 10.7423 23.419 10.95 24.6194 11.3188C24.9643 10.9452 26.4187 9.54872 28.8276 9.54872C29.8061 10.4212 29.3369 12.7189 28.9639 13.8385C30.0814 14.9664 30.7391 16.3044 30.7391 17.689C30.7391 20.9081 28.1939 23.2798 22.8602 23.7727C24.328 24.4567 25.3987 26.3783 25.3987 27.8262V31.0894C25.3987 31.2136 25.368 31.3031 25.3519 31.4093C31.6027 29.453 36.0929 24.1535 36.0929 17.9038C36.0929 9.99393 28.9104 3.58077 20.0516 3.58077Z"
                    fill="white"
                  />
                </svg>
              }
            />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.linkedin.com/in/franco-valenti-57b643246/"
          >
            <ButtonMain
              Text={"Linkedin"}
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="30"
                  viewBox="0 0 36 30"
                  fill="none"
                >
                  <path
                    d="M18 0C8.0595 0 0 6.71625 0 15C0 23.2838 8.0595 30 18 30C27.9405 30 36 23.2838 36 15C36 6.71625 27.9405 0 18 0ZM11.244 6.75375C12.507 6.75375 13.3485 7.455 13.3485 8.39C13.3485 9.325 12.507 10.0262 11.1045 10.0262C9.8415 10.0275 9 9.325 9 8.39C9 7.455 9.8415 6.75375 11.244 6.75375ZM13.5 21.25H9V11.25H13.5V21.25ZM28.5 21.25H24.264V15.785C24.264 14.2738 23.1345 13.925 22.7115 13.925C22.2885 13.925 20.8755 14.1575 20.8755 15.785C20.8755 16.0175 20.8755 21.25 20.8755 21.25H16.5V11.25H20.877V12.645C21.441 11.8313 22.5705 11.25 24.6885 11.25C26.8065 11.25 28.5 12.645 28.5 15.785V21.25Z"
                    fill="white"
                  />
                </svg>
              }
            />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href={CV}
            download={"Franco_Valenti_CV"}
          >
            <ButtonMain
              Text={"CV"}
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="31"
                  viewBox="0 0 36 31"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36 15.5C36 24.0603 27.941 31 18 31C8.05887 31 0 24.0603 0 15.5C0 6.93958 8.05887 0 18 0C27.941 0 36 6.93958 36 15.5ZM23.7137 14.6388L22.5823 13.6646L18.8568 16.8727V7.75H17.2568V16.8727L13.5314 13.6646L12.4 14.6388L18.0569 19.51L23.7137 14.6388ZM10.8 22.2166V20.8388H25.2V22.2166H10.8Z"
                    fill="white"
                  />
                </svg>
              }
            />
          </a>
        </div>
        <h2 className={style.h2Style}>TÉCNICO EN PROGRAMACIÓN</h2>
      </div>
      <div className={style.conatainer3}>
        <img src={myImg} loading="lazy" alt="" />
      </div>
    </div>
  );
};

export default Intro;
