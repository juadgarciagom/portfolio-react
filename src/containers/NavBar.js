import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Links } from '../components/Links'
import { Logo } from '../components/Logo'

export const NavBar = () => {
    return (
        
            <Navbar className="navi" bg="light" expand="lg">
                <div className="container">
                    <Logo />

                    <Links/>
                </div>
            </Navbar>
        
    )
}
