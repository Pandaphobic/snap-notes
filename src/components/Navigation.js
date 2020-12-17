import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import React from "react"

function Navigation() {
  return (
    <Navbar className="p-1" fixed="top" bg="dark" variant="dark">
      <Navbar.Brand className="pl-3" href="/notes">
        SNAP Assist
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} className="m-1 p-1 link" to="/notes">
          Notes
        </Nav.Link>
        <Nav.Link as={Link} className="m-1 p-1 link" to="/schedule">
          Schedule
        </Nav.Link>
        <Nav.Link as={Link} className="m-1 p-1 link" to="/outages">
          Outages
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Navigation
