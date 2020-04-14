import React from "react";
import Levels from './levels.js';
import Graph from './graph.js'

class Dashboard extends React.Component{
    render(){
        return (
          <div className="dashboard">
            <Levels></Levels>
            <Graph></Graph>
          </div>
       );
    }   
}

export default Dashboard;