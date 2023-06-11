import { Div, ListText } from './AythNav.styled';

export const AuthNav = () => {
  return (
    <Div>
      <ListText to="/register">Register</ListText>
      <ListText to="/login">Log In</ListText>
    </Div>
  );
};
