//This is the main section of the homepage
//The top area where there is a video in the background with text and buttons on top
import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Main.css";

function Main() {
  return (
    <div className="main-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>WELCOME</h1>
      <p>This site is currently under construction</p>
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
          WATCH VIDEO <i className="far fa-play-circle"/>
        </Button>
      </div>
    </div>
  );
}

export default Main;
