import React from "react";
import Search from "./search.js";
import AccType from "./accType.js";

class Header extends React.Component{
    render(){
        return (
          <header className="topbar">
            <div className="topbar-logo">
                <img src="images/osrs-tracker.png" alt="Dashboard" width="150px"></img>
            </div>
            <div className="topbar-search">
                <Search></Search>
            </div>
            <div className="topbar-acctype">
                <AccType></AccType>
            </div>
          </header>
       );
    }   
}

export default Header;