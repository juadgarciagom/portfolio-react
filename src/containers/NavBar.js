import React from 'react'
import { Navbar } from 'react-bootstrap'
import { NavLinks } from '../components/NavLinks'
import { NavLogo } from '../components/NavLogo'

export const NavBar = () => {
    return (
        
            <Navbar className="navi" bg="light" expand="lg">
                <div className="container">
                    <NavLogo />
                    <NavLinks/>
                </div>
            </Navbar>
        
    )
}
