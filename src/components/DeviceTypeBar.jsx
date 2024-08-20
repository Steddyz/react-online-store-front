import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const DeviceTypeBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <ListGroup className="mt-4">
      {device.types.map((type) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          active={type.id === device.selectedType.id}
          onClick={() => {
            device.getSelectedType(type);
          }}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default DeviceTypeBar;
