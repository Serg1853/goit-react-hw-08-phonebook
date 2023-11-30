import { useSelector } from 'react-redux';
import { getError } from 'redux/contacts/contactsSlice';
import { WrapperError } from './Error.styled';

export const Error = () => {
  const error = useSelector(getError);

  return (
    <WrapperError>
      <p>We're sorry, {error}</p>
    </WrapperError>
  );
};
