import React from 'react';

import GlobalStyle from '../styles/GlobalStyle';
import Layout from '../components/Layout/index';
import Navbar from '../components/Navbar/index';

const MyApp: React.FC = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Navbar />
      </Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
