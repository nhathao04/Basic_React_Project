import orchidList from '../../ListOfOrchids'
import OrchidCard from '../../Components/OrchidCard/OrchidCard';
import './Orchids.scss'
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext/ThemeContext';
import { Row, Col } from 'react-bootstrap';
function Orchid() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`orchid-page ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <div className="container orchid">
        <Row>
          {orchidList.map(orchid => (
            <Col key={orchid.id} sm={6} md={4} lg={3} xl={3}>
              <OrchidCard
                orchid={orchid}
              />
            </Col>
          )
          )}
        </Row>
      </div>
    </div>
  );
}

export default Orchid;