import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Nav } from './Navigation.styled';
import { ListText } from 'components/AuthNav/AythNav.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Nav>
      <ListText to="/">Home</ListText>
      {isLoggedIn && <ListText to="/contacts">Contacts</ListText>}
    </Nav>
  );
};
