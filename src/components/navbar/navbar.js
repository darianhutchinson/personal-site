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
                            <Link to="/about">About Me</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/previousWork">Previous Work</Link>
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