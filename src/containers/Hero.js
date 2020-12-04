import React from 'react'
import { Container } from 'react-bootstrap'
import { HeroCont } from '../components/HeroCont'

export const Hero = () => {
    return (
        <div className="backImg" id="heroSection">
            <Container>
                <HeroCont />
            </Container>
        </div>
    )
}
