import React from "react";
import SiteId from "../components/siteID"
import Navigator from '../components/navigator';
import Copyrights from '../components/copyrights';
import MoviesGrid from '../components/moviesGrid';

export function Home(){

  const [searchText, setSearchText] = React.useState("");
  console.log(React.useState)
  
  return(
    <>
        <header>
      <SiteId />
      <Navigator searchText={searchText} setSearchText = {setSearchText}/>
    </header>
     <main>
      <MoviesGrid/>
     </main>
    <footer>
      <Copyrights />
    </footer></>
    );
}