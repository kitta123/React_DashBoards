import React from 'react';

const RTable = ({ users }) => {
  return (
    <table className="table table-bordered table-sm table-hover text-center font-italic" style={{backgroundColor:'white'}}>
      <thead className='thead-dark'>
        <tr className='text-white'>
          <th>Id</th>
          <th>Name</th>
          <th>Year</th>
          <th>Color</th>
          <th>Pantone_Value</th>
        </tr>
      </thead>
      <tbody>
      { (users.length > 0) ? users.map( (user, index) => {
         return (
          <tr key={ index }>
            <td>{ user.id }</td>
            <td>{ user.name }</td>
            <td>{ user.year}</td>
            <td>{ user.color }</td>
            <td>{ user.pantone_value }</td>
          </tr>
        )
       }) : <tr><td colSpan="5">Loading…</td></tr> }
      </tbody>
    </table>
  );
}

export default RTable
