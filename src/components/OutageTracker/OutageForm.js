import React, { useContext, useState } from "react"
import { OutageContext } from "../../contexts/OutageContext"

import { Button, Col, Form, Modal, Row } from "react-bootstrap"

const OutageForm = () => {
  const { dispatch } = useContext(OutageContext)

  // Outage State things
  const [scope, setScope] = useState("")
  const [title, setTitle] = useState("")
  const [instruction, setInstruction] = useState("")
  const [masterTicket, setMasterTicket] = useState("")

  // Modal State things
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // Modal Submit Handling
  const handleSubmit = e => {
    e.preventDefault()
    // Check if any content
    if (!scope) return
    if (!title) return
    if (!instruction) return
    if (!masterTicket) return
    // If content, call add outage with the following info
    dispatch({
      type: "ADD_OUTAGE",
      outage: {
        scope,
        title,
        instruction,
        masterTicket
      }
    })
    // Clear fields
    setScope("")
    setTitle("")
    setInstruction("")
    setMasterTicket("")
    handleClose()
  }

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Add Outage
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Outage</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row>
              <Col sm="8">
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                </Form.Group>
              </Col>
              <Col sm="4">
                <Form.Group>
                  <Form.Label>Master Ticket</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Master Ticket" value={masterTicket} onChange={e => setMasterTicket(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Scope</Form.Label>
                  <Form.Control size="sm" as="select" value={scope} onChange={e => setScope(e.target.value)}>
                    <option>Scope</option>
                    <option>P1</option>
                    <option>P2</option>
                    <option>P3</option>
                    <option>P4</option>
                    <option>RES</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Instruction</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Instruction" value={instruction} onChange={e => setInstruction(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleSubmit}>
              Add Outage
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default OutageForm
