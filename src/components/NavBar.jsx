import React, { useContext } from "react";
import { Context } from "..";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";

import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/const";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink to={SHOP_ROUTE} style={{ color: "white" }} href="#home">
          Device Shop
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button variant={"outline-light"} style={{ marginRight: "10px" }}>
              Admin panel
            </Button>
            <Button
              variant={"outline-light"}
              onClick={() => user.setIsAuth(false)}
            >
              Log out
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant={"outline-light"}
              onClick={() => user.setIsAuth(true)}
            >
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
