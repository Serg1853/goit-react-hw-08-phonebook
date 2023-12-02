// import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { FormStyle } from './ContactForm.styled';
import {
  // ButtonStyle,
  // Container,
  // InputStyle,
  // LabelStyle,
  avatarStyle,
} from 'components/App.styled';
import { addContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';
// import { TextField } from '@mui/material';
import { Avatar, Button, TextField, Box, Typography } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmitAddContact = event => {
    event.preventDefault();
    const newObj = { name, number };

    if (isNameNew(contacts, newObj) !== undefined) {
      Notify.warning(`${newObj.name} is already in contacts`, {
        width: '400px',
        position: 'center-center',
        timeout: 3000,
        fontSize: '20px',
      });
      return;
    }

    dispatch(addContacts(newObj));

    reset();
  };

  const isNameNew = (contacts, newObj) => {
    return contacts.find(
      ({ name }) => name.toLowerCase() === newObj.name.toLowerCase()
    );
  };

  const onChangeInput = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Avatar sx={avatarStyle}>
        <ContactsIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Add Contact
      </Typography>
      <Box component="form" onSubmit={onSubmitAddContact} sx={{ mt: 1 }}>
        <TextField
          sx={{ backgroundColor: 'rgba(208, 224, 241, 0.822)' }}
          // Validation
          inputProps={{
            inputMode: 'text',
            pattern: '^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$',
          }}
          margin="normal"
          fullWidth
          label="Name"
          type="text"
          name="name"
          value={name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChangeInput}
          // size="small"
        />
        <TextField
          // Validation
          sx={{ backgroundColor: 'rgba(208, 224, 241, 0.822)' }}
          inputProps={{ inputMode: 'tel', pattern: '[0-9]*' }}
          margin="normal"
          fullWidth
          label="Phone number"
          type="tel"
          name="number"
          value={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeInput}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2, display: 'flex', gap: 3 }}
        >
          {/* {add && <LoadAdd />} */}
          <p>Add contact</p>
        </Button>
        <Filter />
      </Box>
    </>
    // <Container>
    //   <FormStyle onSubmit={onSubmitAddContact}>
    //     <LabelStyle>
    //       Name
    //       <TextField
    //         id="outlined-password-input"
    //         label="Name"
    //         type="name"
    //         autoComplete="current-password"
    //         name="name"
    //         value={name}
    //         onChange={onChangeInput}
    //       />
    //       {/* <InputStyle
    //         type="text"
    //         name="name"
    //         value={name}
    //         pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //         required
    //         onChange={onChangeInput}
    //       /> */}
    //     </LabelStyle>
    //     <LabelStyle>
    //       Phone number
    //       <InputStyle
    //         type="tel"
    //         name="number"
    //         value={number}
    //         pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
    //         required
    //         onChange={onChangeInput}
    //       />
    //     </LabelStyle>
    //     <ButtonStyle type="submit">Add contact</ButtonStyle>
    //   </FormStyle>{' '}
    //   <Filter />
    // </Container>
  );
};
