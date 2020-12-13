import React, { useContext } from "react"
import { OutageContext } from "./OutageContext"
import OutageDetails from "./OutageDetails"
import OutageForm from "./OutageForm"

const OutageList = () => {
  const { outages } = useContext(OutageContext)
  // ternary if outages is not empty
  return outages.length ? (
    <div className="App">
      <table className="outage-list">
        <thead>
          <th>Scope</th>
          <th>Title</th>
          <th>Instruction</th>
          <th>Master Ticket</th>
        </thead>
        {outages.map(outage => (
          <OutageDetails key={outage.id} outage={outage} />
        ))}
      </table>
      {/* <OutageForm addOutage={addOutage} /> */}
    </div>
  ) : (
    <div className="empty">No Outages to Display</div>
  )
}

export default OutageList
