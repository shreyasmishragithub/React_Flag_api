import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { Prev } from "react-bootstrap/esm/PageItem";

const Rating = (props) => {
  const url = "https://restcountries.eu/rest/v2/all";
  const [Countries, setCountries] = useState([]);

  const fetchCountriesData = async () => {
    const response = await fetch(url);
    const Countries = await response.json();
    setCountries(Countries);
    console.log(Countries);
  };
  
  var liked=[]
   for(var i=0;i<250;i++){
      liked.push(false);
    }
    if(!sessionStorage.getItem('liked')){
    sessionStorage.setItem('liked',JSON.stringify(liked));
    }
    useEffect(() => {
   
  
console.log(liked)
    fetchCountriesData();
  }, []);
  
  // const handleLike = (index) => {
  //   liked[index]=true;
  //   console.log(liked[index]);
  // };
  // const handledislike = (index) => {
  //   liked[index]=false;
  //   console.log(liked[index]);
  // };
  return (
    <div>
      <section className="grid">
        {Countries.map((country,index) => {
          const { numericCode, name, flag } = country;
          return (
            <article key={numericCode}>
              <div>
                <img src={flag} alt={name} />
                <h1>{name}</h1>
                <div>
                  <button onClick={(e)=>{
                    e.preventDefault(); 
                    const ab=JSON.parse(sessionStorage.getItem('liked'))
                    ab[index]=true;
                    sessionStorage.setItem('liked',JSON.stringify(ab))
                    console.log(liked);}}>
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      style={{ paddingRight: 5 }}
                    />
                  </button>
                  <button onClick={(e)=>{
                    e.preventDefault(); 
                    const ab=JSON.parse(sessionStorage.getItem('liked'))
                    ab[index]=false;
                    sessionStorage.setItem('liked',JSON.stringify(ab))
                    console.log(liked);}}>
                      <FontAwesomeIcon
                      icon={faThumbsDown}
                      style={{ paddingLeft: 5 }}
                    />
                  </button>
                </div>
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
