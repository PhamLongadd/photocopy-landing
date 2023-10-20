import Header from "../../header";
import Footer from "../..//footer";
import Popup from "../..//popup";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <Popup />
      {children}
      <Footer />
    </div>
  );
}
