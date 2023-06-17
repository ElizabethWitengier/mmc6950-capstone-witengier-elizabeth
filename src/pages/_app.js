import Body from "@/components/Layout/Body";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Body>
        <Component {...pageProps} />
      </Body>
      <Footer />
    </>
  );
}
