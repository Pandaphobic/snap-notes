import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";

const fontWeight = {
  fontWeight: "600",
};

const textarea = {
  fontWeight: "600",
  lineHeight: "1.20",
  fontSize: "14px",
  border: "none",
  margin: "0",
  padding: "5px",
};

let userID = () => {
  let lsUserID = localStorage.getItem("userID");
  return lsUserID ? lsUserID : "";
};

let phone = () => {
  let lsphone = localStorage.getItem("phone");
  return lsphone ? lsphone : "";
};

let region = () => {
  let lsregion = localStorage.getItem("region");
  return lsregion ? lsregion : "";
};

let advisorCode = () => {
  let lsadvisorCode = localStorage.getItem("advisorCode");
  return lsadvisorCode ? lsadvisorCode : "";
};
let fullname = () => {
  let lsfullname = localStorage.getItem("fullname");
  return lsfullname ? lsfullname : "";
};

let quickNotes = () => {
  let lsquickNotes = localStorage.getItem("quickNotes");
  return lsquickNotes ? lsquickNotes : "";
};

function handleChange(e) {
  console.log(e.target.name);
  localStorage.setItem(e.target.name, e.target.value);
}

console.log(userID());

function CallNotes() {
  let handleClear = () => {
    document.querySelector("#checkbox").checked = false;
    document.querySelector("#name").checked = false;
    document.querySelectorAll("input").forEach(input => (input.value = ""));
    document.querySelector("textarea").value = "";
    localStorage.removeItem("userID");
    localStorage.removeItem("phone");
    localStorage.removeItem("region");
    localStorage.removeItem("advisorCode");
    localStorage.removeItem("fullname");
    localStorage.removeItem("quickNotes");
  };

  let handleCopy = () => {
    let copyTextArea = document.querySelector('textarea[name="copyInfo"]');

    let userIDCopy = userID();
    let phoneCopy = phone();
    let regionCopy = region();

    copyTextArea.value = `UserID: ${userIDCopy} \nPhone Number: ${phoneCopy} \nRO: ${regionCopy}`;
    copyTextArea.select();
    copyTextArea.setSelectionRange(0, 99999);
    document.execCommand("copy");
  };

  let handleFlip = () => {
    let raw;
    let fullname = [];
    let nameInput = document.querySelector("#fullname");
    raw = nameInput.value;

    // Look for the separating Character and remove spaces
    // Expected input is either Lastname, Firstname or Firstname Lastname
    if (raw.includes(",")) {
      fullname = raw.split(",");
      // Remove spaces
      let fixedName = fullname.map(name => {
        return name.trim();
      });
      // Detect if <email@domain.com> present and remove it
      if (fixedName[1].includes("<")) {
        let temp1 = fixedName[1].split("<");
        fixedName[1] = temp1[0].trim();
      }
      nameInput.value = `${fixedName[1]} ${fixedName[0]}`;
    } else {
      fullname = raw.split(" ");
      // Remove spaces
      let fixedName = fullname.map(name => {
        return name.trim();
      });
      let outputName = fixedName.filter(name => name !== "");
      nameInput.value = `${outputName[1]}, ${outputName[0]}`;
    }

    nameInput.select();
  };

  // Steffes, Chris <chris.steffes@ig.ca>

  return (
    <Container className="w-75">
      <br />
      <Row className="mb-2">
        <Col>
          <Form.Label>User ID</Form.Label>
          <Form.Control
            onChange={e => handleChange(e)}
            name="userID"
            style={fontWeight}
            type="text"
            placeholder="exampt1"
            defaultValue={userID()}
          />
        </Col>
        <Col>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            onChange={e => handleChange(e)}
            name="phone"
            style={fontWeight}
            type="text"
            placeholder="xxx-xxx-xxxx ext xxxx"
            defaultValue={phone()}
          />
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <Form.Label>Region</Form.Label>
          <Form.Control
            onChange={e => handleChange(e)}
            name="region"
            style={fontWeight}
            type="text"
            placeholder="XX"
            defaultValue={region()}
          />
        </Col>
        <Col>
          <Form.Label>Advisor Code</Form.Label>
          <Form.Control
            onChange={e => handleChange(e)}
            name="advisorCode"
            style={fontWeight}
            type="text"
            placeholder="code"
            defaultValue={advisorCode()}
          />
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
            <Form.Control
              onChange={e => handleChange(e)}
              name="fullname"
              id="fullname"
              style={fontWeight}
              type="text"
              placeholder="Lastname, Firstname"
              defaultValue={fullname()}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className="w-100 m-auto">
        <Form.Label>Quick Notes </Form.Label>
        <Form.Control
          onChange={e => handleChange(e)}
          name="quickNotes"
          style={textarea}
          as="textarea"
          rows={5}
          defaultValue={quickNotes()}
        />
        <Col>
          <Form.Check className="mt-2"
            inline
            label="INC Offered"
            type="checkbox"
            id="checkbox"
          />
          <Form.Check className="mt-2"
            inline
            label="name"
            type="checkbox"
            id="name"
          />
        </Col>
      </Row>
      <Row className="w-100 m-auto">
        <Form.Control
          onChange={e => handleChange(e)}
          name="copyInfo"
          style={{ position: "fixed", right: "-10000px" }}
          as="textarea"
          rows={5}
          defaultValue={""}
        />
      </Row>

      {/* Buttons */}
      <Row className="mt-3">
        <Button
          style={fontWeight}
          variant="outline-danger"
          onClick={handleClear}
          className="m-auto col-5"
        >
          Clear All <i className="fas fa-eraser"></i>
        </Button>

        <Button
          style={fontWeight}
          variant="outline-info"
          onClick={handleCopy}
          className="m-auto col-5"
        >
          Copy Info <i className="fas fa-copy"></i>
        </Button>
      </Row>
    </Container>
  );
}

export default CallNotes;
