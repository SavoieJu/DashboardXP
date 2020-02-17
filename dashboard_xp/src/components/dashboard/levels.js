import React from "react";
import Skill from './skill.js';

class Levels extends React.Component{
    render(){
        return (
          <div className="levels">
            <Skill skillName="Attack" level="76" experience="1546000"></Skill>
          </div>
       );
    }   
}

export default Levels;