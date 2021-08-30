import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out the modules!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/img-timeline.jpg"
              text="Venture into the Past (Experience/Education)"
              label="Timeline"
              path="/timeline"
            />
            <CardItem
              src="/images/img-1.jpg"
              text="Enter the Blog"
              label="Blog"
              path="/blog"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/img-projects.jpg"
              text="Explore Projects"
              label="Projects"
              path="/timeline"
            />
            <CardItem
              src="/images/img-2.jpg"
              text="Extracurricular Activities"
              label="Relaxation Time"
              path="/timeline"
            />
            <CardItem
              src="/images/img-achievements.jpg"
              text="View the certifications"
              label="Achievements"
              path="/achievements"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
