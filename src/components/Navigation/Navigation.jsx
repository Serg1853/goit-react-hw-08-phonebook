import { useAuth } from 'hooks/useAuth';
import { Link } from './Navigation.styled';
import { Toolbar } from '@mui/material';
import { toolbarStyle } from 'components/App.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Toolbar sx={toolbarStyle}>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}{' '}
    </Toolbar>
  );
};
