import "./App.css"
import Ticket from "./components/Ticket"
import { Tabs, Tab } from "react-bootstrap"
import "../src/style/bootstrap.min.css" // Bootswatch - Darkly
import Outages from "./components/Outages"

function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="notes" id="uncontrolled-tabs">
        <Tab eventKey="notes" title="Call Notes">
          <Ticket />
        </Tab>
        <Tab eventKey="outages" title="Outages">
          <Outages />
        </Tab>
      </Tabs>
    </div>
  )
}

export default App
