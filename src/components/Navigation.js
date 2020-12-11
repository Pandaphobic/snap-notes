import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import React from "react"

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">SNAP Assist</Navbar.Brand>
      <Nav className="mr-auto">
        <Link className="m-1 link" to="/">
          Notes
        </Link>
        <Link className="m-1 link" to="/schedule">
          Schedule
        </Link>
        <Link className="m-1 link" to="/outages">
          Outages
        </Link>
      </Nav>
    </Navbar>
  )
}

export default Navigation
