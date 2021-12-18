import React from "react";
import "../../App.css";
import "./Timeline.css";

export default function Products() {
  return (
    <div className="timeline-container">
      <h1 className="timeline-title">TIMELINE</h1>
      <div class="timeline"> 
        <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
          <div class="timeline__event__icon ">
            <i class="fa fa-university"></i> 
          </div>
          <div class="timeline__event__date">
            2021.09.08
          </div>
          <div class="timeline__event__content ">
            <div class="timeline__event__title">
              University of Waterloo - Day 1
            </div>
            <div class="timeline__event__description">
              <p>Although I had previously explored campus, it was my first official day with classes.
                 This term (1A) I took the following five courses:
                 <ul>
                   <li>AFM 132 - Introduction to Business Stages</li>
                   <li>CFM 101 - Introduction to Financial Markets and Data Analytics</li>
                   <li>CS 145 - Designing Functional Programs (Advanced Level)</li>
                   <li>MATH 145 - Algebra (Advanced Level)</li>
                   <li>MATH 147 - Calculus 1 (Advanced Level)</li>
                  </ul>
              </p>
            </div>
          </div>
        </div>

        <div class="timeline__event animated fadeInUp delay-2s timeline__event--type4">
          <div class="timeline__event__icon">
            <i class="fa fa-trophy"></i>
          </div>
          <div class="timeline__event__date">
            2021.07.30
          </div>
          <div class="timeline__event__content">
            <div class="timeline__event__title">
              Graduated from High School - Victoria Park Collegiate Institute
            </div>
            <div class="timeline__event__description">
              <p>September 2017 - May 2021</p>
              <p>Recieved:</p>
              <ul>
                <li>International Baccalaureate Diploma</li>
                <ul class = "same">
                  <li class = "left">Higher Level Subjects:</li>
                  <ul>
                    <li>English A: Literature</li>
                    <li>Economics (ENG)</li>
                    <li>Math Analysis (ENG)</li>
                  </ul>
                  <li class = "right">Standard Level Subjects:</li>
                  <ul>
                    <li>French B</li>
                    <li>Chemistry (ENG)</li>
                    <li>Physics (ENG)</li>
                  </ul>
              </ul>
                <li>Ontario Secondary School Diploma</li>
                <li>Ontario Scholar</li>
                <li>Trustee Doyle's Leadership Award</li>
                <li>University of Toronto - National Book Award</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
          <div class="timeline__event__icon">
            <i class="lni-burger"></i>

          </div>
          <div class="timeline__event__date">
            20-08-2019
          </div>
          <div class="timeline__event__content">
            <div class="timeline__event__title">
              Lunch
            </div>
            <div class="timeline__event__description">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
            </div>
          </div>
        </div>

        <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
          <div class="timeline__event__icon">
            <i class="lni-slim"></i>

          </div>
          <div class="timeline__event__date">
            20-08-2019
          </div>
          <div class="timeline__event__content">
            <div class="timeline__event__title">
              Exercise
            </div>
            <div class="timeline__event__description">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
            </div>
          </div>
        </div>

        <div class="timeline__event animated fadeInUp timeline__event--type1">
          <div class="timeline__event__icon">
            <i class="lni-cake"></i>
          </div>
          <div class="timeline__event__date">
            20-08-2019
          </div>
          <div class="timeline__event__content">
            <div class="timeline__event__title">
              Birthday
            </div>
            <div class="timeline__event__description">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
            </div>
          </div>
        </div>

      </div>
    </div>
/*
    <div className="timeline-container">
      <h1 className="timeline-title" id="timeline">TIMELINE</h1>
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
    
              <!--First Day of Classes at the University of Waterloo-->
    */
    
  );
}

