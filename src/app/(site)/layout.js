
import { Toaster } from "react-hot-toast";
import SiteLoader from "./components/SiteLoader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollAnimator from "./components/ScrollAnimator";

export default function SiteLayout({ children }) {
  return (
    <div className="pageOffset">
      <SiteLoader />
      <ScrollAnimator />
      <Header />
      {children}
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
