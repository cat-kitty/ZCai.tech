import React from "react";
import "../../App.css";
import "./Timeline.css";

export default function Products() {
  return (
    <div className="timeline-container">
      <h1 className="timeline-title">TIMELINE</h1>
      <div class="timeline">
        <div class="container left">
          <div class="content">
            <h2>2017</h2>
            <p>OOPS</p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>2016</h2>
            <p>OUCHIES</p>
          </div>
        </div>
      </div>
    </div>
  );
}
