import React from "react"
import { Table } from "react-bootstrap"
import DropSchedule from "./DropSchedule"

function Schedule() {
  return (
    <div className="w-75 m-auto">
      <h3>{`TODAY`}</h3>
      <DropSchedule />
    </div>
  )
}

export default Schedule