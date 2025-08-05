// pages/_app.js
import '../styles/global.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col bg-backgroundColor">
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
