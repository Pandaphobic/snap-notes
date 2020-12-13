import React, { useContext } from "react"
import { OutageContext } from "../../contexts/OutageContext"
import OutageDetails from "./OutageDetails"
import OutageForm from "./OutageForm"
import { Table } from "react-bootstrap"

const OutageList = () => {
  const { outages } = useContext(OutageContext)
  // ternary if outages is not empty
  return outages.length ? (
    <div className="App">
      <Table className="outage-list">
        <thead>
          <tr>
            <td>Scope</td>
            <td>Title / Description</td>
            <td>Instruction</td>
            <td>Master</td>
          </tr>
        </thead>
        <tbody>
          {outages.map(outage => (
            <OutageDetails key={outage.id} outage={outage} />
          ))}
        </tbody>
      </Table>
      <OutageForm />
    </div>
  ) : (
    <>
      <div className="empty">No Outages to Display</div>
      <OutageForm />
    </>
  )
}

export default OutageList
