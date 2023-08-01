import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <div>공통메뉴</div>

      {children}
    </>
  );
};

export default Layout;
