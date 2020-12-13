import React, { useContext } from "react"
import { OutageContext } from "./OutageContext"

const OutageDetails = ({ outage }) => {
  const { removeOutage } = useContext(OutageContext)
  return (
    <tr className="outage" id={outage.id}>
      <td>{outage.scope}</td>
      <td>{outage.title}</td>
      <td>{outage.instruction}</td>
      <td>{outage.masterTicket}</td>
      <i class="fa fa-trash fa-xs" aria-hidden="true" onClick={() => removeOutage(outage.id)}></i>
    </tr>
  )
}

export default OutageDetails
