import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-48 pb-12 px-6 max-w-3xl mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
