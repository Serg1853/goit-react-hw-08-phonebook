import { Avatar, Box, TextField } from '@mui/material';
import { avatarStyle } from 'components/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterSet } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';
import { boxFilterStyle } from './Filter.styled';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterPhoneBook = useSelector(selectFilter);

  const onChangeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(filterSet(value));
  };

  return (
    <Box component="div" sx={boxFilterStyle}>
      <Avatar sx={avatarStyle}>
        <PersonSearchIcon />
      </Avatar>
      <TextField
        margin="normal"
        inputProps={{
          inputMode: 'text',
          pattern: '^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$',
        }}
        sx={{
          width: 900,
          bgcolor: 'rgba(208, 224, 241, 0.822)',
        }}
        label="Find contacts by name:"
        type="text"
        name="filter"
        value={filterPhoneBook}
        title="Enter the name"
        onChange={onChangeFilter}
        // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </Box>
    // <LabelStyle>
    //   Find contacts by name:
    //   <InputStyle
    //     type="text"
    //     name="filter"
    //     value={filterPhoneBook}
    //     title="Enter the name"
    //     required
    //     onChange={onChangeFilter}
    //   />
    // </LabelStyle>
  );
};
