import React from "react";

const SchoolsTable = ({ schoolsData }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Sublocation</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {schoolsData.map((school) => (
            <tr key={school.id}>
              <td>{school.id}</td>
              <td>{school.name}</td>
              <td>{school.location}</td>
              <td>{school.sub_location}</td>
              <td>{school.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SchoolsTable;
