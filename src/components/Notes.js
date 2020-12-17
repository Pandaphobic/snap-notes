import React, { useState, useEffect, useContext } from "react"
import { CallerNotesContext } from "../contexts/NotesContext"

import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap"

const fontWeight = {
  fontWeight: "600"
}

function Ticket() {
  const notes = useContext(CallerNotesContext)

  const [callerUserID, setCallerUserID] = useState("")
  const [callerPhone, setCallerPhone] = useState("")
  const [callerPrevTicket, setCallerPrevTicket] = useState("")
  const [advisorCode, setAdvisorCode] = useState("")
  const [callerName, setCallerName] = useState("")
  const [callNotes, setCallNotes] = useState("")

  let handleClear = () => {
    document.querySelectorAll("input").forEach(input => (input.value = ""))
    document.querySelector("textarea").value = ""
  }

  let handleFlip = () => {
    let raw
    let fullname = []
    let nameInput = document.querySelector("#fullname")
    raw = nameInput.value

    // Look for the separating Character and remove spaces
    // Expected input is either Lastname, Firstname or Firstname Lastname
    if (raw.includes(",")) {
      fullname = raw.split(",")
      // Remove spaces
      let fixedName = fullname.map(name => {
        return name.trim()
      })
      nameInput.value = `${fixedName[1]} ${fixedName[0]}`
    } else {
      fullname = raw.split(" ")
      // Remove spaces
      let fixedName = fullname.map(name => {
        return name.trim()
      })
      let outputName = fixedName.filter(name => name !== "")
      nameInput.value = `${outputName[1]}, ${outputName[0]}`
    }
  }

  return (
    <Container className="w-75">
      <br />
      <Row className="mb-2">
        <Col>
          <Form.Label>User ID</Form.Label>
          <Form.Control onChange={e => setCallerUserID(e.target.value)} style={fontWeight} type="text" placeholder="user id" />
        </Col>
        <Col>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control onChange={e => setCallerPhone(e.target.value)} style={fontWeight} type="text" placeholder="xxx-xxx-xxxx ext xxxx" />
        </Col>
      </Row>

      <Row className="mb-2">
        <Col>
          <Form.Label>Previous Ticket</Form.Label>
          <Form.Control onChange={e => setCallerPrevTicket(e.target.value)} style={fontWeight} type="text" placeholder="INCXXXXXXX" />
        </Col>
        <Col>
          <Form.Label>Advisor Code</Form.Label>
          <Form.Control onChange={e => setAdvisorCode(e.target.value)} style={fontWeight} type="text" placeholder="code" />
        </Col>
      </Row>
      {/* Full Name Section */}
      <Row className="mb-2">
        <Col>
          <Form.Label>Full Name</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button onClick={handleFlip} variant="outline-secondary">
                <i className="fas fa-sync-alt"></i>
              </Button>
            </InputGroup.Prepend>
            <Form.Control onChange={e => setCallerName(e.target.value)} id="fullname" style={fontWeight} type="text" placeholder="Lastname, Firstname" />
          </InputGroup>
        </Col>
      </Row>

      <Row className="w-100 m-auto">
        <Form.Label>Quick Notes</Form.Label>
        <Form.Control onChange={e => setCallNotes(e.target.value)} style={fontWeight} as="textarea" rows={3} />
      </Row>
      <Row className="mb-2">
        <Button style={fontWeight} onClick={handleClear} className="btn-block btn-info m-3">
          Clear All <i className="fas fa-eraser"></i>
        </Button>
      </Row>
    </Container>
  )
}

export default Ticket
