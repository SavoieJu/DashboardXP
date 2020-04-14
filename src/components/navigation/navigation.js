import React from "react";
import Option from "./option.js";
import SocialLinks from "./socialLinks.js";

class Navigation extends React.Component{



    render(){
        return (
          <nav className="navigation">
            <Option option="Daily"></Option>
            <Option option="Weekly"></Option>
            <Option option="Monthly"></Option>
            <hr></hr>
            <Option option="Save Name"></Option>
            <hr></hr>
            <SocialLinks></SocialLinks>
          </nav>
       );
    }   
}

export default Navigation;