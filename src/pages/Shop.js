import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DeviceTypeBar from "../components/DeviceTypeBar";

export default function Shop() {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <DeviceTypeBar />
        </Col>
        <Col md={9}></Col>
      </Row>
    </Container>
  );
}
