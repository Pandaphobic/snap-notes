import React, { useContext } from "react"
import { OutageContext } from "../../contexts/OutageContext"

const OutageDetails = ({ outage }) => {
  const { dispatch } = useContext(OutageContext)
  return (
    <tr className="outage" id={outage.id}>
      <td>{outage.scope}</td>
      <td>{outage.title}</td>
      <td>{outage.instruction}</td>
      <td>{outage.masterTicket}</td>
      <td>
        <i className="fa fa-trash fa-xs" style={{ cursor: "pointer" }} aria-hidden="true" onClick={() => dispatch({ type: "REMOVE_OUTAGE", id: outage.id })}></i>
      </td>
    </tr>
  )
}

export default OutageDetails
