import React from "react";
import "../../App.css";
import "./Projects.css";

export default function Projects() {
  return (
    <div className = "project-container">
      <h1 className="projects">PROJECTS</h1>
      <div class="spacer-50"></div>

      <div class="container">
        <div class="row">
          <div class="col-xs-10 col-xs-offset-1 summary">

            <div class="col-md-6">
              <a href="zcai.tech"> 
              {/* Supposed to be link to website... */}
                <span class="title"><h1>Place name of project here</h1></span>
              <p class="teaser-text">Write a description of the project, what language was used, what was learned and possibly a read more link which links to a blog about the website, put image or short video about the project</p>
              </a>
            </div>

            <div class="col-md-6 thumbnail">
              <a href="#"><img src="https://www.comindware.com/blog/wp-content/uploads/2015/09/project-puzzle.jpg" alt="" class="img-responsive" /></a>
            </div>
          </div> 
        </div>
      </div>

      <div class="spacer-50"></div>

      <div class="container">
        <div class="row">
          <div class="col-xs-10 col-xs-offset-1 summary">
            <div class="col-md-6">
              <a href="zcai.tech">
                <span class="title"><h1>Place name of project here</h1></span>
              <p class="teaser-text">Write a description of the project, what language was used, what was learned and possibly a read more link which links to a blog about the website</p>
              </a>
            </div>
            <div class="col-md-6 thumbnail">
              <a href="#"><img src="https://www.comindware.com/blog/wp-content/uploads/2015/09/project-puzzle.jpg" alt="" class="img-responsive" /></a>
            </div>
          </div> 
        </div>
      </div>

      <div class="spacer-50"></div>

      <div class="container">
        <div class="row">
          <div class="col-xs-10 col-xs-offset-1 summary">
            <div class="col-md-6">
              <a href="zcai.tech">
              <span class="title"><h1>Place name of project here</h1></span>
              <p class="teaser-text">Write a description of the project, what language was used, what was learned and possibly a read more link which links to a blog about the website</p>
              </a>
            </div>
            <div class="col-md-6 thumbnail">
              <a href="#"><img src="https://www.comindware.com/blog/wp-content/uploads/2015/09/project-puzzle.jpg" alt="" class="img-responsive" /></a>
            </div>
          </div> 
        </div>
      </div>

      <div class="spacer-50"></div>
      <div class="container">
        <div class="row">
          <div class="col-xs-10 col-xs-offset-1 summary">
            <div class="col-md-6">
              <a href="zcai.tech">
              <span class="title"><h1>Place name of project here</h1></span>
              <p class="teaser-text">Write a description of the project, what language was used, what was learned and possibly a read more link which links to a blog about the website</p>
              </a>
            </div>
            <div class="col-md-6 thumbnail">
              <a href="#"><img src="https://www.comindware.com/blog/wp-content/uploads/2015/09/project-puzzle.jpg" alt="" class="img-responsive" /></a>
            </div>
          </div> 
        </div>
      </div>

      <div class="spacer-50"></div>
    
    </div>
  )
}
