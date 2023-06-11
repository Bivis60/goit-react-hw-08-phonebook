import { AppBar } from './AppBar/AppBar';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshCurrentUser } from 'redux/auth/authOperations';
import { GlobalStyle } from 'GlobalStyle';
import { PrivateRoute } from './PrivateRoute';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { PublicRoute } from './PublicRoute';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const LogIn = lazy(() => import('../pages/LogIn/LogIn'));
const Contacts = lazy(() => import('../pages/Contacts/Contact'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <PublicRoute component={Register} redirectTo="/contacts" />
              }
            />
            <Route
              path="/login"
              element={<PublicRoute component={LogIn} redirectTo="/contacts" />}
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={Contacts} redirectTo="/login" />
              }
            />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </>
    )
  );
};
