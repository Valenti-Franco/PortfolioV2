// import style from "./style.molule.css";
// import style from "./style.module.css";

import style from "./index.module.css";
import Logo from "../../assets/NuevoLogo2.png";
const Start = () => {
  return (
    <div className={style.container}>
      <div className={style.container2}>
        <div className={style.bola} />
        <img className={style.ImgLogo} src={Logo} />
      </div>
    </div>
  );
};

export default Start;
