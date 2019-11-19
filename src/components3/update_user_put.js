import React, { Component } from 'react';
import Table3 from './Table3.js';

class UpdateUserPut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
       name:null,
       job:null,
       i_d:null
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
fetch(url+this.i_d, { method: 'PUT',
              body: JSON.stringify(data),
              headers:{ 'Content-Type': 'application/json'} })
.then(res => res.json())
.then(users => this.setState({  users }))
}

  render() {
    return (
      <div className="container">
      <br/>
                    <center>  <h4 style={{ color: 'black' }}> Update User</h4> </center>
                    <br/>
      <form onSubmit={this.handleSubmit}>
        Id: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <input type="text" placeholder='enter id you want to update' name="i_d" onChange={this.handleChange} /><br/>
        Name: &nbsp; <input type="text" placeholder='enter name' name="name" onChange={this.handleChange} /><br/>
        Job : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder='enter job'  name="job" onChange={this.handleChange} /><br/>
          <input type="submit" value="Update" /> </form>
          <br/>
          <center>  <h4 style={{ color: 'black' }}> Updated User Details</h4> </center>
          <br/>
            <Table3  users={ this.state.users } />
    </div>


    );
  }
}

export default UpdateUserPut;
