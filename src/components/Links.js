import React from 'react'
import { Nav } from 'react-bootstrap'

export const Links = () => {
    return (
   
            <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Proyectos</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
       
    )
}
