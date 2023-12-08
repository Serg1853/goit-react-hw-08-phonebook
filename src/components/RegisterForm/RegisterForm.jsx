import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { Container, formStyle } from 'components/App.styled';

import { Box, Button, TextField, Typography } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Container>
      <Typography
        component="h1"
        variant="h5"
        sx={{
          mt: 2,
          mb: 2,
        }}
      >
        Please register
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          sx={formStyle}
          inputProps={{
            inputMode: 'text',
            pattern: '^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$',
          }}
          margin="normal"
          fullWidth
          label="Name"
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <TextField
          sx={formStyle}
          // Validation
          inputProps={{
            inputMode: 'text',
            pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$',
          }}
          margin="normal"
          fullWidth
          label="Email"
          type="email"
          name="email"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <TextField
          sx={formStyle}
          // Validation
          inputProps={{
            inputMode: 'text',
            pattern: '^[a-zA-Z0-9!@#$%^&*()-_=+`~[]{}|:<>/?]+$',
          }}
          margin="normal"
          fullWidth
          label="Password"
          type="password"
          name="password"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2, display: 'flex', gap: 3 }}
        >
          {/* {add && <LoadAdd />} */}
          <p>Register</p>
        </Button>
      </Box>
    </Container>
  );
};
