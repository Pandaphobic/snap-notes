import React, { useState } from "react"
import { Button, Modal, Form, Row, Col } from "react-bootstrap"

function Outage({ outage, index }) {
  return (
    <tr className="outage">
      <td>{outage.scope}</td>
      <td>{outage.title}</td>
      <td>{outage.instruction}</td>
      <td>{outage.masterTicket}</td>
    </tr>
  )
}

function OutageForm({ addOutage }) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [scope, setScope] = useState("")
  const [title, setTitle] = useState("")
  const [instruction, setInstruction] = useState("")
  const [masterTicket, setMasterTicket] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if (!scope) return
    if (!title) return
    if (!instruction) return
    if (!masterTicket) return
    addOutage(scope, title, instruction, masterTicket)
    setScope("")
    setTitle("")
    setInstruction("")
    setMasterTicket("")
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
                  <Form.Control size="sm" defaultValue="Scope" as="select" value={scope} onChange={e => setScope(e.target.value)}>
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
            <Button type="submit" variant="primary" onClick={(handleSubmit, handleClose)}>
              Add Outage
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

function OutageTracker() {
  const [outages, setOutages] = useState([
    {
      scope: "P1",
      title: "Problems #1",
      instruction: "Relate",
      masterTicket: "PRB000111"
    },
    {
      scope: "P2",
      title: "Problems #2 - Electric Boogaloo",
      instruction: "Duplicate",
      masterTicket: "PRB000666"
    },
    {
      scope: "P3",
      title: "Problems #3 - And the prisoner of Azkaban",
      instruction: "Email Info",
      masterTicket: "PRB001975"
    }
  ])

  const addOutage = (scope, title, instruction, masterTicket) => {
    const newOutages = [...outages, { scope, title, instruction, masterTicket }]
    setOutages(newOutages)
  }

  return (
    <div className="App">
      <table className="outage-list">
        <thead>
          <th>Scope</th>
          <th>Title</th>
          <th>Instruction</th>
          <th>Master Ticket</th>
        </thead>
        {outages.map((outage, index) => (
          <Outage key={index} index={index} outage={outage} />
        ))}
      </table>
      {/* <OutageFormModal addOutage={addOutage} /> */}
      <OutageForm addOutage={addOutage} />
    </div>
  )
}

export default OutageTracker
