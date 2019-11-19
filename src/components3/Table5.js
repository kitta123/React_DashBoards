import React from 'react';

const Table5 = ({ users }) => {
  return (
    <table className="table table-bordered table-sm table-hover text-center" style={{backgroundColor:'white'}}>
      <thead className='thead-dark'>
        <tr className='text-dark'>
          <th>Id</th>
          <th>Token</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>{ users.id }</td>
            <td>{ users.token }</td>

          </tr>
      </tbody>
    </table>
  );
}

export default Table5
