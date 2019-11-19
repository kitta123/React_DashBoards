import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import axios from 'axios';

export default class PieChartComponent extends Component
{
   constructor(props) {
      super(props);
      this.state = {
        Data: {}
      }
    }

    componentDidMount() {
      axios.get(`https://forbes400.herokuapp.com/api/forbes400?limit=10`)
        .then(res => {
          const forbes = res.data;
          let data = [['Name','Net Worth']];
          forbes.forEach(element => {
            let data1 = [];
            let worth = ((element.finalWorth)/1000);
            data1.push(element.personName);
            data1.push(worth);
            data.push(data1);
          });
          this.setState({
            Data:data
           });
        })
    }
 render()
   {
      return(
        <div className='jumbotron' style={{ backgroundColor: '#CCFFFF' }} >
            <h3 >Pie Chart :</h3>
            <br/>
            <Chart
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data= { this.state.Data }
              width={'1000px'}
              height={'500px'}
              options= {{
                           chartArea: { width: '50%' },
                          title: 'Top 10 richest people in the world',
                      }}
            />
     </div>
      )
   }
}
