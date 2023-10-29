import React, { useState } from "react";
import './schools.css'

const SchoolsTable = ({ schoolsData }) => {

  const locations = ["DAGORETTI", "EMBAKASI", "KAMUKUNJI", "KASARANI", "LANG'ATA", "MAKADARA", "STAREHE", "WESTLANDS"]
  const [searchName, setNameSearch] = useState("")
  const [searchLocation, setLocationSearch] = useState("")

  const filteredSchoolData = schoolsData.filter(data=>data.name.toLowerCase().includes(searchName.toLowerCase())).filter(filteredData=>filteredData.location.toLowerCase().includes(searchLocation.toLowerCase()))

  return (
    <>
      <div className="p-3">
        <div className="table-search ps-2 mb-4">
          <div className="row">
          <input type='text' placeholder="Filter using name of school" className="form-control col me-3" onChange={e=>setNameSearch(e.target.value)}/>
          <select className="form-select col" onChange={e=>setLocationSearch(e.target.value)} id="">
            <option value="">All</option>
            {locations.map(location=>
              <option value={location}>{location}</option>
            )}
          </select>
          </div>
        </div>
        <table className="table table-striped table-hover">
          <thead className=" table-header">
            <tr className="tr-head">
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">LOCATION</th>
              <th scope="col">SUBLOCATION</th>
              <th scope="col">ADDRESS</th>
            </tr>
          </thead>
          <tbody>
          {filteredSchoolData.map((school) => (
  <tr className="table-data-row" key={school.id}> {/* Add the 'key' prop here */}
    <th scope="row">{school.id}</th>
    <td>{school.name}</td>
    <td>{school.location}</td>
    <td>{school.sub_location}</td>
    <td>{school.address}</td>
  </tr>
))}

          </tbody>
        </table>
      </div>
      </>
  );
};

export default SchoolsTable;
