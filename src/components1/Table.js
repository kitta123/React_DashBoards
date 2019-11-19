import React from 'react';

const Table = ({ users }) => {
  return (
    <div className='table-responsive-md'>
    <table className="table table-bordered table-sm table-hover text-center font-italic" style={{ backgroundColor:'#ffeecc' }}>
      <thead className='thead-dark'>
          <tr className='text-white'>
              <th>Position</th>
              <th>Rank</th>
              <th>Name</th>
              <th>RealTimeWorth</th>
              <th>Source</th>
              <th>Country</th>
          </tr>
      </thead>
      <tbody>
      { (users.length > 0) ? users.map( (user, index) => {
               return (
                <tr key={ index }>
                  <td>{ user.position }</td>
                  <td>{ user.rank }</td>
                  <td>{ user.personName }</td>
                  <td>{ user.finalWorth }</td>
                  <td>{ user.source }</td>
                  <td>{ user.countryOfCitizenship }</td>
                </tr>
              )
       }) : <tr><td colSpan="5">Loading…</td></tr>
      }
      </tbody>
    </table>
    </div>
  );
}
export default Table;
