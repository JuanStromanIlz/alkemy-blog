import styled from 'styled-components';
import Button from 'components/ui/Button';
import { NavLink } from 'react-router-dom';

const MobileContainer = styled.div`
  .mask {
    transform: translateX(100%);
    opacity: 0;
    transition: all .3s;
    position: fixed;
    inset: 0;
    user-select: none;
    background-color: rgba(0,0,0, .5);
    z-index: 1000;
  }
  .menu {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    z-index: 1200;
    position: fixed;
    top: 0;
    bottom: 0;
    right:0;
    width: 70%;
    padding-left: 16px;
    padding-right: 16px;
    background-color: ${p => p.theme.surface};
    max-width: 400px;
    transform: translateX(100%);
    transition: all .5s;
    .menu--header {
      height: 56px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      padding-bottom: 6px;
      border-bottom: 1px solid ${p => p.theme.background};
    }
  }
  .menu__open {
    transform: translateX(0%);
    opacity: 1;
  }
  @media(min-width: 992px) {
    .mask, .menu {
      transform: translateX(100%);
    }    
  }
`;

const ListContainer = styled.nav`
  ul {
    padding: 0px;
    margin: 0px;
    list-style-type: none;
  }
`;

const Item = styled(NavLink)`
  padding: 16px;
  text-decoration: none;
  text-transform: capitalize;
  color: inherit;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  .material-icons {
    display: flex;
    margin-right: 8px;
  }
`;

const List = ({children, ...props}) => <ListContainer {...props}><ul>{children}</ul></ListContainer>;

const MobileMenu = ({show, setShow, children, ...props}) => (
  <MobileContainer {...props}>
    <div className={`mask ${show ? 'menu__open' : ''}`} />
    <div className={`menu ${show ? 'menu__open' : ''}`}>
      <div className='menu--header'>
        <Button.Icon onClick={() => setShow(!show)}>close</Button.Icon>
      </div>
      {children}
    </div>
  </MobileContainer>
);

MobileMenu.List = List;
MobileMenu.Item = Item;

export default MobileMenu;