import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import reactLogo from '../assets/img/2.png'
import gitLogo from '../assets/img/6.svg'
import mongoLogo from '../assets/img/7.png'
import nodeLogo from '../assets/img/3.png'
import javaLogo from '../assets/img/4.jpeg'
import bootLogo from '../assets/img/5.svg'

export const SkillsImgs = () => {
    return (
        <div className="skillsImg">
            <Container>
                <Row>
                    <Col>
                       <Image className="skillImg" src={reactLogo} />
                       <p>React Js</p>
                    </Col>
                    <Col>
                       <Image className="skillImg" src={gitLogo} />
                        
                    </Col>
                    <Col>
                       <Image className="skillImg2" src={mongoLogo} />
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                       <Image className="skillImg" src={nodeLogo} />
                    </Col>
                    <Col>
                       <Image className="skillImg2" src={javaLogo} />
                    </Col><Col>
                       <Image className="skillImg2" src={bootLogo} />
                    </Col>
                </Row>
                        
                    
            </Container>
        </div>
    )
}
