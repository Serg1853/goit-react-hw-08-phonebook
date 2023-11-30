import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { getPhoneBookValue } from 'redux/contacts/contactsSlice';
import { ContactItemStyle, ContactListStyle } from './ContactsList.styled';
import { ButtonStyle } from 'components/App.styled';
import { useEffect } from 'react';
import {
  delContactThunk,
  getContactsThunk,
} from 'components/services/fetchContacts';

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const phoneBook = useSelector(getPhoneBookValue);
  const filterPhoneBook = useSelector(getFilter);

  const lowerFilter = filterPhoneBook.toLowerCase();
  const visibleContacts = phoneBook.filter(
    ({ name, phone }) =>
      name.toLowerCase().includes(lowerFilter) || phone.includes(lowerFilter)
  );

  const deleteContact = contactId => {
    dispatch(delContactThunk(contactId));
  };
  return (
    <ContactListStyle>
      {visibleContacts.map(({ name, phone, id }) => (
        <ContactItemStyle key={id}>
          <p>
            {name}: {phone}
          </p>
          <ButtonStyle type="botton" onClick={() => deleteContact(id)}>
            Delete
          </ButtonStyle>
        </ContactItemStyle>
      ))}
    </ContactListStyle>
  );
};

// import css from './ContactList.module.css'
// const ContactList = ({ contacts, onDeleteContact }) => (
//   <section>

//     <ul className={css.list}>
//       {contacts.map(contact => (
//         <li className={css.item} key={contact.id}>
//           {contact.name + ' : ' + contact.number}
//           {
//             <button className={css.btn}
//               type="button"
//               name="delete"
//               onClick={() => onDeleteContact(contact.id)}
//             >
//               Delete
//             </button>
//           }
//         </li>
//       ))}
//     </ul>
//   </section>
// );

// export default ContactList
