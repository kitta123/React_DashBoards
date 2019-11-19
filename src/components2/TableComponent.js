import React, { Component } from 'react';
import Table from './Table.js';

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
   fetch(`https://forbes400.herokuapp.com/api/forbes400?limit=10`)
   .then(res => res.json())
   .then(users => this.setState({ users }))
 }
  render() {
    return (
      <div className="jumbotron" style= {{ backgroundColor: '#CCFFFF' }}>
      <h4>Top 10 Richest People In The World : </h4>
      <br/>
      <Table users={ this.state.users } />
      </div>
    );
  }
}

export default TableData;
