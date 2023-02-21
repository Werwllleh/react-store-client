import React from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  return (
    <Container
      className={"d-flex justify-content-center align-items-center"}
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 style={{ fontWeight: 700 }} className="m-auto">
          Авторизация
        </h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder={"Введите email..."} />
          <Form.Control className="mt-3" placeholder={"Введите пароль..."} />
          <Form>
            <div>
              Нет аккаунта?
              <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
            </div>
            <Button
              style={{ fontWeight: 600 }}
              className="mt-3 align-self-end"
              variant="outline-success"
            >
              Войти
            </Button>
          </Form>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
