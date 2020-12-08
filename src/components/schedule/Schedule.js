import React from "react"
import { Table } from "react-bootstrap"

function Schedule() {
  return (
    <div className="w-75 m-auto">
      <h3>{`TODAY`}</h3>
      <Table size="sm" striped bordered hover>
        <tbody>
          <tr>
            <td>Start</td>
            <td contentEditable>8:30 AM</td>
          </tr>
          <tr>
            <td>Break</td>
            <td contentEditable>10:00 AM</td>
          </tr>
          <tr>
            <td>Lunch</td>
            <td contentEditable>12:00 PM</td>
          </tr>
          <tr>
            <td>Break</td>
            <td contentEditable>2:45 PM</td>
          </tr>
          <tr>
            <td>Done</td>
            <td contentEditable>4:30 PM</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Schedule
