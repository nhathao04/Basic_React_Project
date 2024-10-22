import orchidList from "../../ListOfOrchids";
import { Row, Col, Card, Container } from 'react-bootstrap';
import './Natural.scss'; 

const Natural = () => {
  const specialOrchids = orchidList.filter(orchid => orchid.isSpecial);

  return (
    <Container fluid className="natural-container">
      <h1 className="natural-title my-4">Special Orchids</h1>
      <Row className="g-3 natural-row">
        {specialOrchids.map((orchid) => (
          <Col xs={12} sm={6} md={4} lg={3} key={orchid.id} className="natural-col">
            <Card className="h-100 orchid-card">
              <Card.Img variant="top" src={orchid.image} className="orchid-img" />
              <Card.Body className="orchid-body">
                <Card.Title className="orchid-name">{orchid.name}</Card.Title>
                <Card.Text className="orchid-info">
                  <strong>Origin:</strong> {orchid.origin}<br />
                  <strong>Color:</strong> {orchid.color}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Natural;
