import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import {
  ButtonStyle,
  Container,
  InputStyle,
  LabelStyle,
} from 'components/App.styled';
import { FormStyle } from 'components/ContactForm/ContactForm.styled';

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
      <FormStyle onSubmit={handleSubmit} autoComplete="off">
        <LabelStyle>
          Username
          <InputStyle
            type="text"
            name="name"
            placeholder="Введіть ім'я"
            pattern="^[^\d]+$"
            title="Ім'я має містити лише літери, апострофи, дефіси та відступи"
            required
          />
        </LabelStyle>
        <LabelStyle>
          Email
          <InputStyle
            type="email"
            name="email"
            placeholder="Введіть адресу електронної пошти"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Будь ласка, введіть дійсну адресу електронної пошти"
            required
          />
        </LabelStyle>
        <LabelStyle>
          Password
          <InputStyle
            type="password"
            name="password"
            placeholder="Введіть пароль"
            pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
            title="Пароль повинен містити тільки латинські літери (як великі, так і малі), цифри та інші символи"
            required
          />
        </LabelStyle>
        <ButtonStyle type="submit">Register</ButtonStyle>
      </FormStyle>
    </Container>
  );
};
