import React from 'react';

const Table = ({ users }) => {
  return (
    <div className='table-responsive-md'>
    <table className="table table-bordered table-sm table-hover text-center font-italic" style={{backgroundColor:'white'}}>
      <thead className='thead-dark'>
        <tr className='text-white'>
          <th>Id</th>
          <th>Email</th>
          <th>F_Name</th>
          <th>L_Name</th>
          <th>Avatar</th>
        </tr>
      </thead>
      <tbody>
      { (users.length > 0) ? users.map( (user, index) => {
         return (
          <tr key={ index }>
            <td>{ user.id }</td>
            <td>{ user.email }</td>
            <td>{ user.first_name}</td>
            <td>{ user.last_name }</td>
            <td>{ user.avatar }</td>
          </tr>
        )
       }) : <tr><td colSpan="5">Loading…</td></tr> }
      </tbody>
    </table>
    </div>
  );
}

export default Table
