import React from "react";
import { Line } from 'react-chartjs-2';

class Graph extends React.Component{

    constructor(props) {
        super(props);
        this.data = {
            labels: ['Saturday', 'Monday', 'Tuesday', 'Wedenesday', 'Thursday', 'Friday', 'Sunday'],
            datasets: [
              {
                label: 'Total XP',
                fill: false,
                lineTension: 0,
                backgroundColor: 'rgba(43,47,142, 0.8)',
                borderColor: 'rgba(43,47,142, 0.8)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(43,47,142, 0.8)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 5,
                pointHoverRadius: 7,
                pointHoverBackgroundColor: 'rgba(43,47,142, 0.8)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 5,
                pointRadius: 2,
                pointHitRadius: 10,
                data: [11327759, 11927759, 12237759, 12327759, 13327759, 16647259, 18327759]
                
              }
            ],
          };
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