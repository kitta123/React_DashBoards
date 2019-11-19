import React, { Component } from 'react';
import Table4 from './Table4.js';

class DeleteUser extends Component {
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
              fetch(url+this.state.i_d, { method: 'DELETE',
                            body: JSON.stringify({id:this.state.i_d}),
                            headers:{ 'Content-Type': 'application/json'} })
              .then(res => res.json())
              .then(users => this.setState({  users }))
  }

  render() {
        return (
                <div className="container">
                <br/>
                    <center>  <h4 style={{ color: 'black' }}> Delete User Details By Id</h4> </center>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                    ID:  <input type="text" placeholder='enter user id' name="i_d" onChange={this.handleChange} /> &nbsp;&nbsp;
                    <input type="submit" value="Delete" /> </form>
                    <br/>
                    <center>  <h4 style={{ color: 'black' }}>  User-{ this.state.i_d }  Status</h4> </center>
                    <br/>
                    <Table4  id={ this.state.i_d } />
                </div>
              );
    }
  }

export default DeleteUser;
