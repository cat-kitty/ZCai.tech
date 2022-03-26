import React from "react";
import "../../App.css";
import "./Gallery.css";

export default function Gallery() {
  return (
    <div className="gallery-container">
      <div class="spacer-50"></div>
      <h1 className="gallery">GALLERY</h1>
      <div class="spacer-50"></div>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,800italic,400,700,800"
        rel="stylesheet"
        type="text/css"
      ></link>
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:400,700,300,200,100,900"
        rel="stylesheet"
        type="text/css"
      ></link>
      <link
        href="https://fonts.googleapis.com/css?family=Amatic+SC:400,700"
        rel="stylesheet"
        type="text/css"
      ></link>

      <ul id="categories" class="clr">
        {/* <li class="pusher"></li> */}
        <li>
          <div>
            <img src="/images/Art/2020.8.11.png" alt="Thinking Anime Boy (Katsuki Bakugo)" />
            <h1>Bakugo (My Hero Academia)</h1>
            <p>2020.8.11 Ink Drawing (Black)</p>
          </div>
        </li>
        <li></li>
        <li class="pusher"></li>
        <li>
          <div>
            <img src="/images/Art/2019.8.19.jpg" alt="Emolga Pokémon" />
            <h1>Emolga (Pokémon)</h1>
            <p>2019.8.19 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.8.18.jpg" alt="Eevee Pokémon" />
            <h1>Eevee (Pokémon)</h1>
            <p>2019.8.18 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.8.16.jpg" alt="Piplup Pokémon" />
            <h1>Piplup (Pokémon)</h1>
            <p>2019.8.16 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.8.15p.jpg" alt="Pikachu Pokémon" />
            <h1>Pikachu (Pokémon)</h1>
            <p>2019.8.15 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.8.15.jpg" alt="Misdreavus Pokémon" />
            <h1>Misdreavus (Pokémon)</h1>
            <p>2019.8.15 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.8.14.jpg" alt="Shaymin Pokémon" />
            <h1>Shaymin (Pokémon)</h1>
            <p>2019.8.14 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.7.20.jpg" alt="Gold Hair Anime Boy (Chikage Kazama)" />
            <h1>Kazama (Hakuoki)</h1>
            <p>2019.7.20 Pencil Crayon Art</p>
          </div>
        </li>
        <li></li><li class="pusher"></li>
        {/* <li></li>
        <li class="pusher"></li> */}
        <li>
          <div>
            <img src="/images/Art/2017.3.30.jpg" alt="Red Hair Anime Boy" />
            <h1>Red Hair Anime Boy</h1>
            <p>2017.3.30 Pencil Crayon Art</p>
          </div>
        </li>        
        <li>
          <div>
            <img src="/images/Art/2017.3.24.jpg" alt="Red Rose" />
            <h1>Red Rose</h1>
            <p>2017.3.24 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2017.2.17.jpg" alt="Killua Zoldyck Cover 17" />
            <h1>Killua (Hunter X Hunter)</h1>
            <p>2017.2.17 Pencil Crayon Art</p>
          </div>
        </li>
        {/* <li>
            <div>
              <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li>
            <div>
              <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li class="pusher"></li>
        <li>
            <div>
              <img src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        
        <li>
            <div>
              <img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li class="pusher"></li>
        <li>
            <div>
              <img src="https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li>
            <div>
              <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li><li>
            <div>
              <img src="https://farm4.staticflickr.com/3766/12953056854_b8cdf14f21.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li>
            <div>
              <img src="https://farm7.staticflickr.com/6139/5986939269_10721b8017.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li>
            <div>
              <img src="https://farm4.staticflickr.com/3165/5733278274_2626612c70.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li class="pusher"></li>
        <li class="pusher"></li>
        <li>
            <div>
              <img src="https://farm8.staticflickr.com/7163/6822904141_50277565c3.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li class="pusher"></li>
        <li>
            <div>
              <img src="https://farm4.staticflickr.com/3771/13199704015_72aa535bd7.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li>
            <div>
              <img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li>
            <div>
              <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li class="pusher"></li>
        <li class="pusher"></li>
          <li>
            <div>
              <img src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
          <li>
            <div>
              <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li class="pusher"></li>
        <li>
            <div>
              <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li>
            <div>
              <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li class="pusher"></li>
        <li>
            <div>
              <img src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li>
            <div>
              <img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li class="pusher"></li>
        <li class="pusher"></li>
        <li>
            <div>
              <img src="https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li>
            <div>
              <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li class="pusher"></li>
        <li>
            <div>
              <img src="https://farm4.staticflickr.com/3766/12953056854_b8cdf14f21.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
          <li>
            <div>
              <img src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
          <li>
            <div>
              <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li class="pusher"></li>
        <li>
            <div>
              <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li>
            <div>
              <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li class="pusher"></li>
        <li class="pusher"></li>
        <li>
            <div>
              <img src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li>
            <div>
              <img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li class="pusher"></li>
        <li class="pusher"></li>
        <li>
            <div>
              <img src="https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li>
            <div>
              <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li class="pusher"></li>
        <li>
            <div>
              <img src="https://farm4.staticflickr.com/3766/12953056854_b8cdf14f21.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li>
            <div>
              <img src="https://farm7.staticflickr.com/6139/5986939269_10721b8017.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li>
            <div>
              <img src="https://farm4.staticflickr.com/3165/5733278274_2626612c70.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li class="pusher"></li>
        <li class="pusher"></li>
        <li>
            <div>
              <img src="https://farm8.staticflickr.com/7163/6822904141_50277565c3.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li class="pusher"></li>
        <li>
            <div>
              <img src="https://farm4.staticflickr.com/3771/13199704015_72aa535bd7.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li>
            <div>
              <img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li class="pusher"></li>
        <li>
            <div>
              <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li>
            <div>
              <img src="https://farm7.staticflickr.com/6139/5986939269_10721b8017.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li class="pusher"></li>
        <li>
            <div>
              <img src="https://farm4.staticflickr.com/3165/5733278274_2626612c70.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li class="pusher"></li>
        <li class="pusher"></li>
        <li>
            <div>
              <img src="https://farm8.staticflickr.com/7163/6822904141_50277565c3.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li class="pusher"></li>
        <li>
            <div>
              <img src="https://farm4.staticflickr.com/3771/13199704015_72aa535bd7.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li>
            <div>
              <img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li>
        <li class="pusher"></li>
        <li>
            <div>
              <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt=""/>
              <h1>This is a title</h1>
              <p>Some sample text about the article this hexagon leads to</p>
          </div>
        </li> */}
      </ul>
      <a
        id="fork"
        target="_blank"
        href="https://github.com/web-tiki/responsive-grid-of-hexagons"
      >
        Fork on GitHub
      </a>
    </div>
  );
}
