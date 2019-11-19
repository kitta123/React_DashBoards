import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import App1 from "./components1/App.js";
import App2 from "./components2/App.js";
import App3 from "./components3/App.js";
import App4 from "./components4/App.js";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
  return (
    <BrowserRouter>
        <div className="jumbtron">

              <div className="sidenav">
              <Link to="/GoogleCharts" style={{ color:'white',textDecoration: 'none',outline: 'none'}}><h6>&nbsp;&nbsp;&nbsp;<i class="fa fa-angle-double-right" aria-hidden="true"></i>
&nbsp;&nbsp;Google-Charts</h6></Link>
              <Link to="/ReactCharts" style={{ color:'white',textDecoration: 'none',outline: 'none'}}><h6>&nbsp;&nbsp;&nbsp;<i class="fa fa-angle-double-right" aria-hidden="true"></i>
&nbsp;&nbsp;React-Charts</h6></Link>
              <Link to="ApiCall" style={{ color:'white',textDecoration: 'none',outline: 'none'}}><h6>&nbsp;&nbsp;&nbsp;<i class="fa fa-angle-double-right" aria-hidden="true"></i>
&nbsp;&nbsp;Api-Call</h6></Link>
              <Link to="SignInForm" style={{ color:'white',textDecoration: 'none',outline: 'none'}}><h6>&nbsp;&nbsp;&nbsp;<i class="fa fa-angle-double-right" aria-hidden="true"></i>
&nbsp;&nbsp;Sign-In-Form</h6></Link>
              <h6 style={{ paddingTop: "460px",color:'white' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-flag fa-0x pull-left"></i>&nbsp;&nbsp;Version &nbsp;v.4.6 </h6>
              </div>
              <div className="main">
              <div>
              <nav className="navbar navbar-expand-sm  navbar-dark fixed-top" style={{background:'#444242'}}>
              <a href='http://localhost:3000' style={{textDecoration: 'none'}}><h4 style={{ color:'white' }}>&nbsp;<i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp;Home</h4></a><br/>
                   <div className="ml-auto">
                       <form className="form-inline" action="/action_page.php">
                         <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                         <button className="btn btn-secondary" type="submit">Search</button>
                       </form>
                   </div>
              </nav><br/><br/>
              </div>
              <Switch>
                  <Route path="/GoogleCharts"  exact component={App1} />
                  <Route path="/ReactCharts"  component={App2} />
                  <Route path="/ApiCall"  component={App3} />
                  <Route path="/SignInForm"  component={App4} />
                  </Switch>
              </div>

        </div>
    </BrowserRouter>

  );
}
}

export default App;
