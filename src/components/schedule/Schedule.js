import React from "react"
import { Row, Form, Table } from "react-bootstrap"

function ScheduleItems(props) {
  let scheduleItems = props.items
  // Coaching is often numbered - this removes the number
  // ex. Coaching19:30 AM --> Coaching9:30 AM
  let Coaching = /(Coaching\d)/
  // Check for day of the week and differentiate
  // ****** THIS COULD BE DONE WAY BETTER*******
  let HTMLItems = []
  if (scheduleItems) {
    console.log(scheduleItems)

    let daysOfTheWeek = /Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday"/

    scheduleItems.forEach((item, index) => {
      if (Coaching.test(item)) {
        item = item.replace(Coaching, "Coaching")
      }
      if (daysOfTheWeek.test(item)) {
        HTMLItems.push(
          <tr key={index}>
            <th className="bg-info" style={{ fontSize: "18px" }}>
              {item}
            </th>
          </tr>
        )
        // Case for regular item
        // ***Should considfer color coding these
      } else {
        // Add Space between Activities and Times
        // ex. Phone9:00 AM --> Phone - 9:00 AM
        item = item.replace(/([a-z])(\d+)/g, "$1 - $2")
        HTMLItems.push(
          <tr key={index}>
            <td style={{ fontWeight: "600" }}>{item}</td>
          </tr>
        )
      }
    })
  }
  console.log(HTMLItems)

  return <tbody>{HTMLItems}</tbody>
}

function Schedule() {
  let scheduleItems = loadSchedule()
  // console.log(scheduleItems)

  function loadSchedule() {
    let existingSchedule = localStorage.getItem("schedule")
    if (existingSchedule) {
      return JSON.parse(existingSchedule)
    } else return []
  }

  function catchText(e) {
    // REGEX filter to parse schedule
    // currently only catch: phone, break, lunch, coaching
    let regex_raw_items = /(?<=Investors Group )(.*)|(?= Tech)(.*)|(?= Phone)(.*)|(?= Break)(.*)|(?= Lunch)(.*)|(?= Coaching)(.*)(AM|PM)/gm
    // Grab incoming dropped text
    let coughtText = e.target.value
    // Returns RE matches to array
    scheduleItems = coughtText.match(regex_raw_items)
    localStorage.setItem("schedule", JSON.stringify(scheduleItems))

    document.querySelector("textarea").value = ""
  }

  return (
    <div className="w-75 m-auto">
      <h4 className="pt-2">{`THIS WEEK`}</h4>
      <Table striped bordered hover variant="dark" className="m-auto">
        <ScheduleItems items={scheduleItems} />
      </Table>

      <Row className="m-auto pt-3">
        <Form.Control as="textarea" spellCheck="false" style={{ overflow: "hidden", resize: "none" }} className="drop-schedule bg-secondary" placeholder="drag schedule here (ctrl+a then drag whole page)" rows={1} onChange={catchText} />
      </Row>
    </div>
  )
}

export default Schedule
