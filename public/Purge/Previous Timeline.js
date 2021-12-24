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
            <i class="lni-cake"></i>  /*Supposed to draw an icon*/
            /* This comment looks so weird */

          </div>
          <div class="timeline__event__date">
            20-08-2019
          </div>
          <div class="timeline__event__content ">
            <div class="timeline__event__title">
              Birthday
            </div>
            <div class="timeline__event__description">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
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
    */
    
  );
}

