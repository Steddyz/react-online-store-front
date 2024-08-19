import React from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../utils/const";

export default function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card className="p-5" style={{ width: 600 }}>
        <h2 className="d-flex justify-content-center">
          {isLogin ? "Authorization" : "Registration"}
        </h2>
        <Form className="d-flex flex-column">
          <Form.Control placeholder="Enter your email..." className="mt-3" />
          <Form.Control placeholder="Enter your password..." className="mt-3" />
          <Row className="d-flex justify-content-between  ">
            {isLogin ? (
              <div className="mt-3 mb-3">
                You don't have an account?
                <NavLink to={REGISTER_ROUTE} style={{ paddingLeft: "5px" }}>
                  Sign up.
                </NavLink>
              </div>
            ) : (
              <div className="mt-3 mb-3">
                You have an account?
                <NavLink to={LOGIN_ROUTE} style={{ paddingLeft: "5px" }}>
                  Log In.
                </NavLink>
              </div>
            )}
            <Button variant={"outline-dark"}>
              {isLogin ? "Log In" : "Sign up"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}
