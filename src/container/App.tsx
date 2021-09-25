import React, { useEffect } from "react";
import Home from "../pages/Home";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Home />
      <ToastContainer />
    </>
  );
}

export default App;
