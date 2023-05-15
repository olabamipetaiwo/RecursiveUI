import { hot } from "react-hot-loader/root";
import React from "react";
import { render } from "react-dom";
import Homepage from "../src/container/Home";

const App = () => {
  return <Homepage />;
};

const HotApp = hot(App);

const root = document.getElementById("root") as HTMLElement;
render(<HotApp />, root);
