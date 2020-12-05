import "./App.css"
import Ticket from "./components/Ticket"
import { Tabs, Tab } from "react-bootstrap"
import "../src/style/bootstrap.min.css" // Bootswatch - Darkly

function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="notes" id="uncontrolled-tab-example">
        <Tab eventKey="notes" title="Call Notes">
          <Ticket />
        </Tab>
        <Tab eventKey="outages" title="Outages">
          this is something
        </Tab>
      </Tabs>
    </div>
  )
}

export default App
