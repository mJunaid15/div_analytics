import React from "react";
import { Accordion } from "react-bootstrap";

const Accord = (props) => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{props.heading} </Accordion.Header>
          <Accordion.Body>{props.body}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header> {props.heading2}</Accordion.Header>
          <Accordion.Body>{props.body2}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>{props.heading3}</Accordion.Header>
          <Accordion.Body>{props.body3}</Accordion.Body>
        </Accordion.Item>
      </Accordion>

     
    </>
  );
};

export default Accord;
