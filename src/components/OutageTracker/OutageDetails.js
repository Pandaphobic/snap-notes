import React, { useContext } from "react"
import { OutageContext } from "../../contexts/OutageContext"

const OutageDetails = ({ outage }) => {
  const { dispatch } = useContext(OutageContext)

  const type = () => {
    switch (outage.scope) {
      case "P1":
        return "bg-danger"
        break
      case "P2":
        return "bg-warning"
        break
      case "P3":
        return "bg-info"
        break
      case "P4":
        return "bg-primary"
        break
      case "RES":
        return "bg-success"
        break
    }
  }

  return (
    <tr className={"outage " + type()} id={outage.id}>
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
