import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

import CreateBrand from "../components/modals/CreateBrand";
import AddCreateType from "../components/modals/AddCreateType";
import AddCreateDevice from "../components/modals/AddCreateDevice";

export default function Admin() {
  const [typeVisible, setTypeVisible] = useState(false);
  const [brandVisible, setBrandVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button
        onClick={() => setTypeVisible(true)}
        variant="outline-dark"
        className="p-3 mt-4"
      >
        Add type
      </Button>
      <Button
        onClick={() => setBrandVisible(true)}
        variant="outline-dark"
        className="p-3 mt-4"
      >
        Add brand
      </Button>
      <Button
        onClick={() => setDeviceVisible(true)}
        variant="outline-dark"
        className="p-3 mt-4"
      >
        Add device
      </Button>
      <AddCreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <AddCreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
    </Container>
  );
}
