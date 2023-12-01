import { Suspense } from 'react';
import { Wrapper } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />{' '}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
