import { AuthNav } from 'components/AuthNav/AuthNav';
// import { Header } from './AppBar.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AppBar, Toolbar } from '@mui/material';

export const MyAppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          fontSize: 18,
          justifyContent: 'space-between',
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
