import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
//import Business from "../../assets/images/Business.png";
//import SideNav from "../../components/Graphics/SideNav/SideNav";

const GraphicDesignComponent = () => {
  return (
    <div style={{ fontFamily: "raleway" }}>
      <Container className="p-4 px-0">
        {/*Intro Row */}
    
        {/*row start GRAPHIC DESIGN  */}
        <Row>
          {/*col start GRAPHIC DESIGN  */}
          {/*start graphic design description Menu Column */}
          <Col xs={12} md={4} className="py-2">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>SIDE MENU</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          {/*start graphic design price Menu Column */}
          <Col xs={12} md={8} className="py-2 bg-none">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>GRAPHIC DESIGN</Card.Title>
                <Row>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Card.Title>
                          <h5>COL 1 |CARD 2</h5>
                        </Card.Title>
                        <Card.Text>
                          <b>SUB-TITLE </b>
                        </Card.Text>
                        <Card.Text style={{ fontSize: "12px" }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Maiores nisi non enim nulla vero fugiat dolor
                          qui aspernatur facere rerum. Quasi, animi similique?
                          Eius tempore nam commodi fugit voluptatibus!
                          Asperiores?
                        </Card.Text>
                        <Card.Text>
                          <ul>
                            <li>Lorem ipsum dolor.</li>
                            <li>Lorem ipsum dolor.</li>
                            <li>Lorem ipsum dolor.</li>
                            <li>Lorem ipsum dolor.</li>
                            <li>Lorem ipsum dolor.</li>
                          </ul>
                        </Card.Text>
                        <Card.Text style={{ fontSize: "12px" }}>
                          {" "}
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptatem enim id impedit veniam.
                        </Card.Text>
                        <Card.Footer></Card.Footer>
                        <button>Click Me</button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Card.Title>
                          <h5>COL 1 |CARD 2</h5>
                        </Card.Title>
                        <Card.Text>
                          <b>SUB-TITLE </b>
                        </Card.Text>
                        <Card.Text style={{ fontSize: "12px" }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Maiores nisi non enim nulla vero fugiat dolor
                          qui aspernatur facere rerum. Quasi, animi similique?
                          Eius tempore nam commodi fugit voluptatibus!
                          Asperiores?
                        </Card.Text>
                        <Card.Text>
                          <ul>
                            <li>Lorem ipsum dolor.</li>
                            <li>Lorem ipsum dolor.</li>
                            <li>Lorem ipsum dolor.</li>
                            <li>Lorem ipsum dolor.</li>
                            <li>Lorem ipsum dolor.</li>
                          </ul>
                        </Card.Text>
                        <Card.Text style={{ fontSize: "12px" }}>
                          {" "}
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptatem enim id impedit veniam.
                        </Card.Text>
                        <Card.Footer></Card.Footer>
                        <button>Click Me</button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Card.Title>
                          <h5>COL 1 |CARD 2</h5>
                        </Card.Title>
                        <Card.Text>
                          <b>SUB-TITLE </b>
                        </Card.Text>
                        <Card.Text style={{ fontSize: "12px" }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Maiores nisi non enim nulla vero fugiat dolor
                          qui aspernatur facere rerum. Quasi, animi similique?
                          Eius tempore nam commodi fugit voluptatibus!
                          Asperiores?
                        </Card.Text>
                        <Card.Text>
                          <ul>
                            <li>Lorem ipsum dolor.</li>
                            <li>Lorem ipsum dolor.</li>
                            <li>Lorem ipsum dolor.</li>
                            <li>Lorem ipsum dolor.</li>
                            <li>Lorem ipsum dolor.</li>
                          </ul>
                        </Card.Text>
                        <Card.Text style={{ fontSize: "12px" }}>
                          {" "}
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptatem enim id impedit veniam.
                        </Card.Text>
                        <Card.Footer></Card.Footer>
                        <button>Click Me</button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GraphicDesignComponent;
