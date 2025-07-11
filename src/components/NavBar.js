import { Container } from "react-bootstrap";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import logo from "../assets/img/logo-dark.svg";
import logoLight from "../assets/img/logo-light.svg";
import { HashLink } from "react-router-hash-link";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 350) {  // Change 100 to your desired threshold
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand className={"navlogo"} href="/">
          <img src={scrolled ? logo : logoLight} alt="Logo" width={"160px"} className="logoimg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/"
              className={"navbar-link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <HashLink to="/#project">Projects</HashLink>

            <HashLink to="/#skills">Resume</HashLink>

            <HashLink to="#connect">Connect</HashLink>
            <HashLink to="/about#top" className={"navbar-link"}>
              About
            </HashLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
