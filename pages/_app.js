import '@/styles/globals.css';
import Header from '@/components/Header';
import GlobalStyle from '@/styles/globalStyles';
import Footer from '@/components/Footer';
import Theme from '@/styles/Theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Theme>
    </>
  );
}
