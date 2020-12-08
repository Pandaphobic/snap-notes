import "./App.css"
import Ticket from "./components/Ticket"
import { Tabs, Tab } from "react-bootstrap"
import "../src/style/bootstrap.min.css" // Bootswatch - Darkly
import Outages from "./components/Outages"
import Footer from "./components/Footer"
import Schedule from "./components/schedule/Schedule"

function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="notes" id="uncontrolled-tabs">
        <Tab eventKey="notes" title="Call Notes">
          <Ticket />
        </Tab>
        <Tab eventKey="schedule" title="Schedule">
          <Schedule />
        </Tab>
        <Tab eventKey="outages" title="Outages" disabled="true">
          <Outages />
        </Tab>
      </Tabs>
      <Footer></Footer>
    </div>
  )
}

export default App
