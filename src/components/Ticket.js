import React from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

const fontWeight = {
  fontWeight: "600"
}

function Ticket() {
  let handleClear = () => {
    document.querySelectorAll("input").forEach(input => (input.value = ""))
    document.querySelector("textarea").value = ""
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
          <Form.Label>Advisor Code</Form.Label>
          <Form.Control style={fontWeight} type="text" placeholder="code" />
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <Form.Label>Previous Ticket</Form.Label>
          <Form.Control style={fontWeight} type="text" placeholder="INCXXXXXXX" />
        </Col>
        <Col>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control style={fontWeight} type="text" placeholder="xxx-xxx-xxxx ext xxxx" />
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <Form.Label>Full Name</Form.Label>
          <Form.Control style={fontWeight} type="text" placeholder="Firstname Lastname" />
        </Col>
        <Col>
          <Form.Label>Region Number</Form.Label>
          <Form.Control style={fontWeight} type="text" placeholder="ro number" />
        </Col>
      </Row>
      <Row className="w-100 m-auto">
        <Form.Label>Quick Notes</Form.Label>
        <Form.Control style={fontWeight} as="textarea" rows={3} />
      </Row>
      <Row className="mb-2">
        <Button style={fontWeight} onClick={handleClear} className="btn-block m-3">
          Clear All <i className="fas fa-eraser"></i>
        </Button>
      </Row>
    </Container>
  )
}

export default Ticket
