import React from 'react';

const RTable1 = ({ users }) => {
  return (
    <table className="table table-bordered table-sm table-hover text-center" style={{backgroundColor:'white'}}>
      <thead className='thead-dark'>
        <tr className='text-dark'>
        <th>Id</th>
        <th>Name</th>
        <th>Year</th>
        <th>Color</th>
        <th>Pantone_Value</th>
        </tr>
      </thead>
      <tbody>
        { (users.id < 13) ?
          <tr >
          <td>{ users.id }</td>
          <td>{ users.name }</td>
          <td>{ users.year}</td>
          <td>{ users.color }</td>
          <td>{ users.pantone_value }</td>
          </tr>
           : <tr><td colSpan="5">Loading…</td></tr> }
      </tbody>
    </table>
  );
}

export default RTable1
