import SiteId from "./siteID";
import Navigator from "./navigator";

function Header({ searchText, changeGenre, changeOrder }) {
 
    return <header>
      <SiteId />
      <Navigator search={searchText} genre={changeGenre} order={changeOrder}/>
      </header>
    }
    
    export default Header;