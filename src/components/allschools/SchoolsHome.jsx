import React from "react";
import SchoolsTable from "./SchoolsTable"; // Import the new table component
import schoolsData from "../../dummydata";

const SchoolsHome = () => {
  return (
    <div className="container">
      <h1>Schools</h1>
      <SchoolsTable schoolsData={schoolsData} /> {/* Render the table component */}
    </div>
  );
};

export default SchoolsHome;
