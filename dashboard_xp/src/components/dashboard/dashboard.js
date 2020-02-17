import React from "react";
import Levels from './levels.js';

class Dashboard extends React.Component{
    render(){
        return (
          <div className="dashboard">
            <Levels></Levels>
          </div>
       );
    }   
}

export default Dashboard;