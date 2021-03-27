import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./menu.module.scss";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Scroll from "react-scroll";

export const Menu = () => {
  const logo = "<DS/>";
  return (
    <Container>
      <Navbar collapseOnSelect fixed="top" expand="md" bg="light">
        <Navbar.Brand>
          <NavLink to="/" className={styles.logoStyle}>
            {logo}
          </NavLink>
        </Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={styles.navWrapper} variant="tabs">
              <Nav.Item>
                <NavLink
                  to="/"
                  className={styles.inactive}
                  activeClassName={styles.active}
                  exact={true}
                  >
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <a href='#skills' className={styles.inactive}>
                  Skills
                </a>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/projects"
                  className={styles.inactive}
                  activeClassName={styles.active}
                >
                  Projects
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/blogposts"
                  className={styles.inactive}
                  activeClassName={styles.active}
                >
                  Tech Blog
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/contact"
                  className={styles.inactive}
                  activeClassName={styles.active}
                >
                  Contact
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </Container>
  );
};
