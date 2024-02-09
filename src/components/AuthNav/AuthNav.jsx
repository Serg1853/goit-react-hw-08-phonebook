import { Toolbar } from '@mui/material';
import { Link } from './AuthNav.styled';
import { toolbarStyle } from 'components/App.styled';

export const AuthNav = () => {
  return (
    <Toolbar sx={toolbarStyle}>
      <Link to="/register">Register</Link> <Link to="/login">Login</Link>{' '}
    </Toolbar>
  );
};
