import React from "react";
import { Line } from 'react-chartjs-2';

class Graph extends React.Component{

    constructor(props) {
        super(props);
        this.data = {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
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
                data: [17027759, 17227759, 17267759, 17727759, 17927759, 18247259, 18327759]
                
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