import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Sending from "./components/Sending/Sending";
import Main from "./pages/Main/Main";
import AboutUs from "./pages/AboutUs/AboutUs";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import ContactBar from "./components/ContactBar/ContactBar";
import MoveToUp from "./components/MoveToUp/MoveToUp";
import MainChn from "./pages/Main/Main.zh-cht";
import HeaderChn from "./components/Header/Header.zh-cht";
import FooterChn from "./components/Footer/Footer.zh-cht";
import ContactChn from "./pages/Contact/Contact.zh-cht";
import MainZhCht from "./pages/Main/Main.zh-cht";
import ContactZhCht from "./pages/Contact/Contact.zh-cht";
import AboutUsZhCht from "./pages/AboutUs/AboutUs.zh-cht";
import ContactBarZhCht from "./components/ContactBar/ContactBar.zh-cht";
import SidebarZhCht from "./components/Sidebar/Sidebar.zh-cht";
// import Header from "./components/Header/Header";

function App() {
  const [sending, setSending] = useState(false);

  const Layout = () => {
    return (
      <div>
        <Sidebar />

        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const LayoutChina = () => {
    return (
      <div>
        <SidebarZhCht />
      
        <HeaderChn />
        <Outlet />
        <FooterChn />
      </div>
    );
  };
  return (
    <div>
      <MoveToUp />
      <Sending sending={sending} />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/contact"
            element={<Contact setSending={setSending} />}
          />
        </Route>
        <Route element={<LayoutChina />}>
          <Route path="/zh-cht" element={<MainZhCht />} />
          <Route path="/zh-cht/about-us" element={<AboutUsZhCht />} />
          <Route path="/zh-cht/contact" element={<ContactZhCht />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
