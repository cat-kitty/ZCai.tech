//This is the main section of the homepage
//The top area where there is a video in the background with text and buttons on top
import React from "react";
import "../App.css";
import { Button } from "./Button";
import { Button2 } from "./Button2";
import "./Main.css";

function Main() {
  return (
    <div className="main-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>WELCOME</h1>
      <p className="centerp">This site is currently under construction, only the Timeline and Projects have been completed ~ Construction should be completed by February</p>
      <div className="main-btns">
        <Button2
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Download Resume
        </Button2>
        {/*<a href="./files/ZhiRongCaiResume.pdf" download="Zhi Rong Cai Resume">Download the pdf</a>*/}
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET TO KNOW ME
        </Button> */}
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Study with Kitty! <i className="far fa-play-circle"/>
        </Button>
      </div>
    </div>
  );
}

export default Main;
