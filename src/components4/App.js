import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

class App4 extends Component {
  render() {
     document.body.style.backgroundColor='lightblue';
    return (
      <Router>
        <div className="App">
            <div className="App__Aside"></div>
            <div className="App__Form">
                <div className="PageSwitcher">
                  <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                  <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                </div>

                <div className="FormTitle">
                    <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                </div>

                <Route exact path="/" component={SignUpForm} />
                <Route path="/sign-in" component={SignInForm} />
            </div>

        </div>
      </Router>
    );
  }
}

export default App4;
