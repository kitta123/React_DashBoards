import React, { Component } from 'react';
import Table from './Table.js';

class DelayedRes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
   fetch('https://reqres.in/api/users?delay=3')
   .then(res => res.json())
   .then(json => json.data)
   .then(users => this.setState({ users }))
 }
  render() {
    return (
      <div className="container">
      <br/>
      <center>  <h4 style={{ color: 'black' }}> Users Details</h4> </center>
      <br/><br/>
        <Table users={ this.state.users } />
      </div>
    );
  }
}

export default DelayedRes;
