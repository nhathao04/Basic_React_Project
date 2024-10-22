import { Link, useParams } from "react-router-dom";
import orchidList from "../../ListOfOrchids";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";
import('./Detail.scss')
function Detail() {
  const { id } = useParams('id');
  const orchid = orchidList.filter(orchid => orchid.id === id)[0]
  const [showVideo, setShowVideo] = useState(false)
  const handleYoutube = () => {
    setShowVideo(true)
  }
  // const handleClose = () => {
  //   setShowVideo(false)
  // }
  return (
    <Container className="detail-container">
      {showVideo && <YoutubeVideo onClose= {setShowVideo} link={orchid.link} />}
      <Row className="detail-block" >
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className="image-block">
            <img className=" content orchid-image" src={orchid.image} alt="flower image" />
          </div>
        </Col>
        <Col className="content-col" xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className="content-block">
            <strong className=" orchid-name">{orchid.name}</strong>
            <strong className="content orchid-origin">This orchid comes from {orchid.origin}</strong>
            <strong className="content orchid-category">Category: {orchid.category}</strong>
            <strong className="content orchid-color">Color: {orchid.color}</strong>
            <strong className="content orchid-rating">Rating: {orchid.rating}⭐</strong>
            
          </div>
          <div className="button-block">
            <Link className="button-link">
              <div className="button-container">
                ADD TO BAG
              </div>
            </Link>
            <Link className="button-link">
              <div onClick={handleYoutube} className="button-container">
                WATCH VIDEO
              </div>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;