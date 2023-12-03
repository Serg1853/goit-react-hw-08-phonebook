import { useDispatch, useSelector } from 'react-redux';
// import { getFilter } from 'redux/filter/filterSlice';

import { ContactItemStyle, boxListStyle } from './ContactsList.styled';
// import { Container } from 'components/App.styled';

import { deleteContacts } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { Box, Button, List } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <Box sx={boxListStyle}>
      <List sx={{ width: 396 }}>
        {contacts.map(contact => (
          <ContactItemStyle key={contact.id}>
            {contact.name}: {contact.number}
            <Button
              variant="contained"
              startIcon={<DeleteIcon />}
              onClick={() => dispatch(deleteContacts(contact.id))}
            >
              Delete
            </Button>
            {/* <ButtonStyle
              type="botton"
              onClick={() => dispatch(deleteContacts(contact.id))}
            >
              Delete
            </ButtonStyle> */}
          </ContactItemStyle>
        ))}
      </List>
    </Box>
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
