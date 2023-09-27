import React, { useEffect, useState } from "react";
import "./schools.css"; // Create a new CSS file for school cards

// Import your JSON data from db.json
import sampleSchoolsData from "./db.json";

const SchoolsCard = () => {
  // Use the imported JSON data as your school data
  const [schools, setSchools] = useState(sampleSchoolsData);

  return (
    <>
      <section className='schoolsCard'>
        <div className='container grid2'>
          {schools.map((school, index) => (
            <div className='items' key={index}>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={school.image} alt={school.name} />
                  </div>
                </div>
                <div className='text'>
                  <h1>{school.name}</h1>
                  <div className='location'>
                    <i className='fa fa-map-marker'></i>
                    <span>{school.location}</span>
                  </div>
                  <p>{school.description}</p>
                  {/* You can add more details or links to the school's page */}
                </div>
              </div>
              <button className='outline-btn'>LEARN MORE</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SchoolsCard;
