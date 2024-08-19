import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "..";

export default function DeviceTypeBar() {
  const { device } = useContext(Context);

  return (
    <ListGroup className="mt-5">
      {device.types.map((type) => (
        <ListGroup.Item key={type}>{type.name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}
