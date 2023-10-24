import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SchoolsHome from "./components/allschools/SchoolsHome";

function App() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/schools")
      .then((res) => res.json())
      .then((data) => setSchools(data))
      .catch((err) => console.error(err));
  }, []); // The empty dependency array ensures this effect runs only once.

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <SchoolsHome schools={schools} /> {/* Pass the fetched data as a prop */}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
