import React, { useState, useContext } from "react"
import { ScheduleContext } from "../../contexts/ScheduleContext"

import { Col, Button, Row, Form } from "react-bootstrap"

const ScheduleDropBox = () => {
  const { updateSchedule } = useContext(ScheduleContext)
  // Schedule State things
  const [rawSchedule, setRawSchedule] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    // REGEX filter to parse schedule
    // currently only catch: phone, break, lunch, coaching
    let regex_raw_items = /(?<=Investors Group )(.*)|(?= Tech)(.*)|(?= Phone)(.*)|(?= Break)(.*)|(?= Lunch)(.*)|(?= Coaching)(.*)(AM|PM)|(?= Meeting)(.*)(AM|PM)/gm
    // Grab incoming dropped text and returns RE matches to array
    let parsedScheduleItems = rawSchedule.match(regex_raw_items)
    // console.log(coughtScheduleItems)
    updateSchedule(parsedScheduleItems)
    // Update state with new array of schedule items
    // setScheduleItems({ scheduleItems: parsedScheduleItems })

    document.querySelector("textarea").value = ""
  }

  return (
    <>
      <Row className="m-auto pt-3">
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Control type="text" as="textarea" spellCheck="false" style={{ overflow: "hidden", resize: "none" }} className="drop-schedule bg-secondary" placeholder="drag schedule here (ctrl+a then drag whole page)" rows={1} onChange={e => setRawSchedule(e.target.value)} />
            <Button type="submit">{"Update"}</Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default ScheduleDropBox
