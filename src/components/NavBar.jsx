import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Context } from "../index";
import { SHOP_ROUTE } from "../utils/consts";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <NavLink
          style={{
            color: "black",
            fontWeight: 600,
            textDecoration: "none",
            textTransform: "uppercase",
          }}
          to={SHOP_ROUTE}
        >
          Buy Device
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button
              className="me-2"
              variant={"outline-dark"}
              style={{ fontWeight: 600 }}
            >
              Админ панель
            </Button>
            <Button
              onClick={() => user.setIsAuth(false)}
              variant={"outline-dark"}
              style={{ fontWeight: 600 }}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              onClick={() => user.setIsAuth(true)}
              variant={"outline-dark"}
              style={{ fontWeight: 600 }}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
