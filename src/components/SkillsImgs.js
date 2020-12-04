import React from 'react'
import {Container, Image, Row } from 'react-bootstrap'
import reactLogo from '../assets/img/2.png'
import gitLogo from '../assets/img/6.svg'
import mongoLogo from '../assets/img/7.png'
import nodeLogo from '../assets/img/3.png'
import javaLogo from '../assets/img/4.jpeg'
import bootLogo from '../assets/img/5.svg'

export const SkillsImgs = () => {
    return (
        <div>
            <Container>
                <Row>
                    <div className="imgContainer">
                        <Image className="skillImg" src={reactLogo} />
                    </div>
                    <div className="imgContainer">
                        <Image className="skillImg" src={nodeLogo} />
                    </div>
                    <div className="imgContainer">
                        <Image className="skillImg" src={javaLogo} />
                    </div>

                    
                </Row>
                <Row>
                    <div className="imgContainer">
                    <Image className="skillImg" src={gitLogo} />
                    </div>
                    <div className="imgContainer">
                    <Image className="skillImg" src={mongoLogo} />
                    </div>
                    <div className="imgContainer">
                    <Image className="skillImg" src={bootLogo} />
                    </div>
                    
                </Row>
                        
                    
            </Container>
        </div>
    )
}
