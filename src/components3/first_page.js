import React, { Component } from 'react';
import Table from './Table.js';

class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
   fetch('https://reqres.in/api/users?page=1')
   .then(res => res.json())
   .then(json => json.data)
   .then(users => this.setState({ users }))
 }
  render() {
    return (
      <div className="container">
        <Table users={ this.state.users } />
      </div>
    );
  }
}

export default FirstPage;
