import React, { Component } from "react";
import {
  Accordion,
  InputGroup,
  Button,
  Tooltip,
  OverlayTrigger,
  FormControl,
} from "react-bootstrap";
import EmailItem from "./EmailItem";

function buildFileSelector() {
  const fileSelector = document.createElement("input");
  fileSelector.setAttribute("type", "file");
  fileSelector.setAttribute("multiple", "multiple");
  return fileSelector;
}

export default class EmailContainer extends Component {
  componentDidMount() {
    this.fileSelector = buildFileSelector();
  }

  handleFileSelect = e => {
    e.preventDefault();
    this.fileSelector.click();
  };

  render() {
    return (
      <>
        <InputGroup className="pt-3 mb-3">
          <InputGroup.Prepend>
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip id={`tooltip-right}`}>
                  Import Template File (.json)
                </Tooltip>
              }
            >
              <Button
                onClick={this.handleFileSelect}
                variant="outline-secondary"
              >
                <i class="fas fa-file-import"></i>{" "}
              </Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip id={`tooltip-right}`}>
                  Download Templates (.json)
                </Tooltip>
              }
            >
              <Button variant="outline-secondary">
                <i class="fas fa-download"></i>{" "}
              </Button>
            </OverlayTrigger>
          </InputGroup.Prepend>
          <FormControl placeholder="Search" aria-describedby="basic-addon1" />

          <InputGroup.Append>
            <OverlayTrigger
              placement="left"
              overlay={
                <Tooltip id={`tooltip-left}`}>Add New Email Template</Tooltip>
              }
            >
              <Button variant="outline-secondary">
                <i class="fas fa-plus"></i>
              </Button>
            </OverlayTrigger>
          </InputGroup.Append>
        </InputGroup>

        <Accordion defaultActiveKey="0">
          <EmailItem
            title={"Test Title"}
            content={"test content \nmore content \neven more content"}
          />
        </Accordion>
      </>
    );
  }
}
