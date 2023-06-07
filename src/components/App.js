import { GlobalStyle } from 'GlobalStyle';
import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppBar } from './AppBar/AppBar';
// import { lazy } from 'react';

// const Home = lazy(() => import('../pages/Home/Home'));
// const Register = lazy(() => import('../pages/Register/Register'));
// const LogIn = lazy(() => import('../pages/LogIn/Login'));
// const Contacts = lazy(() => import('../pages/Contacts/Contact'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppBar />
      <Layout>
        <div>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </Layout>
    </>
  );
};
