import { useSelector } from 'react-redux';
import { Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import {
  getError,
  getIsLoading,
  getPhoneBookValue,
} from 'redux/phoneBook/phoneBookSlice';
import { Loader } from './Loader/Loader';
import { Error } from './Error/Error';

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const phoneBook = useSelector(getPhoneBookValue);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {phoneBook.lenght === 0 && !error && !isLoading ? (
        "You don't have any contacts yet"
      ) : (
        <Filter />
      )}
      {isLoading && <Loader />}
      {error ? <Error /> : <ContactsList />}
    </Container>
  );
};
