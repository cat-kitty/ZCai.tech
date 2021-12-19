import React from "react";
import "../../App.css";
import "./Blog.css";


export default function Blog() {
  return (
    
    <div className="blog-container">
      <h1 className="blog">KITTY'S BLOG</h1>
      <div class="intro">
        <div class="background-img">
          <div class="box">
            <p className="blogp">
              Welcome to my blogging corner! This is all so new to me so I'm just going to let my ideas run wild.
              This area is a free and friendly space so it has no overarching theme.
              I could be talking about studying in one post, how much I love food in another and then you may find my ramblings about all the places where I would love to explore.
            </p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="item">
          <h1 className="labelh1">School</h1>
          <div class="accent-line pink3"></div>
          <p className="blogp">find beautiful spots & delicious food in seattle.</p>
        </div>

        <div class="item pink3">
          <img class="seattle" src="https://2v8nyhuka1p2cb1la1ormlxg-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/seattle.jpg" />
          <h1 class="title">G1 + G2</h1>
          <div class="accent-line green"></div>
          <button className="btn2">start here</button>
        </div>

        <div class="item">
          <h1 className="labelh1">Activities</h1>
          <div class="accent-line pink3"></div>
          <p className="blogp">share with your friends and family.</p>
        </div>
      </div>


  <p> ♡ </p>

   

    </div>
  );
}


