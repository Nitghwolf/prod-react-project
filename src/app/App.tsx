import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <AppRouter />
    </div>
  );
};

export default App;
