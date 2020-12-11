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
import Navigation from "./components/Navigation"

function App() {
  return (
    <div className="App">
      <div className="m-auto">
        <Router className="m-auto">
          <Navigation />

          <Switch>
            <Route path="/" exact>
              <Notes />
            </Route>
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
