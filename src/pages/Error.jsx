import Layout from 'components/ui/Layout';
import Alert from 'react-bootstrap/Alert';
import { Col, Row } from 'react-bootstrap';

function Error() {
  return (
    <Layout>
      <Row>
        <Col xs={12} md={5} className='offset-md-3'>
          <Alert 
            variant='danger'
          >
            <Alert.Heading>
              <strong className='me-auto'>Error</strong>
            </Alert.Heading>
            <p>Oops, nothing here...</p>
          </Alert>
        </Col>
      </Row>
    </Layout>
  );
}

export default Error;