import React from "react";
import "../styles/card.css";
import { Link } from "react-router-dom";
import getYear from "../functions/year";

const apiPage ="http://image.tmdb.org/t/p/" ;
const imgSize ="w300"

function Card({ movie }) {
    
  const ImgUrl = apiPage + imgSize + movie.poster_path;
  const title = movie.title.toUpperCase();
  const releaseYear = getYear(movie.release_date);
  
  return <article className = "cardClass">
    <Link to={"/detail/"+ movie.id }>
      <img className="poster" src={ImgUrl} alt={movie.title + " poster"}/>
    </Link>
      <h2 id="movieTitle">{title}</h2>
      <h3 id="year">{ releaseYear }</h3>
      
    </article>
  }
  
  export default Card;
