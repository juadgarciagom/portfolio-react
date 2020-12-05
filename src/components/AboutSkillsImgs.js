import React from 'react'
import {Container, Image, Row } from 'react-bootstrap'
import reactLogo from '../assets/img/2.png'
import gitLogo from '../assets/img/7.svg'
import mongoLogo from '../assets/img/8.png'
import nodeLogo from '../assets/img/4.png'
import javaLogo from '../assets/img/5.jpeg'
import bootLogo from '../assets/img/6.svg'

export const AboutSkillsImgs = () => {
    return (
        <div>
            <Container>
                <Row>
                    <div className="imgContainer">
                        <Image className="skillImg" src={reactLogo} />
                        <p>React JS</p>
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
                    <p>GitHub</p>
                    </div>
                    <div className="imgContainer">
                    <Image className="skillImg" src={mongoLogo} />
                    </div>
                    <div className="imgContainer">
                    <Image className="skillImg" src={bootLogo} />
                    <p>Bootstrap</p>
                    </div>
                    
                </Row>
                        
                    
            </Container>
        </div>
    )
}
