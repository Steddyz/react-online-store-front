import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DeviceTypeBar from "../components/DeviceTypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

export default function Shop() {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <DeviceTypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
}
