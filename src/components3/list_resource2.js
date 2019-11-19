import React, { Component } from 'react';
import RTable from './Resource_Table1.js';

class ResSecondPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
   fetch('https://reqres.in/api/unknown?page=2')
   .then(res => res.json())
   .then(json => json.data)
   .then(users => this.setState({ users }))

 }
  render() {
    return (
      <div className="container">
        <RTable users={ this.state.users } />
      </div>
    );
  }
}

export default ResSecondPage;
