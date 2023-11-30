// import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoneBookValue } from 'redux/phoneBook/phoneBookSlice';
import { FormStyle } from './ContactForm.styled';
import { ButtonStyle, InputStyle, LabelStyle } from 'components/App.styled';
import { postContactThunk } from 'components/services/fetchContacts';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');
  const dispatch = useDispatch();
  const phoneBook = useSelector(getPhoneBookValue);

  const onSubmitAddContact = event => {
    event.preventDefault();
    const newObj = { name, phone };

    if (isNameNew(phoneBook, newObj) !== undefined) {
      Notify.warning(`${newObj.name} is already in contacts`, {
        width: '400px',
        position: 'center-center',
        timeout: 3000,
        fontSize: '20px',
      });
      return;
    }

    dispatch(postContactThunk(newObj));

    reset();
  };

  const isNameNew = (phoneBook, newObj) => {
    return phoneBook.find(
      ({ name }) => name.toLowerCase() === newObj.name.toLowerCase()
    );
  };

  const onChangeInput = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
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
    <FormStyle onSubmit={onSubmitAddContact}>
      <LabelStyle>
        Name
        <InputStyle
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={onChangeInput}
        />
      </LabelStyle>
      <LabelStyle>
        Phone number
        <InputStyle
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
          onChange={onChangeInput}
        />
      </LabelStyle>
      <ButtonStyle type="submit">Add contact</ButtonStyle>
    </FormStyle>
  );
};

// // import { nanoid } from 'nanoid';
// import { useState } from 'react';
// import css from './ContactForm.module.css';

// const ContactForm = ({ onSubmit }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleChange = event => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     const data = { name, number };
//     onSubmit(data);

//     reset();
//   };
//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form onSubmit={handleSubmit} className={css.wrapper}>
//       <label className={css.label}>
//         Name
//         <input
//           className={css.input}
//           type="text"
//           name="name"
//           required
//           onChange={handleChange}
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         />
//       </label>
//       <label className={css.label}>
//         Number
//         <input
//           className={css.input}
//           type="tel"
//           name="number"
//           required
//           onChange={handleChange}
//           value={number}
//           pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//         />
//       </label>
//       <button type="submit" className={css.btn}>
//         Add Contact
//       </button>
//     </form>
//   );
// };

// export default ContactForm;
