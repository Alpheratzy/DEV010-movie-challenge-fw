import React from "react";
import "../styles/error-page.css";
import { useRouteError } from "react-router-dom";
import logoYellow from "../images/logoYellow.png"
import SiteId from "../components/siteID";
import Navigator from "../components/navigator";
import Copyrights from "../components/copyrights";


export default function ErrorPage(searchText, setSearchText) {
  const error = useRouteError();
  console.error(error);

  return (
  <>
    <header>
      <SiteId/>
      <Navigator searchText={searchText} setSearchText = {setSearchText}/>
  </header>
  <main>
    <div id="error-page">
      <h1 id="sorry" >Sorry, that page does not exist</h1>
      <img className="error" src={logoYellow} alt="Error 404. Page not Found"/>
    </div>
  </main>
  <footer>
    <Copyrights />
  </footer></>
);
}

