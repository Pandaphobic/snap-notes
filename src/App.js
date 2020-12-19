// Stylesheets
import "./App.css"
import "../src/style/bootstrap.min.css" // Bootswatch - Darkly

// Dependancies
import { Container } from "react-bootstrap"
import { Route } from "react-router-dom"

// Contexts
import OutageContextProvider from "./contexts/OutageContext"
import ScheduleContextProvider from "./contexts/ScheduleContext"

// Components
import Footer from "./components/Footer"
import Schedule from "./components/schedule/Schedule"
import CallNotes from "./components/Notes/CallNotes"
import Navigation from "./components/Navigation"
import OutageList from "./components/OutageTracker/OutageList"
import ScheduleDropBox from "./components/schedule/ScheduleDropBox"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container className="mt-5">
        <Route exact path="/notes">
          <CallNotes />
        </Route>

        <Route path="/schedule">
          <ScheduleContextProvider>
            <Schedule />
            <ScheduleDropBox />
          </ScheduleContextProvider>
        </Route>

        <Route exact path="/outages">
          <OutageContextProvider>
            <OutageList />
          </OutageContextProvider>
        </Route>
      </Container>

      <br />
      <Footer />
    </div>
  )
}

export default App
