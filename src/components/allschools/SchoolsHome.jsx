import React from "react";
import SchoolsTable from "./SchoolsTable";

const SchoolsHome = ({ schools }) => {
  return (
    <div className="container">
      <h1>LEARNLOCATE</h1>
      
      <SchoolsTable schoolsData={schools} /> {/* Render the table component with the fetched data */}
    </div>
  );
};

export default SchoolsHome;
