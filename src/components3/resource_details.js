import '../App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ResFirstPage from "./list_resource1";
import ResSecondPage from "./list_resource2";

class Res extends Component {
  render() {
    
    return (
      <Router >
              <div className="container">
              <br/>
                            <center>  <h4 style={{ color: 'black' }}> Resource Details</h4> </center>
                            <br/><br/>
                              <div style={{ display: "flex", justifyContent:'center', alignItems:'center' }} >
                                    <button className="btn btn-secondary">
                                        <Link to="/unknown/page/1" style={{ textDecoration: 'none',color: 'white' }}><h6 >First &nbsp; Page</h6></Link>
                                    </button> &nbsp;&nbsp;
                                      <button  className="btn btn-secondary">
                                        <Link to="/unknown/page/2" style={{ textDecoration: 'none',color: 'white' }}><h6 >Second &nbsp; Page</h6></Link>
                                      </button>
                                </div><br/>
                        <Route path="/unknown/page/1" exact component={ResFirstPage} />
                        <Route path="/unknown/page/2" component={ResSecondPage} />
                </div>
      </Router>
    );
  }
}

export default Res;
