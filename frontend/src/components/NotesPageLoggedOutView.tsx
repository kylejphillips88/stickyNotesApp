import React from 'react';
import { Container, Row, Col, Card, Tab, Nav } from 'react-bootstrap';

const NotesPageLoggedOutView = () => {
  return (
    <Container className="py-5">
      {/* Hero Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
          <p className="lead">
            Highlighting my skills, personal development & passion 
          </p>
        </Col>
      </Row>

      {/* Main Content Tabs */}
      <Tab.Container defaultActiveKey="dev">
        <Row>
          <Col>
            <Nav variant="pills" className="mb-4 justify-content-center">
              <Nav.Item>
                <Nav.Link eventKey="dev">Development</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="art">Artwork</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="work">Work History</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              {/* Development Tab */}
              <Tab.Pane eventKey="dev">
                <Card>
                  <Card.Header>
                    <Card.Title className="mb-0">Sticky Notes App</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Subtitle className="mb-3 text-muted">
                      A full-stack MERN application showcasing modern web development practices
                    </Card.Subtitle>
                    <Row>
                      <Col md={6}>
                        <h5>Technical Stack</h5>
                        <ul className="list-unstyled">
                          <li>✦ MongoDB for database management</li>
                          <li>✦ Express.js backend framework</li>
                          <li>✦ React frontend library</li>
                          <li>✦ Node.js runtime environment</li>
                        </ul>
                      </Col>
                      <Col md={6}>
                        <h5>Key Features</h5>
                        <ul className="list-unstyled">
                          <li>✦ User authentication & sessions</li>
                          <li>✦ Secure password hashing</li>
                          <li>✦ CRUD operations</li>
                          <li>✦ Responsive design</li>
                        </ul>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Tab.Pane>

              {/* Art Tab */}
              <Tab.Pane eventKey="art">
                <Card>
                  <Card.Header>
                    <Card.Title className="mb-0">Artistic Journey</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Subtitle className="mb-3 text-muted">
                      A collection of my paintings and creative expressions
                    </Card.Subtitle>
                    <Row>
                      <Col md={6}>
                        <h5>Gallery Highlights</h5>
                        <p>
                          Explore some of my favourite paintings. These have been designed using Adobe Photoshop to create stencils, which are then layered and spray painted onto canvas.
                        </p>
                      </Col>
                      <Col md={6}>
                        <h5>Artistic Focus</h5>
                        <ul className="list-unstyled">
                          <li>✦ Multi-layered stencils</li>
                          <li>✦ Graffiti-styled portraits</li>
                          <li>✦ Mixed media works</li>
                          <li>✦ Experimental techniques</li>
                        </ul>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Tab.Pane>

              {/* Work History Tab */}
              <Tab.Pane eventKey="work">
                <Card>
                  <Card.Header>
                    <Card.Title className="mb-0">Professional Experience</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Subtitle className="mb-3 text-muted">
                      A timeline of my career journey and key achievements
                    </Card.Subtitle>
                    <Row>
                      <Col md={6}>
                        <div className="border-start border-3 ps-4">
                          <h5>Current Role</h5>
                          <p className="text-muted mb-4">
                            Manufacturing & filling of sterile pharmaceutical products
                          </p>
                          <h5>Previous Experience</h5>
                          <p className="text-muted">
                            Former career in transport & logistics, particularly international imports & exports
                          </p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <h5>Soft Skills</h5>
                        <ul className="list-unstyled">
                          <li>✦ Strong communication skills</li>
                          <li>✦ Natural problem solver</li>
                          <li>✦ Analytical thinker</li>
                          <li>✦ Friendly & empathetic nature</li>
                        </ul>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      {/* Social Links */}
      <Row className="text-center mt-5 mb-4">
        <Col>
          <div>
            <a href="https://github.com/kylejphillips88" className="text-decoration-none text-muted">
              <img 
                src="/github.svg" 
                alt="Github" 
                width="24" 
                height="24" 
              />
            </a>
          </div>
        </Col>
      </Row>

      {/* Footer */}
      <Row className="text-center mt-5">
        <Col>
          <p className="text-muted small">
            Created by Kyle Phillips - Updated October 2024
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotesPageLoggedOutView;