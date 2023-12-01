import { useDispatch, useSelector } from 'react-redux';
// import { getFilter } from 'redux/filter/filterSlice';

import { ContactItemStyle, ContactListStyle } from './ContactsList.styled';
import { ButtonStyle } from 'components/App.styled';

import { deleteContacts } from 'redux/contacts/operations';
import { selectvisibleContacts } from 'redux/contacts/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectvisibleContacts);
  const dispatch = useDispatch();

  return (
    <ContactListStyle>
      {contacts.map(({ name, number, id }) => (
        <ContactItemStyle key={id}>
          <p>
            {name}: {number}
          </p>
          <ButtonStyle
            type="botton"
            onClick={() => dispatch(deleteContacts(id))}
          >
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
