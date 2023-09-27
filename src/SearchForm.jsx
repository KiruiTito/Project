import React, { useEffect, useState } from 'react';

function SearchPage() {
  const [schools, setSchools] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSchools, setFilteredSchools] = useState([]);

  useEffect(() => {
    // Fetch data from your JSON file or API
    fetch('/path-to-your-json-file/db.json')
      .then((response) => response.json())
      .then((data) => {
        setSchools(data);
        setFilteredSchools(data); // Initialize filtered schools with all schools
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = () => {
    // Filter schools based on search query
    const filtered = schools.filter((school) =>
      school.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSchools(filtered);
  };

  return (
    <div>
      <h1>Schools in Your Region</h1>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Sublocation</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {filteredSchools.map((school) => (
            <tr key={school.id}>
              <td>{school.name}</td>
              <td>{school.location}</td>
              <td>{school.sublocation}</td>
              <td>{school.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchPage;
