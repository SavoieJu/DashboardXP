import React from "react";
import Skill from './skill.js';

class Levels extends React.Component{
    render(){
        return (
          <div className="levels">
            <Skill skillName="Overall" level="1,470" experience="18 327 759"></Skill>
            <Skill skillName="Attack" level="76" experience="1 433 785"></Skill>
            <Skill skillName="Defence" level="72" experience="964 516"></Skill>
            <Skill skillName="Strength" level="76" experience="1 386 860"></Skill>
            <Skill skillName="Hitpoints" level="78" experience="1 754 076"></Skill>
            <Skill skillName="Ranged" level="76" experience="1 465 349"></Skill>
            <Skill skillName="Prayer" level="50" experience="104 956"></Skill>
            <Skill skillName="Magic" level="70" experience="766 133"></Skill>
            <Skill skillName="Cooking" level="70" experience="766 414"></Skill>
            <Skill skillName="Woodcutting" level="66" experience="530 862"></Skill>
            <Skill skillName="Fletching" level="55" experience="166 701"></Skill>
            <Skill skillName="Fishing" level="54" experience="160 607"></Skill>
            <Skill skillName="Firemaking" level="89" experience="4 857 214"></Skill>
            <Skill skillName="Crafting" level="61" experience="312 363"></Skill>
            <Skill skillName="Smithing" level="52" experience="128 672"></Skill>
            <Skill skillName="Mining" level="63" experience="379 548"></Skill>
            <Skill skillName="Herblore" level="50" experience="101 595"></Skill>
            <Skill skillName="Agility" level="70" experience="744 981"></Skill>
            <Skill skillName="Thieving" level="53" experience="137 012"></Skill>
            <Skill skillName="Slayer" level="69" experience="683 857"></Skill>
            <Skill skillName="Farming" level="47" experience="77 755"></Skill>
            <Skill skillName="Runecraft" level="48" experience="84 917"></Skill>
            <Skill skillName="Hunter" level="50" experience="101 633"></Skill>
            <Skill skillName="Construction" level="75" experience="1 217 953"></Skill>
          </div>
       );
    }   
}

export default Levels;