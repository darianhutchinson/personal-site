import './navbar.css';
import React from 'react';
import {  Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
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
                            <Link to="/about" className="nav-link">About Me</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/previousWork" className="nav-link">Previous Work</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/projects" className="nav-link">Projects</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
  ); 
};  
export default Navigation;