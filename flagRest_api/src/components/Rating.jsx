import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const Rating = (props) => {
  const url = "https://restcountries.eu/rest/v2/all";
  const [Countries, setCountries] = useState([]);

  const fetchCountriesData = async () => {
    const response = await fetch(url);
    const Countries = await response.json();
    setCountries(Countries);
    console.log(Countries);
  };
  useEffect(() => {
    fetchCountriesData();
  }, []);
  const [isLiked, updateLike] = useState(false);

  const handleLike = () => {
    let currentLikedBands = props.likedBands;
    if (!isLiked) {
      updateLike(true);
    } else {
      updateLike(false);
    }
  };

  return (
    <div>
      <section className="grid">
        {Countries.map((country) => {
          const { numericCode, name, flag } = country;
          return (
            <article key={numericCode}>
              <div>
                <img src={flag} alt={name} />
                <div>
                  <button onClick={handleLike} disabled={isLiked}>
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      style={{ paddingRight: 5 }}
                    />
                  </button>
                  <button onClick={handleLike} disabled={!isLiked}>
                    <FontAwesomeIcon
                      icon={faThumbsDown}
                      style={{ paddingLeft: 5 }}
                    />
                  </button>
                </div>
                <p>You {isLiked ? "liked" : "disliked"} </p>
              </div>
            </article>
          );
        })}
      </section>

      <hr />
    </div>
  );
};

export default Rating;
