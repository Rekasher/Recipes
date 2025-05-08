import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationBar } from '../NavigationBar/NavigationBar.tsx';

const Layout: FC = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export { Layout };
