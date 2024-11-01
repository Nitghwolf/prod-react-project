import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "shared/lib/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Routes>
        <Route
          path={"/about"}
          element={
            <Suspense fallback={"Loading"}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path={"/"}
          element={
            <Suspense fallback={"Loading"}>
              <MainPage />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
