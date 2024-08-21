import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import BIG_START from "../images/bigStar.png";

const DecivePage = () => {
  const device = {
    id: 1,
    name: "Iphone 11",
    price: 1500,
    rating: 4,
    img: `https://imgholder.ru/400x300/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson`,
  };

  const description = [
    { id: 1, title: "RAM", description: "5gb" },
    { id: 2, title: "CAM", description: "12 mp" },
    { id: 3, title: "CPU", description: "Apple A14 Bionic" },
    { id: 4, title: "Сores", description: "2" },
    { id: 5, title: "Battery", description: "4000" },
  ];

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <Image src={device.img} height={300} width={320} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column  align-items-center">
            <h2 className="d-flex justify-content-center">{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${BIG_START}) no-repeat center center`,
                width: 255,
                height: 255,
                bacgrundSize: "cover",
                fontSize: 58,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{ width: 300, height: 300, fontSize: 32 }}
          >
            <h3>Price from {device.price}$</h3>
            <Button style={{ width: 200 }} variant="outline-dark">
              Add to card
            </Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3 mt-2">
        <h2 className="mt-2 mb-4">Characteristics</h2>
        {description.map((desc, index) => (
          <Row
            key={index}
            className="p-3"
            style={{ background: index % 2 === 0 ? "#ccc" : "transparent" }}
          >
            {desc.title}: {desc.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DecivePage;
