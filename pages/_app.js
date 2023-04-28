import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: 'Poppins';
          src: url('/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'Poppins';
          src: url('/fonts/Poppins/Poppins-Bold.ttf') format('truetype');
          font-weight: bold;
          font-style: normal;
        }

        html {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
