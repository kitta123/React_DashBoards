import React, { Component } from 'react';
import {Polar} from 'react-chartjs-2';
import axios from 'axios';

export default class PolarChartComponent extends Component
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
            let worth = ((element.finalWorth)/1000);
            worths.push(worth);
          });
          this.setState({
            Data: {
              labels: names,
              datasets:[
                 {
                    label:'Top 10 richest people in the world',
                    data: worths ,
                    backgroundColor:[
                     'rgba(255,105,145,0.6)',
                     'rgba(155,100,210,0.6)',
                     'rgba(90,178,255,0.6)',
                     'rgba(240,134,67,0.6)',
                     'rgba(120,120,120,0.6)',
                     'rgba(250,55,197,0.6)',
                     'rgba(128,0,0,0.6)',
                     'rgba(0,255,0,0.6)',
                     'rgba(0,0,0,0.6)',
                     'rgba(255,255,0,0.6)'
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
        <div className='jumbotron' style={{ backgroundColor: '#CCFFFF' }} >
            <h3 >Polar Area Chart :</h3>
            <br/>
            <Polar
                    data= { this.state.Data }
                    height= { 300 }
                    options= {{
                                responsive: true,
                                title: { display: true, text: 'Top 10 richest people in the world' },
                                maintainAspectRatio: false,
                                layout: { padding: { left: 50, right: 20, top: 0, bottom: 5 }}
                            }}
            />
     </div>
      )
   }
}
