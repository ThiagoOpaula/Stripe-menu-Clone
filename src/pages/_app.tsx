import  GlobalStyle  from '../styles/GlobalStyle';
import Layout from '../components/Layout/index';
import Navbar from '../components/Navbar/index';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Navbar />
      </Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}