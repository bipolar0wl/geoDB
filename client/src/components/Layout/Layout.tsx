import React from "react";
import Main from "./MainLayer";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Main />
      <Footer />
    </>
  );
};

export default Layout;
