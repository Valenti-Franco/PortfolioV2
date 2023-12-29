import React from "react";
import style from "./index.module.css";

const ButtonMain = ({ Text, svg }) => {
  //   const Text = "GitHub";
  //   const svg = (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="41"
  //       height="36"
  //       viewBox="0 0 41 36"
  //       fill="none"
  //     >
  //       <path
  //         d="M20.0516 3.58077C11.1929 3.58077 4.01038 9.99393 4.01038 17.9038C4.01038 24.6154 9.18636 30.2312 16.1643 31.7853C16.0895 31.5919 16.0413 31.3675 16.0413 31.0894V28.6414C15.3903 28.6414 14.2995 28.6414 14.0255 28.6414C12.928 28.6414 11.9521 28.22 11.4789 27.437C10.9536 26.5669 10.8627 25.2361 9.56066 24.422C9.17433 24.1511 9.46842 23.842 9.91356 23.8837C10.7357 24.0914 11.4174 24.5951 12.0591 25.3423C12.6981 26.0907 12.9988 26.2602 14.1926 26.2602C14.7714 26.2602 15.6376 26.2303 16.4531 26.1157C16.8915 25.1215 17.6495 24.206 18.5758 23.7739C13.2341 23.2834 10.6849 20.9105 10.6849 17.689C10.6849 16.302 11.3466 14.9605 12.4708 13.8301C12.1019 12.7081 11.638 10.42 12.6125 9.54872C15.016 9.54872 16.4691 10.9404 16.818 11.3164C18.0157 10.95 19.3311 10.7423 20.7133 10.7423C22.0982 10.7423 23.419 10.95 24.6194 11.3188C24.9643 10.9452 26.4187 9.54872 28.8276 9.54872C29.8061 10.4212 29.3369 12.7189 28.9639 13.8385C30.0814 14.9664 30.7391 16.3044 30.7391 17.689C30.7391 20.9081 28.1939 23.2798 22.8602 23.7727C24.328 24.4567 25.3987 26.3783 25.3987 27.8262V31.0894C25.3987 31.2136 25.368 31.3031 25.3519 31.4093C31.6027 29.453 36.0929 24.1535 36.0929 17.9038C36.0929 9.99393 28.9104 3.58077 20.0516 3.58077Z"
  //         fill="white"
  //       />
  //     </svg>
  //   );
  return (
    <div className={style.containerBtn}>
      <p>{Text}</p>
      <div className={style.svg}>{svg}</div>
    </div>
  );
};

export default ButtonMain;
