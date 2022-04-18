import React from "react";
import "../../App.css";
import "./Gallery.css";

export default function Gallery() {
  return (
    <div className="gallery-container">
      <div class="spacer-50"></div>
      <div class="spacer-50"></div>
      <h1 className="gallery">GALLERY</h1>
      <div class="spacer-50"></div>
      <div class="spacer-50"></div>
      <div class="spacer-50"></div>
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
            <img src="/images/Art/2021.7.20.png" alt="Killjoy" />
            <h1>Killjoy (Valorant)</h1>
            <p>2021.7.20 Pencil Sketch</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2021.6.19.png" alt="Father Lion and Daughter Hugging" />
            <h1>Father's Day</h1>
            <p>2021.6.19 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2021.3.20.png" alt="Anime Girl in School Uniform" />
            <h1>Anime Girl in Uniform</h1>
            <p>2021.3.20 Pencil Crayon Art</p>
          </div>
        </li>
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
            <img src="/images/Art/2020.12.27.png" alt="Anime Girl with Coffee" />
            <h1>Softly Waiting</h1>
            <p>2020.12.27 Ink Drawing (Red)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.12.6.png" alt="Girl with Balloons" />
            <h1>Balloon Girl</h1>
            <p>2020.12.6 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.11.27.png" alt="Hisoka Morow" />
            <h1>Hisoka (Hunter X Hunter)</h1>
            <p>2020.11.27 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.10.11.png" alt="Anime Man with Finger to Lips" />
            <h1>Day 11 - Inktober (Disgusting)</h1>
            <p>2020.10.11 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.10.9.png" alt="Killua Zoldyck" />
            <h1>Day 9 - Inktober (Throw) (Killua - Hunter X Hunter)</h1>
            <p>2020.10.9 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.10.8.png" alt="Rin Matsuoka" />
            <h1>Day 8 - Inktober (Teeth) (Rin - Free!)</h1>
            <p>2020.10.8 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.10.7.jpg" alt="Dresses" />
            <h1>Day 7 - Inktober (Fancy)</h1>
            <p>2020.10.7 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.10.6.png" alt="Pikachu" />
            <h1>Day 6 - Inktober (Rodent) (Pikachu - Pokémon)</h1>
            <p>2020.10.6 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.10.5.png" alt="Knives" />
            <h1>Day 5 - Inktober (Blade)</h1>
            <p>2020.10.5 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.10.4.jpg" alt="Man Singing" />
            <h1>Day 4 - Inktober (Radio)</h1>
            <p>2020.10.4 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.10.3.jpg" alt="Levi Ackerman" />
            <h1>Day 3 - Inktober (Bulky) (Levi - Attack on Titan)</h1>
            <p>2020.10.3 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.10.2.png" alt="Wisp" />
            <h1>Day 2 - Inktober (Wisp)</h1>
            <p>2020.10.2 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.10.1.jpg" alt="Fish" />
            <h1>Day 1 - Inktober (Fish)</h1>
            <p>2020.10.1 Ink Drawing (Black)</p>
          </div>
        </li>
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
            <img src="/images/Art/2020.9.4.png" alt="Fingers Touching" />
            <h1>Hold Me</h1>
            <p>2020.9.4 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.8.28.png" alt="Anime Boy in Leather Jacket" />
            <h1>Leather Chip</h1>
            <p>2020.8.28 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.8.26.png" alt="Pikachu Eating Apple" />
            <h1>Pikachu in Snorlax Hoodie (Pokémon)</h1>
            <p>2020.8.26 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.8.20.png" alt="Anime Boy Smoking" />
            <h1>Raining Smoke</h1>
            <p>2020.8.20 Ink Drawing (Blue)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.8.16.png" alt="Killua Zoldyck Sketch" />
            <h1>Killua (Hunter X Hunter)</h1>
            <p>2020.8.16 Pencil Crayon Art</p>
          </div>
        </li>
        <li>    
          <div>
            <img src="/images/Art/2020.8.14.png" alt="Anime Boy" />
            <h1>Anime Boy</h1>
            <p>2020.8.14 Pencil Sketch</p>
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
            <img src="/images/Art/2020.7.25.png" alt="Headphone Girl" />
            <h1>Headphone Girl</h1>
            <p>2020.7.25 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.7.23.png" alt="Crying Girl" />
            <h1>Crying Girl</h1>
            <p>2020.7.23 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.7.13.jpg" alt="Chibi Anime Boy (Judaru)" />
            <h1>Judar (Hepburn: Magi)</h1>
            <p>2020.7.13 Pencil Sketch</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.6.194.png" alt="Father and Daughter Series 4" />
            <h1>Happy Father's Day - 4</h1>
            <p>2020.6.19 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.6.193.png" alt="Father and Daughter Series 3" />
            <h1>Happy Father's Day - 3</h1>
            <p>2020.6.19 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.6.192.png" alt="Father and Daughter Series 2" />
            <h1>Happy Father's Day - 2</h1>
            <p>2020.6.19 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.6.191.png" alt="Father and Daughter Series 1" />
            <h1>Happy Father's Day - 1</h1>
            <p>2020.6.19 Ink Drawing (Black)</p>
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
            <img src="/images/Art/2020.6.11.jpg" alt="Anime Man (Berukūri Shinseshisu Wan)" />
            <h1>Bercouli (Sōdo Āto Onrain)</h1>
            <p>2020.6.11 Pencil Sketch</p>
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
        <li>
          <div>
            <img src="/images/Art/2020.2.13.png" alt="King Soo-Won with Eagle" />
            <h1>Soo-Won (Akatsuki No Yona)</h1>
            <p>2020.2.13 Ink Drawing (Blue)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.2.7.png" alt="Portrait of Anime Girl" />
            <h1>Anime Girl Portrait</h1>
            <p>2020.2.7 Ink Drawing (Blue)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.1.17.png" alt="Anime Boy (Soo-Won)" />
            <h1>Soo-Won (Akatsuki No Yona)</h1>
            <p>2020.1.17 Pencil Sketch</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2020.1.2.png" alt="Self-Portrait" />
            <h1>Self Portrait</h1>
            <p>2020.1.2 Pencil Sketch</p>
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
            <h1>Kazama (Hakuouki)</h1>
            <p>2019.7.20 Pencil Crayon Art</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.6.23.jpg" alt="Man in Leather Jacket" />
            <h1>Anime Boy</h1>
            <p>2019.6.23 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.5.18.jpg" alt="Anime Boy with Headphones" />
            <h1>Headphone Anime Boy V2</h1>
            <p>2019.5.18 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.4.9.jpg" alt="Baby Kija (Kija Hakuryuu)" />
            <h1>Kija (Akatsuki No Yona)</h1>
            <p>2019.4.9 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.3.27.jpg" alt="Anime Boy with Headphones" />
            <h1>Headphone Anime Boy</h1>
            <p>2019.3.27 Ink Drawing (Black)</p>
          </div>
        </li>        
        <li>
          <div>
            <img src="/images/Art/2019.3.24.jpg" alt="Anime Boy Smoking" />
            <h1>Smoking Anime Boy</h1>
            <p>2019.3.24 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.3.23.jpg" alt="Two Anime Girls" />
            <h1>Pair of Anime Girls Zen</h1>
            <p>2019.3.23 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.3.11.jpg" alt="Yuuki Asuna" />
            <h1>Asuna (Sword Art Online)</h1>
            <p>2019.3.11 Ink Drawing (Black)</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.1.31.jpg" alt="Anime Boy (Toshizō Hijikata)" />
            <h1>Hijikata (Hakuouki)</h1>
            <p>2019.1.31 Pencil Sketch</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.1.28.jpg" alt="Anime Boy (Shin-Ah Seiryuu)" />
            <h1>Shin-Ah (Akatsuki No Yona)</h1>
            <p>2019.1.28 Pencil Sketch</p>
          </div>
        </li>
        <li>
          <div>
            <img src="/images/Art/2019.1.25.jpg" alt="Anime Boy Holding Puppy" />
            <h1>~ Happy Birthday Conner ~</h1>
            <p>2019.1.25 Pencil Sketch</p>
          </div>
        </li>
        <li></li>
        <li class="pusher"></li>
        {/* Y2018 */}
        <li>
          <div>
            <img src="/images/Art/2018.10.5.png" alt="Tiger Eyes" />
            <h1>Tiger Eyes</h1>
            <p>2018.10.5 Pencil Sketch</p>
          </div>
        </li>
        <li></li>
        <li class="pusher"></li>
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
