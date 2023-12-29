import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Start from "./components/startHome/Start";
import PageMain from "./components/Page/PageMain/PageMain";
import Page1 from "./components/Page/Page1/Page1";
import Proyect from "./components/Page/Proyect/Proyect";
import ContacMe from "./components/Page/contactMe/ContacMe";

function App() {
  const [count, setCount] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let x = setInterval(() => {
      setCount((prevCount) => prevCount + 0.1);
      if (count > 3.5) {
        clearInterval(x);
      }
    }, 100);

    // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    // Log the updated count value
    // console.log(count);

    // Check if count is greater than 2
    if (count > 3.5) {
      setReady(true);
    }
  }, [count]); // Run this effect whenever count changes

  return (
    <>
      {ready ? (
        <main
          style={{ display: "flex", flexDirection: "column", gap: "250px" }}
        >
          <PageMain />
          <Proyect />
          <Page1 />
          <ContacMe />
        </main>
      ) : (
        <main>
          <Start />
        </main>
      )}
    </>
  );
}

export default App;
