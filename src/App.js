import React, { useState } from "react";
import "./App.css"
import Header from "./components/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allschools/SchoolsHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import SearchForm from "./SearchForm"
function SchoolsInfo() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [schoolData, setSchoolData] = useState([]); // Replace with your school data

  // Function to handle dropdown selection
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div>
      <h1>Schools Information</h1>
      <label htmlFor="locationDropdown">Select Location:</label>
      <select id="locationDropdown" value={selectedLocation} onChange={handleLocationChange}>
        {/* Populate dropdown options dynamically based on your school data */}
        <option value="">Select a location</option>
        {/* Map through your school data to generate options */}
        {schoolData.map((school) => (
          <option key={school.id} value={school.location}>
            {school.location}
          </option>
        ))}
      </select>
      
      {/* Display the table based on the selected location */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Sublocation</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through your school data to generate table rows */}
          {schoolData
            .filter((school) => school.location === selectedLocation)
            .map((school) => (
              <tr key={school.id}>
                <td>{school.id}</td>
                <td>{school.name}</td>
                <td>{school.location}</td>
                <td>{school.sub_location}</td>
                <td>{school.address}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          {/* Add a new route for SchoolsInfo */}
          <Route exact path='/schools' component={SchoolsInfo} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
