// SchoolsInfo.jsx
import React, { useState } from "react";
import schoolsData from "../../dummydata";
import SchoolsTable from "./SchoolsTable"; // Import the SchoolsTable component
import SchoolsSearch from "./SchoolsSearch"; // Import the SchoolsSearch component

const SchoolsInfo = () => {
  const [filteredSchools, setFilteredSchools] = useState(schoolsData);

  const handleSearch = (searchQuery) => {
    // Implement the search logic here to filter schoolsData based on the searchQuery
    const filtered = schoolsData.filter((school) => {
      // Implement your search criteria (e.g., name, location, address)
      return (
        school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        school.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        school.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    setFilteredSchools(filtered);
  };

  return (
    <div>
      <h1>Schools Information</h1>
      <SchoolsSearch onSearch={handleSearch} />
      <SchoolsTable schools={filteredSchools} />
    </div>
  );
};

export default SchoolsInfo;
