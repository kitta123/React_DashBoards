import React from 'react';

const Table2 = ({ users }) => {
  return (
    <table className="table table-bordered table-sm table-hover text-center" style={{backgroundColor:'white'}}>
      <thead className='thead-dark'>
        <tr className='text-dark'>
          <th>Name</th>
          <th>Job</th>
          <th>Id</th>
          <th>Created_At</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>{ users.name }</td>
            <td>{ users.job }</td>
            <td>{ users.id }</td>
            <td>{ users.createdAt }</td>
          </tr>
      </tbody>
    </table>
  );
}

export default Table2
