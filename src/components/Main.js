import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Main.css";

function Main() {
  return (
    <div className="main-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>WELCOME</h1>
      <p>Feel free to explore</p>
      <div className="main-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET TO KNOW ME
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH VIDEO <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Main;
