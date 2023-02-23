import React from "react";
import {
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
  Button,
} from "react-bootstrap";
import bigStar from "../assets/bigStar.png";

const DevicePage = () => {
  const device = {
    id: 1,
    name: "IPhone 14 pro",
    price: 120000,
    rating: 5,
    img: `../../imgs/f5d15c4de9c5fb584555e79d796545bd.jpeg`,
  };

  const description = [
    { id: 1, title: "Оперативная память", description: "5гб" },
    { id: 2, title: "Камера", description: "12мп" },
    { id: 3, title: "Процессор", description: "Snapdragon" },
    { id: 4, title: "Кол-во ядер", description: "2" },
    { id: 5, title: "Аккумулятор", description: "4000" },
  ];

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Form className="d-flex align-items-center flex-column">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Form>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>От: {device.price} руб.</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {description.map((info, index) => {
          return (
            <Row
              key={info.id}
              style={{
                background: index % 2 === 0 ? "lightgray" : "transparent",
                padding: 10,
              }}
            >
              {info.title}: {info.description}
            </Row>
          );
        })}
      </Row>
    </Container>
  );
};

export default DevicePage;
