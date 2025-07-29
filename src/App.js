import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  return (
    <div>
      <NavBar />
      <News pageSize={6} country="us" category="sports" />
    </div>
  );
};

export default App;