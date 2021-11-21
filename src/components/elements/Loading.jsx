import { Col, Row } from 'react-bootstrap';

function Loading() {
  return (
    <Row>
      <Col xs={12} md={5} className='offset-md-3'>
        <h5>Loading...</h5>
      </Col>
    </Row>
  );
}

export default Loading;