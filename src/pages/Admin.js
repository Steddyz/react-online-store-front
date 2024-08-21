import React from "react";
import { Button, Container } from "react-bootstrap";

import CreateBrand from "../components/modals/CreateBrand";
export default function Admin() {
  return (
    <Container className="d-flex flex-column">
      <Button variant="outline-dark" className="p-3 mt-4">
        Add type
      </Button>
      <Button variant="outline-dark" className="p-3 mt-4">
        Add brand
      </Button>
      <Button variant="outline-dark" className="p-3 mt-4">
        Add device
      </Button>
      <CreateBrand show={true} />
    </Container>
  );
}
