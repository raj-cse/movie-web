import React from "react";
import Slider from "react-slick";
import './Back.css';
import { Button } from "@mui/material";

export default function Back() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    button :false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/15423.jpg" alt="Movie Poster 1" />
          <h1>Godzilla x Kong: The New Empire"</h1>
          <p className="para">Godzilla x Kong: The New Empire" sees the legendary titans unite against a new, unprecedented threat. Ancient rivalries are reignited, and hidden secrets come to light. Humanity's fate hangs in the balance as Godzilla and Kong face their greatest battle yet. Epic visuals and intense action define this thrilling continuation of their saga.
</p>
        </div>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/16995.jpg" alt="Movie Poster 2" />
          <h1>Venom: The Last Dance</h1>
          <p className="para">Venom: The Last Dance follows Eddie Brock as he faces his greatest challenge yet. The symbiote, Venom, begins to evolve, leading to a powerful and deadly transformation. As new threats emerge, Eddie must navigate a treacherous path to save humanity and himself. The film combines intense action, dark humor, and emotional depth, culminating in a thrilling showdown.
</p>
        </div>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/16582.jpg" alt="Movie Poster 3" />
          <h1>Kingdom of the Planet of the Apes</h1>
          <p className="para"> Kingdom of the Planet of the Apes takes place in a post-apocalyptic future where intelligent apes have risen to dominance. As tensions rise between ape factions and the few surviving humans, Caesar's legacy guides his descendants through political intrigue, epic battles, and moral dilemmas. The film explores themes of leadership, survival, and the struggle for a peaceful coexistence.</p>
        </div>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/16730.jpg" alt="Movie Poster 4" />
          <h1>Fallout</h1>
          <p className="para">Fallout is a gripping sci-fi thriller set in a post-nuclear war world where survivors must navigate a harsh, irradiated landscape. As society collapses, factions form, battling for resources and power. The protagonist, struggling with their past, embarks on a perilous journey through the wasteland, facing mutants, moral dilemmas, and the remnants of humanity's darkest impulses. The film blends intense action, suspense, and emotional depth, highlighting the resilience and ingenuity needed to survive in a fractured world.</p>
        </div>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/16295.jpg" alt="Movie Poster 5" />
          <h1>Ghostbusters: Frozen Empire </h1>
          <p className="para">Ghostbusters: Frozen Empire follows the Ghostbusters as they face a chilling new threat when an ancient, icy force envelops New York City in supernatural frost. As ghosts and spirits wreak havoc in the frozen metropolis, the team must uncover the source of the icy curse and put an end to it. With new gadgets, unexpected allies, and plenty of humor, they battle to save the city from a ghostly winter apocalypse</p>
        </div>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/16293.jpg" alt="Movie Poster 6" />
          <h1>The Garfield Movie</h1>
          <p className="para">The Garfield Movie brings everyone's favorite lasagna-loving, lazy cat to life in a hilarious adventure. Garfield's cozy life gets turned upside down when he finds himself embroiled in a mix-up involving mistaken identity, a billionaire's beloved pet dog, and a devious plot. With his loyal canine friend Odie and owner Jon by his side, Garfield navigates through comedic mishaps and challenges to set things right and preserve his cherished routine. The film is a delightful blend of humor, heartwarming moments, and Garfield's signature wit.</p>
        </div>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/13699.jpg" alt="Movie Poster 7" />
          <h1>Aquaman: The Last Kingdom</h1>
          <p className="para">Aquaman: The Last Kingdom dives into Atlantis as Aquaman confronts a powerful adversary threatening the underwater realms. With Mera and Vulko by his side, he unravels ancient secrets to prevent global upheaval. Combining stunning underwater visuals with epic battles, the film explores unity and sacrifice in the depths of the ocean.</p>
        </div>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/16172.jpg" alt="Movie Poster 8" />
          <h1>IF movie</h1>
          <p className="para">From writer and director John Krasinski, IF is about a girl who discovers that she can see everyone’s imaginary friends — and what she does with that superpower — as she embarks on a magical adventure to reconnect forgotten IFs with their kids.</p>
        </div>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/16952.jpg" alt="Movie Poster 9" />
          <h1>Mona 2</h1>
          <p className="para">Mona 2 is an enigmatic thriller where a mysterious woman named Mona finds herself drawn into a web of intrigue and danger. As she delves deeper into a labyrinth of secrets, betrayal, and unexpected alliances, Mona must navigate a treacherous path to uncover the truth about her past and secure her future. Fueled by suspense and twists, Mona 2 unravels a thrilling narrative of deception and redemption.</p>
        </div>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/15003.jpg" alt="Movie Poster 10" />
          <h1>Dune Part-2 </h1>
          <p className="para">Dune Part 2 continues the epic saga of Paul Atreides as he ascends to the throne of Arrakis amidst political intrigue and cosmic prophecy. Facing new challenges and enemies, Paul must harness the power of the desert planet's most valuable resource while navigating his own destiny as the prophesied messiah. With stunning visuals and gripping storytelling, Dune Part 2 explores themes of power, identity, and the consequences of fulfilling ancient prophecies in a universe on the brink of war.</p>
        </div>
        <div className="poster-img">
          <img className="poster" src="https://4kwallpapers.com/images/walls/thumbs_3t/15545.jpg" alt="Movie Poster 11" />
          <h1>Kung Fu Panda 4</h1>
          <p className="para">Kung Fu Panda 4 brings Po and his friends back for another thrilling adventure. When a new villain threatens the Valley of Peace, Po must train a group of clumsy pandas in the art of kung fu to save their home. With humor, heart, and epic martial arts battles, Kung Fu Panda 4 explores themes of friendship, perseverance, and the true meaning of being a hero in the face of adversity.</p>
        </div>
      </Slider>
      <hr />
    </div>
  );
}
