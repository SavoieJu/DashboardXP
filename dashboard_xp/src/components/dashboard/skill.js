import React from "react";

class Skill extends React.Component{
    render(){
        return (
          <div className="skill">
            <div><h4>{this.props.skillName}</h4></div>
            <div><h4>{this.props.level}</h4></div>
            <div><h4>{this.props.experience}</h4></div>
          </div>
       );
    }   
}

export default Skill;