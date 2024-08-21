import React from "react";
import { Card, Col, Image } from "react-bootstrap";

import STAR from "../images/star.png";
import { useNavigate } from "react-router-dom";
import { DEVISE_ROUTE } from "../utils/const";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();

  return (
    <Col
      md={3}
      className="mr-2 mt-4"
      onClick={() => navigate(DEVISE_ROUTE + "/" + device.id)}
    >
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
