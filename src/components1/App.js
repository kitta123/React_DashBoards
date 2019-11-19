import React, { Component } from 'react';
import BarChartComponent from './BarChartComponent';
import PieChartComponent from './PieChartComponent';
import DoughnutChartComponent from './DoughnutChartComponent';
import HistogramChartComponent from './HistogramChartComponent';
import LineChartComponent from './LineChartComponent';
import TableData from './TableComponent'
import { BrowserRouter, Route, Link, Switch  } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

class App1 extends Component {
  render() {
    document.body.style.backgroundColor='lightblue';
    return (
              <BrowserRouter>
                  <div className="jumbtron">
                        <br/>
                        <p>There are many, many public APIs available in the world,
                        many of which are rich with neat and useful data.
                        Let’s use one of them to demonstrate how real-time data can be used to populate a chart.
                        I’m going to use the Forbes 400 Rich List API to graph out the top 10 richest people in the world.
                        I know, cool, eh?! I always find wealth rankings interesting, and there is so much more data this API provides.
                        But for now, we will request data to display a chart with names and real time net worth.</p>
                        <br/>
                        <TableData />
                        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                          <a className="navbar-brand" href="www.google.com"><h4 style={{ color: 'white' }}> Google Charts</h4></a>
                            <ul className="navbar-nav ml-auto">
                              <li className="nav-item dropdown">

                                   <a className="nav-link dropdown-toggle" href="www.google.com" id="navbardrop" data-toggle="dropdown">
                                         Select Chart
                                   </a> 
                               <div className="dropdown-menu font-italic">
                                             <Link className="dropdown-item" to="/BarChart">&nbsp; BarChart</Link>
                                             <Link className="dropdown-item" to="/DoughnutChart">&nbsp;DoughnutChart</Link>
                                             <Link className="dropdown-item" to="/PieChart">&nbsp; PieChart</Link>
                                             <Link className="dropdown-item" to="/LineChart">&nbsp; LineChart</Link>
                                             <Link className="dropdown-item" to="/HistogramChart">&nbsp; HistogramChart</Link>

                                 </div>
                               </li>
                             </ul>
                        </nav>
                        <Switch>
                        <Route path="/BarChart" exact component={BarChartComponent} />
                        <Route path="/DoughnutChart" exact component={DoughnutChartComponent} />
                        <Route path="/PieChart"  component={PieChartComponent} />
                        <Route path="/LineChart"  component={LineChartComponent} />
                        <Route path="/HistogramChart"  component={HistogramChartComponent} />
                        </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App1;
