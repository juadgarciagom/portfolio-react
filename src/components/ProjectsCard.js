import React from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'


export const ProjectsCard = () => {
    return (
        <div className="container">
            <Row>
                <Col>
                    <div className="portfolioProject">
                        <h4>Portafolio</h4>
                        <div className="cardText">
                            <p>Portafolio construido con reactjs, basado en functional components e implementando react-bootstrap</p>
                        </div>
                        <div>
                            <Button>Ver código</Button>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="test"></div>
                </Col>
                <Col>
                    <div className="test"></div>
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <div className="test"></div>
                </Col>
                <Col>
                    <div className="test"></div>
                </Col>
                <Col>
                    <div className="test"></div>
                </Col>
                
            </Row>
        </div>
    )
}
