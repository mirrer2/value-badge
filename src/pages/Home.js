import React from 'react';

import Layout from 'components/Layout';

const Home = () => {
  return (
    <Layout>
      <div>
        <img src="/images/Home/HeaderLogo.png" alt="Home Header Logo" />
        <header>discover your value</header>

        <button type="button">눌러서 시작하기</button>

        <img src="/images/Home/FooterLogo.png" alt="Home Footer Logo" />
        <p>ⓒ BLOOM COMPANY</p>
      </div>
    </Layout>
  );
};

export default Home;
