import Body from "@/components/Layout/Body";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

// import dynamic from "next/dynamic";
// const UserContextProvider = dynamic(() =>
//   import("axios").then((module) => module.default)
// );
import UserContextProvider from "@/context/UserContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserContextProvider>
        <>
          <Navbar />
          <Body>
            <Component {...pageProps} />
          </Body>
          <Footer />
        </>
      </UserContextProvider>
    </>
  );
}
