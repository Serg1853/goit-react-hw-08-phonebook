import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
// import { Button, Text, Wrapper } from './UserMenu.styled';
import { logOut } from 'redux/auth/operations';
import { Avatar, Button, Toolbar } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import hacker from './hacker.png';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Toolbar sx={{ display: 'flex', columnGap: 2, fontSize: 18 }}>
      <Avatar alt={user.name} src={hacker} sx={{ width: 36, height: 36 }} />
      Welcome, {user.name}!
      <Button
        variant="text"
        color="inherit"
        type="button"
        startIcon={<LogoutOutlinedIcon />}
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </Button>
    </Toolbar>

    // <Wrapper>
    //   <Text>Welcome to Phonebook {user.name}</Text>{' '}
    //   <Button type="button" onClick={() => dispatch(logOut())}>
    //     Logout
    //   </Button>
    // </Wrapper>
  );
};
