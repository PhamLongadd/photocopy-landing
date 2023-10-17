import Header from "@/components/header";
import Footer from "@/components/footer";
import Popup from "@/components/popup";

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
