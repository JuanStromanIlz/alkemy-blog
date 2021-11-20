import { Container, Row, Col } from 'react-bootstrap';
import NavbarElement from 'components/elements/Navbar';
import styled from 'styled-components';
import Loading from 'components/elements/Loading';

const Wrapper = styled(Container)`
  margin-top: 16px;
`;

function Layout({children, loading = false}) {
  return (
    <>
      <NavbarElement />
      <Wrapper fluid>
        {loading ?
          <Loading />
        :
          <main>
            {children}
          </main>
        }
      </Wrapper>
    </>
  );
} 

export default Layout;