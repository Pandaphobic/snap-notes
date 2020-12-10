import React from "react"
import ReactDOM from "react-dom"
import { Row, Form } from "react-bootstrap"

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
        console.log(item)
        items.push(
          <tr key={index}>
            <td>{item}</td>
          </tr>
        )
      })
      console.log(items)
      ReactDOM.render(items, document.getElementById("schedule-items"))
    }
  }

  return (
    <>
      <Row className="w-100 m-auto">
        <Form.Label>Drop Schedule</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={catchText} />
      </Row>
      <tbody>
        <tr id="schedule-items"></tr>
      </tbody>
    </>
  )
}

export default DropSchedule
