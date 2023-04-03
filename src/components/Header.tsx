import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MENU = [
  {
    to: '/',
    name: 'Home',
  },
  {
    to: '/signin',
    name: 'Signin',
  },
  {
    to: '/signup',
    name: 'Signup',
  },
];

function Header() {
  return (
    <>
      <div className="grid grid-cols-4 gao-4">
        {MENU.map(({ to, name }) => (
          <Link to={to} key={name}>
            {name}
          </Link>
        ))}
      </div>
      <main className="py-10">
        <Outlet />
      </main>
    </>
  );
}

export default React.memo(Header);
