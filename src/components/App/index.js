import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightMode, darkMode } from "../../styles/theme";
import Nav from "../Nav";
import Home from "../Home";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../Footer";
import {
  Loading,
  AppContainer,
  LoadingContainerLeft,
  LoadingContainerRight,
} from "./style";

const App = () => {
  const [visible, setVisible] = useState(false);
  const [openCurtains, setOpenCurtains] = useState(false);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [hiddenBlock, setHiddenBlock] = useState(true);
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "dark") {
      window.localStorage.setItem("mode", "light");
      setMode("light");
    } else {
      window.localStorage.setItem("mode", "dark");
      setMode("dark");
    }
  };

  useEffect(() => {
    if (mode === "dark") {
      setSunset(false);
      setSunrise(true);
    } else {
      setSunset(true);
      setSunrise(false);
    }
  }, [mode]);

  useEffect(() => {
    const localMode = window.localStorage.getItem("mode");
    localMode && setMode(localMode);
  }, []);

  useEffect(() => {
    const idTime = setTimeout(() => {
      setVisible(false);
    }, 2000);
    const idBack = setTimeout(() => {
      setHiddenBlock(false);
      setOpenCurtains(false);
    }, 5000);
    return () => {
      clearTimeout(idTime);
      clearTimeout(idBack);
    };
  }, [visible]);

  window.addEventListener("load", () => {
    setVisible(true);
    setOpenCurtains(true);
  });

  return (
    <ThemeProvider theme={mode === "dark" ? darkMode : lightMode}>
      <AppContainer>
        {visible && <Loading>Welcome to my portfolio</Loading>}
        {hiddenBlock && (
          <>
            <LoadingContainerRight right={openCurtains} />
            <LoadingContainerLeft left={openCurtains} />
          </>
        )}
        <Nav
          toggleMode={toggleMode}
          mode={mode}
          sunrise={sunrise}
          sunset={sunset}
        />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
