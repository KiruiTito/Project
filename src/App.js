import "./App.css"
import Header from "./components/common/heading/Heading"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allschools/SchoolsHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import { useEffect, useState } from "react"
function App() {

  const [schools, setSchools] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/schools")
    .then(res=>res.json())
    .then(data=>setSchools(data))
    .catch(err=>console.log(err))
  })

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home schools={schools}/>
          </Route>
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App