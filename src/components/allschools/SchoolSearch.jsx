// SchoolsSearch.jsx
import React, { useState } from "react";

const SchoolsSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Implement the search logic here
    onSearch(searchQuery);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name, location, or address"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SchoolsSearch;
