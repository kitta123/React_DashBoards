import '../App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import FirstPage from "./first_page";
import SecondPage from "./second_page";

class Users extends Component {
  render() {
    return (
      <Router >
              <div className="container">
              <br/>
                            <center>  <h4 style={{ color: 'black' }}> Users Details</h4> </center>
                            <br/><br/>
                              <div style={{ display: "flex", justifyContent:'center', alignItems:'center' }} >
                                    <button className="btn btn-secondary">
                                        <Link to="/users/page/1" style={{ textDecoration: 'none',color: 'white' }}><h6 >First &nbsp; Page</h6></Link>
                                    </button> &nbsp;&nbsp;
                                      <button  className="btn btn-secondary">
                                        <Link to="/users/page/2" style={{ textDecoration: 'none',color: 'white' }}><h6 >Second &nbsp; Page</h6></Link>
                                      </button>
                                </div><br/>
                        <Route path="/users/page/1" exact component={FirstPage} />
                        <Route path="/users/page/2" component={SecondPage} />
                </div>
      </Router>
    );
  }
}

export default Users;
