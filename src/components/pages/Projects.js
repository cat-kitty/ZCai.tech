import React from "react";
import "../../App.css";
import "./Projects.css";

export default function Projects() {
  return (
    <div className = "project-container">
      <div class="spacer-50"></div>
      <h1 className="projects">PROJECTS</h1>
      <div class="spacer-50"></div>

      {/*<div class="container">
        <div class="row">
          <div class="col-xs-10 col-xs-offset-1 summary">
            <div class="col-md-6">
              <a href="zcai.tech"> 
              {/* Supposed to be link to website... }
                <span class="title"><h1>Place name of project here</h1></span>
              <p class="teaser-text">Write a description of the project, what language was used, what was learned and possibly a read more link which links to a blog about the website, put image or short video about the project</p>
              </a>
            </div>

            <div class="col-md-6 thumbnail">
              <a href="#"><img src="https://www.comindware.com/blog/wp-content/uploads/2015/09/project-puzzle.jpg" alt="" class="img-responsive" /></a>
            </div>
          </div> 
        </div>
      </div>*/}
      <div className="polaroid">
        <div className="items">
          <h1 className="smallh1">Personal Website</h1>
          <p class="teaser-text">
            Used React, Javascript, HTML, CSS to create an interactive webpage. To learn more about this process,
            <br></br>
            <a href="/blog/personalwebsite">Read more...</a>
          </p>
          </div>
        <img className ="projectimg" src="/images/project-project.png" alt="Image of zcai.tech Website"/>
      </div>

      <div className="polaroid">
        <img className ="projectimg" src="/images/project-blog.png" alt=""/>
        <div className="items">
          <h1 className="smallh1">Blog Website</h1>
          <p class="teaser-text">
            Used React, Javascript, HTML, CSS, MongoDB, and PHP to create an interactive blog where users can login and write personal blog posts. To learn more about this process,
            <br></br>
            <a href="/blog/personalwebsite">Read more...</a>
            </p>
          </div>
      </div>

      <div className="polaroid">        
        <div className="items">
          <h1 className="smallh1">Portfolio Generator</h1>
          <p class="teaser-text">
            Uses libaries and history from YahooFinance to generate a safe portfolio based on a number of stocks. To learn more about this process,            
            <br></br>
            <a href="/blog/personalwebsite">Read more...</a>
            </p>
          </div>
        <img className ="projectimg" src="/images/project-cfm.png" alt=""/>
      </div>

      <div className="polaroid">
        <img className ="projectimg" src="/images/project-bot.png" alt=""/>
        <div className="items">
          <h1 className="smallh1">Trading-Bot</h1>
          <p class="teaser-text">
            Used front-end, APIs, twitter analysis, and natural language processing to send information whether a stock should be bought. To learn more about this process,            
            <br></br>
            <a href="/blog/personalwebsite">Read more...</a>
            </p>
          </div>
      </div>

      <div className="polaroid">
        <div className="items">
          <h1 className="smallh1">Agar.io Game</h1>
          <p class="teaser-text">
            Created an interactive game using Java with GUI, OOP, and AI. To learn more about this process,
            <br></br>
            <a href="/blog/personalwebsite">Read more...</a>
            </p>
          </div>
          <img className ="projectimg" src="/images/project-agario.png" alt=""/>
      </div>

      <div class="spacer-20"></div>

      <div></div>

      {/* <div className="polaroid">
        <a href="#"><img src="https://www.comindware.com/blog/wp-content/uploads/2015/09/project-puzzle.jpg" alt="" class="img-responsive" width="300vw"/></a>
        <div className="items">
          <a href="zcai.tech">
              <h1 className="smallh1">Name of Project</h1>
              <p class="teaser-text">Write a description of the project, what language was used, what was learned and possibly a read more link which links to a blog about the website</p>
          </a>
          </div>
      </div> */}


      {/* <div className="polaroid">
        <a href="#"><img src="https://www.comindware.com/blog/wp-content/uploads/2015/09/project-puzzle.jpg" alt="" class="img-responsive" width="300vw"/></a>
        <div className="items">
          <a href="zcai.tech">
              <h1 className="smallh1">Personal Website</h1>
              <p class="teaser-text">Write a description of the project, what language was used, what was learned and possibly a read more link which links to a blog about the website</p>
          </a>
          </div>
      </div> */}


      {/* <div class="spacer-50"></div>
      <div class="nice">
          <a href="zcai.tech">
              <span class="title"><h1>Place name of project here</h1></span>
              <p class="teaser-text">Write a description of the project, what language was used, what was learned and possibly a read more link which links to a blog about the website</p>
          </a>
          <div className="projectimg">
            <a href="#"><img src="https://www.comindware.com/blog/wp-content/uploads/2015/09/project-puzzle.jpg" alt="" class="img-responsive" /></a>
          </div>
      </div> */}

      {/*
      <div class="spacer-50"></div>
      <div class="container">
        <div class="row">
          <div class="col-xs-1 col-xs-offset-1 summary">
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
      */}
      <div class="spacer-50"></div>
    
    </div>
  )
}
