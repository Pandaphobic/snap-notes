import React from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

function handleClearBtn() {
  alert("Something happened!")
}

function Ticket() {
  return (
    <Container className="w-75">
      <br />
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>User ID</Form.Label>
            <Form.Control type="text" placeholder="user id" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Advisor Code</Form.Label>
            <Form.Control type="text" placeholder="code" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Previous Ticket</Form.Label>
            <Form.Control type="text" placeholder="INCXXXXXXX" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="xxx-xxx-xxxx ext xxxx" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Firstname Lastname" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Region Number</Form.Label>
            <Form.Control type="text" placeholder="ro number" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Form.Label>Quick Notes</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Row>
      <Row>
        <Button onClick={handleClearBtn} className="btn-block m-3">
          Clear All
        </Button>
      </Row>
    </Container>
  )
}

export default Ticket
