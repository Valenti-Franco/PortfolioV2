// import React from "react";
import { useEffect, useState } from "react";
import style from "./index.module.css";

const Page1 = () => {
  const [typingText, setTypingText] = useState("");
  const [isTickVisible, setIsTickVisible] = useState(false);

  const textSequence = [
    "D",
    "DE",
    "DES",
    "DESA",
    "DESAR",
    "DESARR",
    "DESARRO",
    "DESARROL",
    "DESARROLL",
    "DESARROLLA",
    "DESARROLLAD",
    "DESARROLLADO",
    "DESARROLLADOR",
    "DESARROLLADOR ",
    "DESARROLLADOR F",
    "DESARROLLADOR FU",
    "DESARROLLADOR FUL",
    "DESARROLLADOR FULL",
    "DESARROLLADOR FULL ",
    "DESARROLLADOR FULL S",
    "DESARROLLADOR FULL ST",
    "DESARROLLADOR FULL STA",
    "DESARROLLADOR FULL STAC",
    "DESARROLLADOR FULL STACK",
    "DESARROLLADOR FULL STACK",
    "DESARROLLADOR FULL STACK",
    "DESARROLLADOR FULL STACK",
    "DESARROLLADOR FULL STACK",
    "DESARROLLADOR FULL STACK",
    "DESARROLLADOR FULL STACK",
    "DESARROLLADOR FULL ",
    "DESARROLLADOR  ",
    "DESARROLLAD  ",
    "DESARROLL ",
    "DESARROL ",
    "DESARRO ",
    "DESARR ",
    "DESARR",
    "DESA",
    "DES",
    "D",
    "",
    "",
    "TÉ",
    "TÉC",
    "TÉCNI ",
    "TÉCNIC",
    "TÉCNICO ",
    "TÉCNICO E",
    "TÉCNICO EN ",
    "TÉCNICO EN P",
    "TÉCNICO EN PR",
    "TÉCNICO EN PRO",
    "TÉCNICO EN PROG",
    "TÉCNICO EN PROGR",
    "TÉCNICO EN PROGRA",
    "TÉCNICO EN PROGRAM",
    "TÉCNICO EN PROGRAMA",
    "TÉCNICO EN PROGRAMAC",
    "TÉCNICO EN PROGRAMACI",
    "TÉCNICO EN PROGRAMACIÓN",
    "TÉCNICO EN PROGRAMACIÓN",
    "TÉCNICO EN PROGRAMACIÓN",
    "TÉCNICO EN",
    "TÉCNIC",
    "TÉCNI",
    "TÉCN",
    "TÉC",
    "TÉ",
    "T",
    "",
    "",
  ];
  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setTypingText(textSequence[index]);

      if (index === textSequence.length - 1) {
        setTimeout(() => {
          setTypingText("");
          setIsTickVisible(false);
          index = 0;
        }, 3000); // 5000 milisegundos = 5 segundos
      }

      // Cambia la visibilidad del Tick dentro del intervalo
      setIsTickVisible((prev) => !prev);

      index += 1;
    }, 200); // Ajusta según sea necesario, un intervalo más largo para que el efecto sea más notorio

    return () => clearInterval(intervalId);
  }, []);

  const Tick = ({ isVisible }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5"
        height="99"
        viewBox="0 0 5 99"
        fill="none"
      >
        <rect
          width="5"
          height="99"
          fill={isVisible ? "#D9D9D9" : "#d9d9d900"}
        />
      </svg>
    );
  };
  return (
    <div className={style.container3}>
      <div className={style.containerSection}>
        <h1>
          {typingText} <Tick isVisible={isTickVisible} />
        </h1>

        <h3 className={style.h3}>
          Soy un apasionado por el{" "}
          <b style={{ color: "#00FFF0" }}>aprendizaje</b> y el{" "}
          <b style={{ color: "#00FFF0" }}>crecimiento</b> constante.
        </h3>
        <div className={style.containerText}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="373"
            viewBox="0 0 7 373"
            fill="none"
          >
            <path
              d="M4 3L3 370"
              stroke="#00D1FF"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="13 36 148 48"
            />
          </svg>
          <section style={{ display: "flex", flexDirection: "column" }}>
            <h3 style={{ margin: 0 }} className={style.h3}>
              SOBRE MÍ
            </h3>
            <p>
              <p style={{ padding: "0" }}>
                Mi enfoque en el{" "}
                <b style={{ color: "#00FFF0" }}>
                  {" "}
                  trabajo en equipo y mi habilidad para abordar desafíos{" "}
                </b>{" "}
              </p>
              Me han permitido contribuir de manera significativa en proyectos
              interesantes.
            </p>
          </section>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="359"
            viewBox="0 0 7 359"
            fill="none"
          >
            <path
              d="M4 3L3 370"
              stroke="#00D1FF"
              strokeWidth="16"
              strokeLinecap="round"
              strokeDasharray="0 31 125 46 12 5 13 6"
            />
          </svg>
          <section style={{ display: "flex", flexDirection: "column" }}>
            <h3 style={{ margin: 0 }} className={style.h3}>
              TÍTULO
            </h3>
            <p>
              <p style={{ padding: "0" }}>
                <b style={{ color: "#00FFF0" }}>
                  {" "}
                  Técnico en Programación (4/22 - 12/23){" "}
                </b>
              </p>
              Universidad Tecnológica Nacional Facultad Regional de Rosario
              Zeballos 1341
            </p>
          </section>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="381"
            viewBox="0 0 15 381"
            fill="none"
          >
            <g filter="url(#filter0_d_220_3257)">
              <path
                d="M8 3L7 370"
                stroke="#00D1FF"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="13 12 115 40 36 24 54 13"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_220_3257"
                x="0"
                y="0"
                width="15"
                height="381"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_220_3257"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_220_3257"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Page1;
//
