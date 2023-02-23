import React from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  console.log(location);

  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className={"d-flex justify-content-center align-items-center"}
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 style={{ fontWeight: 700 }} className="m-auto">
          {isLogin ? "Авторизация" : "Регистрация"}
        </h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder={"Введите email..."} />
          <Form.Control className="mt-3" placeholder={"Введите пароль..."} />
          <div
            style={{ width: "100%" }}
            className=" d-flex mt-3 align-self-start justify-content-between"
          >
            {isLogin ? (
              <div>
                Нет аккаунта?
                <NavLink className="ps-1" to={REGISTRATION_ROUTE}>
                  Зарегистрироваться
                </NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт?
                <NavLink className="ps-1" to={LOGIN_ROUTE}>
                  Войти
                </NavLink>
              </div>
            )}

            <Button style={{ fontWeight: 600 }} variant="outline-success">
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
