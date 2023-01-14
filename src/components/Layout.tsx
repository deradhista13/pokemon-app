import React, { FC } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
  overflow: string;
}

const Layout: FC<LayoutProps> = ({ children, overflow }) => {
  return (
    <div className="flex flex-row justify-center bg-indigo-900 h-screen overflow-auto">
      <div className="flex flex-col w-full md:w-1/2">
        <div className={`bg-white overflow-${overflow} h-screen`}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
