import React from "react"
import { Row, Form, Table } from "react-bootstrap"
import ScheduleItems from "./ScheduleItems"

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
