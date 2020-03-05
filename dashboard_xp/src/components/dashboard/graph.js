import React from "react";
import { Line } from 'react-chartjs-2';

class Graph extends React.Component{

    constructor(props) {
        super(props);
        this.data = {
            datasets: [
              {
                _id: '0',
                data: [0, 4530]
              }
            ]
          }
      }
    
    render(){
        return (
            <div className="dashboard_graph">
                <Line  data={this.data}/>
            </div>
            
       );
    }   
}

export default Graph;