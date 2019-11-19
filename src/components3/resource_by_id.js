import React, { Component } from 'react';
import RTable1 from './Resource_Table2.js';

class ResById extends Component {
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
      const url ="https://reqres.in/api/unknown/"
      fetch(url+this.state.i_d)
      .then(res => res.json())
      .then(json => json.data)
      .then(users => this.setState({  users }))
      }

  render() {
    return (
      <div className="container">
      <br/>
                    <center>  <h4 style={{ color: 'black' }}> Resource Details By Id</h4> </center>
                    <br/>
      <form onSubmit={this.handleSubmit}>
        ID:  <input type="text" placeholder='enter user id' name="i_d" onChange={this.handleChange} /> &nbsp;&nbsp;
          <input type="submit" value="Get user" /> </form>
          <br/>
          <center>  <h4 style={{ color: 'black' }}> Resource-{ this.state.i_d }  Details</h4> </center>
          <br/>
            <RTable1  users={ this.state.users } />
      </div>
    );
  }
}

export default ResById;
