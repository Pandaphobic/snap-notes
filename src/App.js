// Stylesheets
import "./App.css"
import "../src/style/bootstrap.min.css" // Bootswatch - Darkly

// Dependancies
import { Container } from "react-bootstrap"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"

// Contexts
import OutageContextProvider, { BookContext } from "./components/OutageTracker/OutageContext"

// Components
import Outages from "./components/OutageTracker/OutageTracker"
import Footer from "./components/Footer"
import Schedule from "./components/schedule/Schedule"
import Notes from "./components/Notes"
import Navigation from "./components/Navigation"
import OutageTracker from "./components/OutageTracker/OutageTracker"

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Container className="mt-5">
          <Switch>
            <Route path="/" exact>
              <Notes />
            </Route>
            <Route path="/schedule" exact component={Schedule} />
            <Route>
              <OutageContextProvider path="/outages" exact>
                <OutageTracker />
              </OutageContextProvider>
            </Route>
          </Switch>
        </Container>
      </Router>

      <Footer />
    </div>
  )
}

export default App
