import React from "react";
import "../styles/navigator.css";
import { SearchMovie } from "./search";
import changeGenre from "../functions/changeGenre";
import changeOrder from "../functions/changeOrder";

function Navigator({ searchText }) {
  return <nav>
    <ul id="navUl">
      <li id="searcher">
        <SearchMovie search={ searchText }/>
      </li>
      <li id="genrSelector">
        <select id="genreSelect" name="genre" onChange={(e) => changeGenre(e.target.value)}>
        <option value={16}>Género</option>
            <option value={28}>Acción</option>
            <option value={12}>Aventura</option>
            <option value={878}>Ciencia ficción</option>
            <option value={14}>Fantasía</option>
            <option value={36}>Historia</option>
            <option value={9648}>Misterio</option>
            <option value={10749}>Romance</option>
        </select>
      </li>
      <li id="orderSelector">
        <select id="orderSelect" name="order" onChange = {(e) => changeOrder(e.target.value)}>
        <option value="nothing">Order by...</option>
          <option value="newest">Newest</option>
          <option value="older">Oldest</option>
        </select>
      </li>
    </ul>
  </nav>
  }

  //TODO Funcionalidades de los selectores y del buscador

  export default Navigator;
  