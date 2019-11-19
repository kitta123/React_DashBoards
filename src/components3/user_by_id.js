import React, { Component } from 'react';
import Table1 from './Table1.js';

class UserById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
       i_d:null
    }
    this.handleChange = this.handleChange.bind(this)
  }
    handleChange = event =>{
        this.setState({ [event.target.name]:event.target.value })
      }
      handleSubmit = event =>{
      event.preventDefault();
      const url ="https://reqres.in/api/users/"
      fetch(url+this.state.i_d)
      .then(res => res.json())
      .then(json => json.data)
      .then(users => this.setState({  users }))
      .catch(error => console.error('Error:', error));
      }

  render() {
    return (
      <div className="container">
      <br/>
          <center>  <h4 style={{ color: 'black' }}> User Details By Id</h4> </center>
          <br/>
          <form onSubmit={this.handleSubmit}>
          ID:  <input type="text" placeholder='enter user id' name="i_d" onChange={this.handleChange} /> &nbsp;&nbsp;
          <input type="submit" value="Get user" /> </form>
          <br/>
          <center>  <h4 style={{ color: 'black' }}>  User-{ this.state.i_d }  Details</h4> </center>
          <br/>
          <Table1  users={ this.state.users } />
      </div>
    );
  }
}

export default UserById;
