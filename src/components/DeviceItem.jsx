import React from "react";
import { Card, Col, Image } from "react-bootstrap";

import STAR from "../images/star.png";

const DeviceItem = ({ device }) => {
  console.log(device);
  return (
    <Col md={3} className="mr-2 mt-4">
      <Card border={"light"} style={{ width: "170px", cursor: "pointer" }}>
        <Image src={device.img} width={170} height={170} />
        <div className="d-flex justify-content-between align-items-center ">
          <div className="text-black-50">Samsung...</div>

          <div className=" mt-2 d-flex jusctify-content-between align-items-center">
            <div>{device.rating}</div>
            <Image width={15} height={15} src={STAR} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
