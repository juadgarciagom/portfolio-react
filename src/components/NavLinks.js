import React from 'react'
import { Nav } from 'react-bootstrap'

export const NavLinks = () => {
    return (
   
            <Nav className="ml-auto">
                <Nav.Link href="#heroSection">Home</Nav.Link>
                <Nav.Link href="#projectsSection">Proyectos</Nav.Link>
                <Nav.Link href="#aboutSection">About</Nav.Link>
                <Nav.Link href="#contactSection">Contact</Nav.Link>
            </Nav>
       
    )
}
