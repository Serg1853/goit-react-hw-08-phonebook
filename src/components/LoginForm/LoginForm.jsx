import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { Container, formStyle } from 'components/App.styled';

import { Box, Button, TextField, Typography } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
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
        Sign in please
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          sx={formStyle}
          inputProps={{
            inputMode: 'text',
            pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$',
          }}
          label="Email"
          type="email"
          name="email"
          title="Будь ласка, введіть дійсну адресу електронної пошти"
          required
        />

        <TextField
          sx={formStyle}
          label="Password"
          type="password"
          name="password"
          pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
          title="Пароль повинен містити тільки латинські літери (як великі, так і малі), цифри та інші символи"
          required
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2, display: 'flex', gap: 3 }}
        >
          {/* {add && <LoadAdd />} */}
          Log In
        </Button>
      </Box>
    </Container>
  );
};
