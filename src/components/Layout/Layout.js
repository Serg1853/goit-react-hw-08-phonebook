import { Suspense } from 'react';
import { Wrapper } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { AppBar, MyAppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <Wrapper>
      <MyAppBar />{' '}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
