import './navbar.css';
import React from 'react';
import {  Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav
} from 'reactstrap';
const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false); 
    return (
        <div style={{
            display: 'block',
        }}>
            <Navbar light expand="md">
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/about">About Me</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/previousWork">Previous Work</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/projects">Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
  ); 
};  
export default Navigation;