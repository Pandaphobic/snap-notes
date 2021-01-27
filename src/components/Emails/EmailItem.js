import React, { Component } from "react";
import { Accordion, Card, Form } from "react-bootstrap";

function EmailItem(props) {
  let title = props.title;
  let content = props.content;
  return (
    <>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          {title}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            {" "}
            <Form.Control as="textarea" rows={8} value={content} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
}

export default EmailItem;
