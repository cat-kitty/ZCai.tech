import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Main from "../Main";

function Home() {
  document.title = "ZCai";
  return (
    <>
      <Main />
      <Cards />
    </>
  );
}

export default Home;
