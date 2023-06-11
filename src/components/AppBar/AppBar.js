import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import {
  selectAuthError,
  selectAuthIsLoading,
  selectIsLoggedIn,
} from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectAuthIsLoading);
  const error = useSelector(selectAuthError);

  return (
    <>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </Header>
      <main>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
