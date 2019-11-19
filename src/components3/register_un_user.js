import React, { Component } from 'react';
import Table6 from './Table6.js';

class RegUnUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
       email:null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = event =>{
        this.setState({ [event.target.name]:event.target.value })
      }

handleSubmit = event =>{
event.preventDefault();
const url ="https://reqres.in/api/register"
const data = { email:this.state.email}
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
        Email:&nbsp;&nbsp; <input type="text" placeholder='enter email' name="email" onChange={this.handleChange} /><br/>

          <input type="submit" value="Register" /> </form>
          <br/>
          <center>  <h4 style={{ color: 'black' }}> Registered User Status</h4> </center>
          <br/>
            <Table6  users={ this.state.users } />
    </div>


    );
  }
}

export default RegUnUser;
