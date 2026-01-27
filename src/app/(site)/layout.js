
import { Toaster } from "react-hot-toast";
import SiteLoader from "./components/SiteLoader";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function SiteLayout({ children }) {
  return (
    <div className="pageOffset">
      <SiteLoader />
      <Header />
      {children}
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
