import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import logo from "../assets/logo.png";

function Header() {
  const user = useSelector((state) => state.admin);
  console.log(user.name);
  let dispatch = useDispatch();

  let navigate = useNavigate();

  let handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <>
      <Navbar expand="lg" className="nav">
        <Container>
          <Navbar.Brand href="/" style={{ marginTop: 18 }}>
            <Image
              src={logo}
              roundedCircle
              style={{ width: 65, marginRight: 20, height: 65 }}
            />
            <span style={{ marginLeft: 200, fontSize: 40, color: "#FAEF5D" }}>
              SREE KAIRAASI MOTAR FINANCE (P) LTD.
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {user.name ? (
                <Button
                  onClick={handleLogout}
                  style={{ color: "white", backgroundColor: "#6FDCE3" }}
                >
                  LogOut
                </Button>
              ) : (
                <Nav.Link href="/login" style={{ color: "white" }}>
                  Login
                </Nav.Link>
              )}
              <Button
                style={{ marginLeft: 20, backgroundColor: "#6FDCE3" }}
                onClick={() => navigate("/admin-dashboard")}
              >
                Home
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
