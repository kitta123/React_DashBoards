import React, { Component } from 'react';
import Table5 from './Table5.js';

class RegUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
       email:null,
       password:null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = event =>{
        this.setState({ [event.target.name]:event.target.value })
      }

handleSubmit = event =>{
event.preventDefault();
const url ="https://reqres.in/api/register"
const data = { email:this.state.email, password:this.state.password }
fetch(url, { method: 'POST',
              body: JSON.stringify(data),
              headers:{ 'Content-Type': 'application/json'} })
.then(res => res.json())
.then(users => this.setState({ users }))

}

  render() {
    return (
      <div className="container">
      <br/>
                    <center>  <h4 style={{ color: 'black' }}> Register User</h4> </center>
                    <br/>
      <form onSubmit={this.handleSubmit}>
        Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <input type="text" placeholder='enter email' name="email" onChange={this.handleChange} /><br/>
        Password : &nbsp;&nbsp;&nbsp;<input type="text" placeholder='enter password'  name="password" onChange={this.handleChange} /><br/>
          <input type="submit" value="Register" /> </form>
          <br/>
          <center>  <h4 style={{ color: 'black' }}> Registered User Details</h4> </center>
          <br/>
            <Table5  users={ this.state.users } />
    </div>


    );
  }
}

export default RegUser;
