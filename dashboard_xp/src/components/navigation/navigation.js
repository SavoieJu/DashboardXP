import React from "react";
import Option from "./option.js";
import SocialLinks from "./socialLinks.js";

class Navigation extends React.Component{
    render(){
        return (
          <nav className="navigation">
            <Option></Option>
            <Option></Option>
            <Option></Option>
            <hr></hr>
            <Option></Option>
            <hr></hr>
            <SocialLinks></SocialLinks>
          </nav>
       );
    }   
}

export default Navigation;