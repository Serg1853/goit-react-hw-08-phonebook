import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from './Layout/Layout';

const { lazy, useEffect } = require('react');

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Оновлення користувача...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/login" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

// import { useSelector } from 'react-redux';
// import { Container } from './App.styled';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactsList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import {
//   getError,
//   getIsLoading,
//   getPhoneBookValue,
// } from 'redux/contacts/contactsSlice';
// import { Loader } from './Loader/Loader';
// import { Error } from './Error/Error';

// export const App = () => {
//   const isLoading = useSelector(getIsLoading);
//   const error = useSelector(getError);
//   const phoneBook = useSelector(getPhoneBookValue);
//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       {phoneBook.lenght === 0 && !error && !isLoading ? (
//         "You don't have any contacts yet"
//       ) : (
//         <Filter />
//       )}
//       {isLoading && <Loader />}
//       {error ? <Error /> : <ContactsList />}
//     </Container>
//   );
// };
