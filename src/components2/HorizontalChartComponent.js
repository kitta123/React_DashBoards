import React, { Component } from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import axios from 'axios';

export default class HorizontalChartComponent extends Component
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
            let names = [];
            let worths = [];
            forbes.forEach(element => {
              names.push(element.personName);
              let worth = ((element.finalWorth) / 1000 );
              worths.push(worth);
            });
            this.setState({
              Data: {
                labels: names,
                datasets:[
                   {
                      label:' Real Time Net Worth',
                      data: worths ,
                      backgroundColor:[
                       'rgba(90,178,255,0.6)',
                       'rgba(90,178,255,0.6)',
                       'rgba(90,178,255,0.6)',
                       'rgba(90,178,255,0.6)',
                       'rgba(90,178,255,0.6)',
                       'rgba(90,178,255,0.6)',
                       'rgba(90,178,255,0.6)',
                       'rgba(90,178,255,0.6)',
                       'rgba(90,178,255,0.6)',
                       'rgba(90,178,255,0.6)'
                    ]
                   }
                ]
             }
             });
          })
      }
 render()
   {
      return(
          <div className="jumbotron" style={{ backgroundColor:'#CCFFFF' }}>
          <h3 >Horizontal Bar Chart :</h3>
          <br/>
          <HorizontalBar
                          data = { this.state.Data }
                          height={ 300 }
                          options = {{
                                      scales: {
                                                  xAxes: [{ scaleLabel: { display: true, labelString: '$Billion' } }],
                                                  yAxes: [{ scaleLabel: { display: true, labelString: 'Name' } }],
                                                },
                                       title: { display: true, text: 'Top 10 richest people in the world'},
                                       responsive: true,
                                       maintainAspectRatio: false,
                                       layout: { padding: { left: 50, right: 20, top: 0, bottom: 5 }  }
                                  }}
           />
        </div>
      )
   }
}
