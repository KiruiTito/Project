// Home.jsx
import React from "react";
import SchoolsTable from "../allschools/SchoolsTable"; // Import the SchoolsTable component

const Home = () => {
  return (
    <div className="container">
      <h1>Schools</h1>
      <SchoolsTable /> {/* Use the SchoolsTable component here */}
    </div>
  );
};

export default Home;
