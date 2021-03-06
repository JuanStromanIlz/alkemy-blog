import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar = styled.nav`
  position: relative;
  height: 56px;
  align-items: center;
  background: ${p => p.theme.surface};
  position: sticky;
  top: 0;
  z-index: 1024;
  display: flex;
  padding: 0 16px;
  &:after {
    content: '';
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAOBAMAAAD3WtBsAAAAFVBMVEUAAAAAAAAAAAAAAAAAAAAAAAD29va1cB7UAAAAB3RSTlMCCwQHGBAaZf6MKAAAABpJREFUCNdjSGNIY3BhCGUQBEJjIFQCQigAACyJAjLNW4w5AAAAAElFTkSuQmCC);
    background-size: 1px 7px;
    height: 7px;
    bottom: -6px;
    left: 0;
    right: 0;
    position: absolute;
    pointer-events: 0;
    z-index: 0;
  }
`;

const StyledContainer = styled(Container)`
  padding: 0;
  height: 100%;
  .desktop-sidebar {
    display: none;
  }
  .menuToggle {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  @media(min-width: 992px) {
    .menuToggle {
      display: none;
    }
    .desktop-sidebar {
      display: flex;
    }
  }
`;

const StyledRow = styled(Row)`
  height: 100%;
`;

const StyledCol = styled(Col)`
  display: flex;
  height: 100%;
`;

const Brand = styled.img`
  height: 28px;
  width: 120px;
  margin: auto 0;
`;

const List = styled.ul`
  display: flex;
  height: 100%;
  gap: 16px;
  flex-direction: row;
  margin: auto 0;
  padding: 0;
`;

const LinkContainer = styled.li`
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  position: relative;
  a {
    text-decoration: none;
    text-transform: capitalize;
    color: inherit;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    gap: 8px;
    .material-icons {
      display: flex;
    }
  }
  .active {
    .material-icons {
      color: ${p => p.theme.alkemy};
    }
    :after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 4px;
      border-radius: max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px;
      background: ${p => p.theme.alkemy};
    }
  }
`;

const Link = ({children, className, ...props}) => (
  <LinkContainer className={className}>
    <NavLink {...props}>{children}</NavLink>
  </LinkContainer>
);

Navbar.List = List;
Navbar.Brand = Brand;
Navbar.Link = Link;
Navbar.Col = StyledCol;
Navbar.Row = StyledRow;
Navbar.Container = StyledContainer;

export default Navbar;