import React from "react";
import { useState, useEffect } from "react";
import Rating from "./Rating";
const url = "https://restcountries.eu/rest/v2/all";
export default function Countries() {
  const [Countries, setCountries] = useState([]);

  const fetchCountriesData = async () => {
    const response = await fetch(url);
    const Countries = await response.json();
    setCountries(Countries);
    console.log(Countries);
  };
  const [likedBands, updateLikedBands] = React.useState([]);
  return (
    <div className="App">
      <h1>Like flags</h1>
      <Rating updateLikedBands={updateLikedBands} likedBands={likedBands} />
      <h2>Liked bands</h2>
      <ul>
        {likedBands.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
