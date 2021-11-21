import { useLocation } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import NavbarElement, { SimpleNav } from 'components/elements/Navbar';
import styled from 'styled-components';
import Loading from 'components/elements/Loading';

const Wrapper = styled(Container)`
  margin-top: 16px;
`;

function Layout({children, loading = false}) {
  let location = useLocation().pathname;
  let userIsInLogin = location === '/login';
  return (
    <>
      {userIsInLogin ?
        <SimpleNav />
      : <NavbarElement />}
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