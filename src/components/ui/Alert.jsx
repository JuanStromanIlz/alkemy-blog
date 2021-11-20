import Card from './Card';
import styled from 'styled-components';

const Alert = styled(Card)``;

const Header = styled(Card.Header)`
  padding: 0px;
  padding-bottom: 6px;
  border-bottom: 1px solid ${p => p.theme.background};
  margin-bottom: 4px;
`;

const Title = styled(Card.Title)`
  color: ${p => p.variant && p.theme.states[p.variant]};
  ${Header} & {
    margin-bottom: 0px;
  }
`;

Alert.Header = Header;
Alert.Title = Title;

export default Alert;