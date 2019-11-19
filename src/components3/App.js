import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Users from "./users_details";
import UserById from "./user_by_id"
import CreateUser from "./create_user"
import Res from "./resource_details"
import ResById from "./resource_by_id"
import UpdateUserPut from "./update_user_put"
import UpdateUserPatch from "./update_user_patch"
import DeleteUser from "./delete_user"
import RegUser from "./register_user"
import RegUnUser from "./register_un_user"
import DelayedRes from "./delayed_response"

class App3 extends Component {
  render() {
    //document.body.style.backgroundColor='#ffffaa'
    document.body.style.backgroundColor='lightblue';
    return (
      <Router >
              <div className="jumbtron">
                  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <a className="navbar-brand" href="www.google.com"><h4 style={{ color: 'white' }}> Req | Res</h4></a>
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">

                         <a className="nav-link dropdown-toggle" href="www.google.com" id="navbardrop" data-toggle="dropdown">
                               Dropdown link
                         </a>
                         <div className="dropdown-menu font-italic">
                                       <Link className="dropdown-item" to="/users">Users &nbsp; Details</Link>
                                       <Link className="dropdown-item" to="/users/1">User &nbsp;By&nbsp;Id</Link>
                                       <Link className="dropdown-item" to="/create/users">Create &nbsp; User</Link>
                                       <Link className="dropdown-item" to="/unknown">Respurce &nbsp; Details</Link>
                                       <Link className="dropdown-item" to="/unknown/1">Resource &nbsp; By &nbsp; Id</Link>
                                       <Link className="dropdown-item" to="/update/users/put">Update &nbsp; By &nbsp; PUT</Link>
                                       <Link className="dropdown-item" to="/update/users/patch">Update &nbsp; By &nbsp; PATCH</Link>
                                       <Link className="dropdown-item" to="/delete/users">Delete &nbsp; User</Link>
                                       <Link className="dropdown-item" to="/user/register">Register &nbsp; User</Link>
                                       <Link className="dropdown-item" to="/user/register/fail">Register&nbsp;Unsuccessful</Link>
                                       <Link className="dropdown-item" to="/delayed/response">Delayed &nbsp; Response</Link>
                           </div>
                         </li>
                       </ul>
                  </nav>
                  <Route path="/users" exact component={Users} />
                  <Route path="/users/1"  component={UserById} />
                  <Route path="/create/users"  component={CreateUser} />
                  <Route path="/unknown"  component={Res} />
                  <Route path="/unknown/1"  component={ResById} />
                  <Route path="/update/users/put"  component={UpdateUserPut} />
                  <Route path="/update/users/patch"  component={UpdateUserPatch} />
                  <Route path="/delete/users"  component={DeleteUser} />
                  <Route path="/user/register"  component={RegUser} />
                  <Route path="/user/register/fail"  component={RegUnUser} />
                  <Route path='/delayed/response'  component={DelayedRes} />
              </div>
      </Router>
    );
  }
}

export default App3;
