import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SchoolsHome from "./components/allschools/SchoolsHome";
import StudentsList from "./components/students/StudentsList"; // Import StudentsList
import { schools as sampleSchools, students } from "./dummyData"; // Rename 'schools' to 'sampleSchools'

function App() {
  const [fetchedSchools, setFetchedSchools] = useState([]); // Change variable name to avoid conflicts

  useEffect(() => {
    fetch("http://localhost:4000/schools")
      .then((res) => res.json())
      .then((data) => setFetchedSchools(data)) // Update state variable
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <SchoolsHome schools={fetchedSchools} /> {/* Pass the fetched data as a prop */}
            <StudentsList students={students} /> {/* Pass the students data as a prop */}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
