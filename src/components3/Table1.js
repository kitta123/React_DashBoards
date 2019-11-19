import React from 'react';

const Table1 = ({ users }) => {
  return (
    <table className="table table-bordered table-sm table-hover text-center" style={{backgroundColor:'white'}}>
      <thead className="thead-dark ">
        <tr className='text-dark'>
          <th>Id</th>
          <th>Email</th>
          <th>F_Name</th>
          <th>L_Name</th>
          <th>Avatar</th>
        </tr>
      </thead>
      <tbody>
      { (users.id < 13) ?
          <tr >
            <td>{ users.id}</td>
            <td>{ users.email }</td>
            <td>{ users.first_name }</td>
            <td>{ users.last_name }</td>
            <td>{ users.avatar }</td>
          </tr>
         : <tr><td colSpan="5">Loading…</td></tr> }
      </tbody>
    </table>
  );
}

export default Table1
