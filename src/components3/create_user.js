import React, { Component } from 'react';
import Table2 from './Table2.js';

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
       name:null,
       job:null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = event =>{
        this.setState({ [event.target.name]:event.target.value })
      }

handleSubmit = event =>{
event.preventDefault();
const url ="https://reqres.in/api/users"
const data = { name:this.state.name, job:this.state.job }
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
                    <center>  <h4 style={{ color: 'black' }}> Create User</h4> </center>
                    <br/>
      <form onSubmit={this.handleSubmit}>
        Name:  <input type="text" placeholder='enter name' name="name" onChange={this.handleChange} /><br/>
        Job : &nbsp;&nbsp;&nbsp;<input type="text" placeholder='enter job'  name="job" onChange={this.handleChange} /><br/>
          <input type="submit" value="Create" /> </form>
          <br/>
          <center>  <h4 style={{ color: 'black' }}> Created User Details</h4> </center>
          <br/>
            <Table2  users={ this.state.users } />
    </div>


    );
  }
}

export default CreateUser;
