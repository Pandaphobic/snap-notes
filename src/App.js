// Stylesheets
import "./App.css"
import "../src/style/bootstrap.min.css" // Bootswatch - Darkly

// Dependancies
import { Container } from "react-bootstrap"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"

// Contexts
import OutageContextProvider from "./contexts/OutageContext"

// Components
import Footer from "./components/Footer"
import Schedule from "./components/schedule/Schedule"
import Notes from "./components/Notes"
import Navigation from "./components/Navigation"
import OutageList from "./components/OutageTracker/OutageList"
import ScheduleContextProvider from "./contexts/ScheduleContext"
import ScheduleDropBox from "./components/schedule/ScheduleDropBox"

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

            <Route path="/schedule" exact>
              <ScheduleContextProvider>
                <Schedule />
                <ScheduleDropBox />
              </ScheduleContextProvider>
            </Route>

            <Route>
              <OutageContextProvider path="/outages" exact>
                <OutageList />
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
