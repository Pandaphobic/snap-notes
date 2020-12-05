import React from "react"
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap"

const fontWeight = {
  fontWeight: "600"
}

function Ticket() {
  let handleClear = () => {
    document.querySelectorAll("input").forEach(input => (input.value = ""))
    document.querySelector("textarea").value = ""
  }

  let handleFlip = () => {
    let raw
    let fullname = []
    let nameInput = document.querySelector("#fullname")
    raw = nameInput.value

    let re = /\,/

    if (raw.includes(",")) {
      fullname = raw.split(", ")
      console.log(fullname)
      nameInput.value = `${fullname[1]} ${fullname[0]}`
    } else {
      fullname = raw.split(" ")
      nameInput.value = `${fullname[1]}, ${fullname[0]}`
    }
  }
  return (
    <Container className="w-75">
      <br />
      <Row className="mb-2">
        <Col>
          <Form.Label>User ID</Form.Label>
          <Form.Control style={fontWeight} type="text" placeholder="user id" />
        </Col>
        <Col>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control style={fontWeight} type="text" placeholder="xxx-xxx-xxxx ext xxxx" />
        </Col>
      </Row>

      <Row className="mb-2">
        <Col>
          <Form.Label>Previous Ticket</Form.Label>
          <Form.Control style={fontWeight} type="text" placeholder="INCXXXXXXX" />
        </Col>
        <Col>
          <Form.Label>Advisor Code</Form.Label>
          <Form.Control style={fontWeight} type="text" placeholder="code" />
        </Col>
      </Row>
      {/* Full Name Section */}
      <Row className="mb-2">
        <Col>
          <Form.Label>Full Name</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button onClick={handleFlip} variant="outline-secondary">
                <i class="fas fa-sync-alt"></i>
              </Button>
            </InputGroup.Prepend>
            <Form.Control id="fullname" style={fontWeight} type="text" placeholder="Lastname, Firstname" />
          </InputGroup>
        </Col>
      </Row>

      <Row className="w-100 m-auto">
        <Form.Label>Quick Notes</Form.Label>
        <Form.Control style={fontWeight} as="textarea" rows={3} />
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
