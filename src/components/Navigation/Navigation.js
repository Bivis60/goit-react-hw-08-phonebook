import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = true;
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
