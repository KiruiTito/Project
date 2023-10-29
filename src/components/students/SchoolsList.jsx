import React from 'react';
import School from './School'; // Import the School component
import { schools } from './dummyData';

function SchoolsList() {
  return (
    <div>
      {schools.map((school) => (
        <div key={school.id}>
          <h2>{school.name}</h2>
          <School school={school} /> {/* Pass school data as props */}
        </div>
      ))}
    </div>
  );
}

export default SchoolsList;
