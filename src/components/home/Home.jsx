// Home.jsx
import React from "react";
import SchoolsTable from "../allschools/SchoolsTable"; // Import the SchoolsTable component
import SchoolsData from "../../dummydata";

const Home = ({schools}) => {
  return (
    <div className="home-container border">
      <SchoolsTable schoolsData={schools}/> {/* Use the SchoolsTable component here */}
    </div>
  );
};

export default Home;
