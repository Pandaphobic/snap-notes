import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, {useState} from "react";

function Navigation() {
  const [count, setCount] = useState(0)
  
  const style = {
    color: "#DDDDDD"
  }

  return (
    <Navbar className="p-1" fixed="top" bg="dark" variant="dark">
      <Navbar.Brand className="pl-3" href="/notes">
        SNAP Assist
      </Navbar.Brand>

        <Nav.Link style={style} as={Link} className="m-1 p-1 link" to="/notes">
          Notes
        </Nav.Link>

        <Nav.Link style={style} as={Link} className="m-1 p-1 link" to="/outages">
          Outages
        </Nav.Link>

        <Nav.Link style={style} as={Link} className="m-1 p-1 link" to="/schedule">
          Schedule
        </Nav.Link>

        <Nav.Link style={style} as={Link} onClick={()=> setCount(count +1)} className="ml-5 m-1 p-1 link">
         Count: {count}
        </Nav.Link>
        {/* <Nav.Link
          disabled="true"
          as={Link}
          className="m-1 p-1 link"
          to="/Emails"
        >
          Emails
        </Nav.Link > */}
    </Navbar>
  );
}

export default Navigation;
