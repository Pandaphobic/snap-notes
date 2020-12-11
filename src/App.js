// Stylesheets
import "./App.css"
import "../src/style/bootstrap.min.css" // Bootswatch - Darkly

// Dependancies
import { Navbar, Nav } from "react-bootstrap"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"

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
          <Navbar.Brand href="/">SNAP Assist</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Notes</Nav.Link>
            <Nav.Link href="/schedule">Schedule</Nav.Link>
            <Nav.Link href="/outages">Outages</Nav.Link>
          </Nav>
        </Navbar>

        <Router className="m-auto">
          <Switch>
            <Route path="/" exact component={Notes} />
            <Route path="/schedule" exact component={Schedule} />
            <Route path="/outages" exact component={Outages} />
          </Switch>
        </Router>

        <Footer />
      </div>
    </div>
  )
}

export default App
