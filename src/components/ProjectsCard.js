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
                            <Button variant="secondary" target="_blank" href="https://github.com/juadgarciagom/portfolio-react">Ver código</Button>
                        </div>
                    </div>


                    <div className="gifProject">
                        <h4>GifExpertApp</h4>
                        <div className="cardText">
                            <p>Buscador de gifs construido con reactjs, basado en functional components haciendo uso de la API de Giphy,
                                guardando sus favoritos y visualizando en tiempo real los trending gifs</p>
                        </div>
                        <div>
                            <Button variant="secondary" target="_blank" href="https://github.com/juadgarciagom/gif-searcher">Ver código</Button>
                            <Button className="liveButton" target="_blank" href="https://juadgarciagom.github.io/gif-searcher/">Ver en linea</Button>

                        </div>
                    </div>

                    <div className="restProject">
                        <h4>RESTAPI</h4>
                        <div className="cardText">
                            <p>API REST construida con base en un café donde podemos añadir a una base de datos de mongo DB productos,
                                usuarios y categorias. Con autenticación de JWT y google sign-in. Pruebas echas en postman  
                            </p>
                        </div>
                        <div>
                            <Button variant="secondary" target="_blank" href="https://github.com/juadgarciagom/rest-server-cafe">Ver código</Button>
                        </div>
                    </div>


                </Row>
                {/* <Row>

                    <div className="test"></div>

                    <div className="test"></div>

                    <div className="test"></div>

                </Row> */}
            </Container>
        </div>
    )
}
