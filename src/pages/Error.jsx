import Layout from 'components/ui/Layout';
import Alert from 'components/ui/Alert';
import { Col, Row } from 'react-bootstrap';

function Error() {
  return (
    <Layout>
      <Row>
        <Col xs={12} md={5} className='offset-md-3'>
          <Alert>
            <Alert.Body>
              <Alert.Header>
                <Alert.Title variant='danger' className='me-auto'>Error</Alert.Title>
              </Alert.Header>
              <Alert.Text>Oops, nothing here...</Alert.Text>
            </Alert.Body>
          </Alert>
        </Col>
      </Row>
    </Layout>
  );
}

export default Error;