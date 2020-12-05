import "./App.css"
import Ticket from "./components/Ticket"
import { Tabs, Tab, Accordion, Card } from "react-bootstrap"
import "../src/style/bootstrap.min.css" // Bootswatch - Darkly

function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="outages" id="uncontrolled-tab-example">
        <Tab eventKey="outages" title="Outages">
          this is something
        </Tab>
        <Tab eventKey="notes" title="Call Notes">
          <Ticket />
        </Tab>
      </Tabs>
    </div>
  )
}

export default App
