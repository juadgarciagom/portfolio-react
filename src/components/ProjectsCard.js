import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'



export const ProjectsCard = () => {
    return (
        <div className="projectsImg">
            <Container>
                <Row>

                    <div className="portfolioProject">
                        <h4>Portafolio</h4>
                        <div className="cardText">
                            <p>Portafolio construido con reactjs, basado en functional components e implementando react-bootstrap</p>
                        </div>
                        <div>
                            <Button variant="secondary">Ver código</Button>
                        </div>
                    </div>


                    <div className="gifProject">
                        <h4>GifExpertApp</h4>
                        <div className="cardText">
                            <p>Buscador de gifs construido con reactjs, basado en functional components haciendo uso de la API de Giphy,
                                guardando sus favoritos y visualizando en tiempo real los trending gifs</p>
                        </div>
                        <div>
                            <Button variant="secondary">Ver código</Button>
                        </div>
                    </div>

                    <div className="test"></div>


                </Row>
                <Row>

                    <div className="test"></div>

                    <div className="test"></div>

                    <div className="test"></div>

                </Row>
            </Container>
        </div>
    )
}
