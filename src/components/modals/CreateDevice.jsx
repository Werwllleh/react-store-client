import React, { useContext, useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { Context } from "../../index";

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новое устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="d-flex flex-column">
          <Dropdown className="m-2">
            <Dropdown.Toggle>Выбери тип</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => {
                return <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>;
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="m-2">
            <Dropdown.Toggle>Выбери бренд</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => {
                return (
                  <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="m-2"
            placeholder={"Введите название устройства"}
          />
          <Form.Control
            type="number"
            className="m-2"
            placeholder={"Введите стоимость устройства"}
          />
          <Form.Control
            type="file"
            className="m-2"
            placeholder={"Введите название устройства"}
          />
          <hr />
          <Button variant="outline-dark">Добавить новое свойство</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>
          Закрыть
        </Button>
        <Button variant={"outline-success"} onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
