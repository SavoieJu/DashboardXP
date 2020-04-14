import React from "react";

class Skill extends React.Component{
    render(){
        return (
          <div className="skill">
            <div className="levels-skill-skillName"><h4>{this.props.skillName}</h4></div>
            <div className="levels-skill-level"><h4>{this.props.level}</h4></div>
            <div className="levels-skill-xp"><h4>{this.props.experience}</h4></div>
          </div>
       );
    }   
}

export default Skill;