import React from "react";
import style from "./index.module.css";
import Intro from "../../Intro/Intro";

const PageMain = () => {
  return (
    <>
      <div className={style.container}>
        <Intro />
      </div>
    </>
  );
};

export default PageMain;
