import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DeviceTypeBar from "../components/DeviceTypeBar";
import BrandBar from "../components/BrandBar";

export default function Shop() {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <DeviceTypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
        </Col>
      </Row>
    </Container>
  );
}
