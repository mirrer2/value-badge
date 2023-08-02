import React from 'react';
import { Link } from 'react-router-dom';

import Layout from 'components/Layout';
import { HomeWrapper, HomeHeader, HomeFooter } from 'styles/pages/home';

const Home = () => {
  return (
    <Layout>
      <HomeWrapper>
        <HomeHeader>
          <img src="/images/Home/HeaderLogo.png" alt="Home Header Logo" />
          <header>discover your value</header>
        </HomeHeader>

        <HomeFooter>
          <Link to="/step1">
            <button type="button">눌러서 시작하기</button>
          </Link>

          <img src="/images/Home/FooterLogo.png" alt="Home Footer Logo" />
          <p>ⓒ BLOOM COMPANY</p>
        </HomeFooter>
      </HomeWrapper>
    </Layout>
  );
};

export default Home;
