import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [movie, setMovie] = useState("Comedy");

  let recommendationDB = {
    Comedy: [
      {
        title: "Phir Hera Pheri",
        rating: 4.8
      },
      {
        title: "3 Idiots",
        rating: 4.5
      },
      {
        title: "Dhamaal",
        rating: 4
      }
    ],
    "Sci-Fi": [
      {
        title: "The Martians",
        rating: 4.5
      },
      {
        title: "Avengers EndGame",
        rating: 4.9
      },
      {
        title: "Passengers",
        rating: 4.1
      }
    ],
    Horror: [
      {
        title: "Insidious: The Last Key",
        rating: 4.5
      },
      {
        title: "The Conjuring 2",
        rating: 4.8
      },
      {
        title: "The Nun",
        rating: 3.8
      }
    ]
  };

  let genreList = Object.keys(recommendationDB);

  function showMovieSuggestions(event) {
    let recommendation = event.target.innerText;
    setMovie(recommendation);
  }
  return (
    <div className="App">
      <h1>My Movie Recommendations</h1>

      <p id="infoMsg">Check out my favourite movies from following genre:</p>
      {genreList.map((genre, index) => {
        return (
          <button key={index} onClick={showMovieSuggestions}>
            {genre}
          </button>
        );
      })}
      <ul>
        {recommendationDB[movie].map((genre, index) => (
          <li key={index}>
            <p id="li-title">{genre.title}</p>
            <p id="li-rating">{genre.rating}/5</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
