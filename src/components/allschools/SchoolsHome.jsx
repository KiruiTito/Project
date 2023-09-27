import React from "react";
import schoolsData from "../../dummydata";

const SchoolsHome = () => {
  return (
    <div className="container">
      <h1>Schools</h1>
      <div className="table-container">
        <div className="table-header">
          <div className="table-cell id">ID</div>
          <div className="table-cell name">Name</div>
          <div className="table-cell location">Location</div>
          <div className="table-cell sublocation">Sublocation</div>
          <div className="table-cell address">Address</div>
        </div>
        {schoolsData.map((school) => (
          <div className="table-row" key={school.id}>
            <div className="table-cell id">{school.id}</div>
            <div className="table-cell name">{school.name}</div>
            <div className="table-cell location">{school.location}</div>
            <div className="table-cell sublocation">{school.sub_location}</div>
            <div className="table-cell address">{school.address}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolsHome;
