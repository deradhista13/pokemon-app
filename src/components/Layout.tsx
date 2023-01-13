import React, { FC } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-row justify-center bg-indigo-900 h-screen ">
      <div className="w-full md:w-1/2 bg-white dark:bg-black overflow-auto h-screen">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
