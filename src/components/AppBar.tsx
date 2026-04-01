"use client"

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FC } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";

import dynamic from "next/dynamic";

const DarkModeDropdown = dynamic(() => import("./DarkModeDropdown"), {
  ssr: false,
});

const AppBar: FC = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <div className="d-flex flex-row">
          <Navbar.Brand>Navbar Brand Text</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} href="/public">
              Nav Link
            </Nav.Link>
          </Nav>
        </div>
        <Nav>
          <Nav.Item>
            <DarkModeDropdown />
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppBar;
