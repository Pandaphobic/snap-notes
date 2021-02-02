import React, { useState, useContext } from "react";
import { ScheduleContext } from "../../contexts/ScheduleContext";

import { InputGroup, Button, Row, Form, Container } from "react-bootstrap";

const ScheduleDropBox = () => {
  const { updateSchedule } = useContext(ScheduleContext);
  // Schedule State things
  const [rawSchedule, setRawSchedule] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // REGEX filter to parse schedule
    // currently only catch: phone, break, lunch, coaching
    let regex_raw_items = /(?<=Investors Group )(.*)|(?= Tech)(.*)|(?= Phone)(.*)|(?= Break)(.*)|(?= Lunch)(.*)|(?= Coaching)(.*)(AM|PM)|(?= Meeting)(.*)(AM|PM)|(?= Corr)(.*)(AM|PM)|(?= Training)(.*)(AM|PM)/gm;
    // Grab incoming dropped text and returns RE matches to array
    let parsedScheduleItems = rawSchedule.match(regex_raw_items);
    // console.log(coughtScheduleItems)
    updateSchedule(parsedScheduleItems);
    // Update state with new array of schedule items
    // setScheduleItems({ scheduleItems: parsedScheduleItems })

    document.querySelector("textarea").value = "";
  };

  return (
    <>
      <Row className="m-auto pt-3">
        <Container className="w-75 p-0">
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <Button type="submit" variant="outline-secondary">
                  {"Update  "}
                  <i className="fas fa-sm fa-sync-alt"></i>
                </Button>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                as="textarea"
                spellCheck="false"
                style={{ overflow: "hidden", resize: "none" }}
                className="drop-schedule bg-secondary"
                placeholder="drag schedule here"
                rows={1}
                onChange={e => setRawSchedule(e.target.value)}
              />
            </InputGroup>
          </Form>
        </Container>
      </Row>
    </>
  );
};

export default ScheduleDropBox;
