import Header from "../../header";
import Footer from "../..//footer";
import Popup from "../..//popup";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Popup />
      {children}
      <Footer />
    </>
  );
}
