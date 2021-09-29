import React from 'react';

type Props = {
  children: React.ReactChild,
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <h1>Hello!</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Bye</p>
      </footer>
    </>
  )
};

export default Layout;
