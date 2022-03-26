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
      {/* Images are sorted based on year so search Y20XX */}
      <ul id="categories" class="clr">
        {/* <li class="pusher"></li> */}
        {/* Y2021 */}
        <li>
          <div>
            <img src="/images/Art/2021.1.29.png" alt="Girl Head Down on Desk" />
            <h1>Tired</h1>
            <p>2021.1.29 Pencil Crayon Art</p>
          </div>
        </li>
        <li></li>
        <li class="pusher"></li>
        {/* Y2020 */}
        <li>
          <div>
            <img src="/images/Art/2020.9.30.png" alt="Father and Daughter Hugging" />
            <h1>Dad's Birthday</h1>
            <p>2020.9.30 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.9.22w.png" alt="Happy Anniversary" />
            <h1>Calligraphy Card</h1>
            <p>2020.9.22 Ink Printing (Color)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.9.22r.png" alt="Mom and Dad" />
            <h1>Calligraphy Card</h1>
            <p>2020.9.22 Ink Printing (Color)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.8.11.png" alt="Thinking Anime Boy (Katsuki Bakugo)" />
            <h1>Bakugo (My Hero Academia)</h1>
            <p>2020.8.11 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.6.18.jpg" alt="Victini Pokémon" />
            <h1>Victini (Pokémon)</h1>
            <p>2020.6.18 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.6.5.jpg" alt="Aurorus Pokémon" />
            <h1>Aurorus (Pokémon)</h1>
            <p>2020.6.5 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.4.4s.jpg" alt="Sandshrew Pokémon" />
            <h1>Sandshrew (Pokémon)</h1>
            <p>2020.4.4 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.4.4.jpg" alt="Wooper Pokémon" />
            <h1>Wooper (Pokémon)</h1>
            <p>2020.4.4 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.3.15.png" alt="Inuyasha" />
            <h1>Inuyasha (InuYasha)</h1>
            <p>2020.3.15 Pencil Crayon Art</p>
          </div>
        </li>
        <li></li>
        <li class="pusher"></li>
        {/* Y2019 */}
        <li>
          <div>
            <img src="/images/Art/2019.10.10zb.jpg" alt="Bounsweet Pokémon" />
            <h1>Bounsweet (Pokémon)</h1>
            <p>2019.10.10 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.10.10s.jpg" alt="Solosis Pokémon" />
            <h1>Solosis (Pokémon)</h1>
            <p>2019.10.10 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.10.10.jpg" alt="Cottonee Pokémon" />
            <h1>Cottonee (Pokémon)</h1>
            <p>2019.10.10 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.10.5s.jpg" alt="Snorlax Pokémon" />
            <h1>Snorlax (Pokémon)</h1>
            <p>2019.10.5 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.10.5.jpg" alt="Zeraora Pokémon" />
            <h1>Zeraora (Pokémon)</h1>
            <p>2019.10.5 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.9.29b.jpg" alt="Vivillon Pokémon" />
            <h1>Vivillon (Pokémon)</h1>
            <p>2019.9.29 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.9.29.jpg" alt="Vulpix Pokémon" />
            <h1>Vulpix (Pokémon)</h1>
            <p>2019.9.29 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.9.20.jpg" alt="Gengar Pokémon" />
            <h1>Gengar (Pokémon)</h1>
            <p>2019.9.20 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.8.27.jpg" alt="Cyndaquil Pokémon" />
            <h1>Cyndaquil (Pokémon)</h1>
            <p>2019.8.27 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.8.26.jpg" alt="Furret Pokémon" />
            <h1>Furret (Pokémon)</h1>
            <p>2019.8.26 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.8.25.jpg" alt="Ampharos Pokémon" />
            <h1>Ampharos (Pokémon)</h1>
            <p>2019.8.25 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.8.24l.jpg" alt="Lanturn Pokémon" />
            <h1>Lanturn (Pokémon)</h1>
            <p>2019.8.24 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.8.24.jpg" alt="Skitty Pokémon" />
            <h1>Skitty (Pokémon)</h1>
            <p>2019.8.24 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.8.22.jpg" alt="Togepi Pokémon" />
            <h1>Togepi (Pokémon)</h1>
            <p>2019.8.22 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.8.21.jpg" alt="Azurill Pokémon" />
            <h1>Azurill (Pokémon)</h1>
            <p>2019.8.21 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.8.20r.jpg" alt="Cinccino Pokémon" />
            <h1>Cinccino (Pokémon)</h1>
            <p>2019.8.20 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.8.20d.jpg" alt="Minccino and Cinccino Pokémon" />
            <h1>Minccino and Cinccino (Pokémon)</h1>
            <p>2019.8.20 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.8.20.jpg" alt="Minccino Pokémon" />
            <h1>Minccino (Pokémon)</h1>
            <p>2019.8.20 Pencil Crayon Art</p>
          </div>
        </li>
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
        {/* Y2017 */}
        <li>
          <div>
            <img src="/images/Art/2017.3.30.jpg" alt="Red Hair Anime Boy" />
            <h1>Red Hair Anime Boy</h1>
            <p>2017.3.30 Pencil Crayon Art</p>
          </div>
        </li>       
        <li>
          <div>
            <img src="/images/Art/2017.3.24.png" alt="Red Rose" />
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
      </ul>
      {/* <a
        id="fork"
        target="_blank"
        href="https://github.com/web-tiki/responsive-grid-of-hexagons"
      >
        Fork on GitHub
      </a> */}
    </div>
  );
}
