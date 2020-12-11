// Stylesheets
import "./App.css"
import "../src/style/bootstrap.min.css" // Bootswatch - Darkly

// Dependancies
import { Navbar, Nav } from "react-bootstrap"
import { Route, BrowserRouter as Router } from "react-router-dom"

// Components
import Outages from "./components/Outages"
import Footer from "./components/Footer"
import Schedule from "./components/schedule/Schedule"
import Notes from "./components/Notes"

function App() {
  return (
    <div className="App">
      <div className="m-auto">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/notes">SNAP Assist</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/notes">Notes</Nav.Link>
            <Nav.Link href="/schedule">Schedule</Nav.Link>
            <Nav.Link href="/outages">Outages</Nav.Link>
          </Nav>
        </Navbar>
        <Router className="m-auto">
          <Route path="/notes" exact component={Notes} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/outages" component={Outages} />
        </Router>

        <Footer />
      </div>
    </div>
  )
}

export default App
