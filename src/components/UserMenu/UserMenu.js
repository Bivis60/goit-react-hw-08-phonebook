import { Div } from 'components/AuthNav/AythNav.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUsername } from 'redux/auth/authSelectors';
import { Button, P } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const name = useSelector(selectUsername);

  return (
    <Div>
      <P>Wellcome, {name}</P>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </Div>
  );
};
