import React from "react"
import ReactDOM from "react-dom"
import { Row, Form, Table } from "react-bootstrap"

function DropSchedule() {
  // REGEX filter to parse schedule
  // currently only catch: phone, break, lunch, coaching
  let re = /(?<=Investors Group )(.*)|(?=Phone)(.*)|(?=Break)(.*)|(?=Lunch)(.*)|(?=Coaching)(.*)/gm

  function catchText(e) {
    // Grab incoming dropped text
    let coughtText = e.target.value
    // Returns RE matches to array
    let scheduleItems = coughtText.match(re)

    console.log(coughtText)
    console.log(scheduleItems)

    let items = []

    if (scheduleItems) {
      scheduleItems.forEach((item, index) => {
        if (item.includes("Monday")) {
          items.push(
            <tr className="bg-info" key={index}>
              <th>{item}</th>
            </tr>
          )
        } else if (item.includes("Tuesday")) {
          items.push(
            <tr className="bg-info" key={index}>
              <th>{item}</th>
            </tr>
          )
        } else if (item.includes("Wednesday")) {
          items.push(
            <tr className="bg-info" key={index}>
              <th>{item}</th>
            </tr>
          )
        } else if (item.includes("Thursday")) {
          items.push(
            <tr className="bg-info" key={index}>
              <th>{item}</th>
            </tr>
          )
        } else if (item.includes("Friday")) {
          items.push(
            <tr className="bg-info" key={index}>
              <th>{item}</th>
            </tr>
          )
        } else if (item.includes("Saturday")) {
          items.push(
            <tr className="bg-info" key={index}>
              <th>{item}</th>
            </tr>
          )
        } else if (item.includes("Sunday")) {
          items.push(
            <tr className="bg-info" key={index}>
              <th>{item}</th>
            </tr>
          )
        } else {
          items.push(
            <tr key={index}>
              <td>{item}</td>
            </tr>
          )
        }
      })
      console.log(items)
      ReactDOM.render(items, document.getElementById("schedule-items"))
    }
  }

  return (
    <>
      <Table striped bordered hover variant="dark" className="m-auto">
        <tbody id="schedule-items"></tbody>
      </Table>

      <Row className="m-auto">
        <Form.Control as="textarea" className="drop-schedule bg-secondary" placeholder="drag schedule here (ctrl+a then drag whole page)" rows={1} width="1" onChange={catchText} />
      </Row>
    </>
  )
}

export default DropSchedule
