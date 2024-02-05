import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Sending from "./components/Sending/Sending";
import Main from "./pages/Main/Main";
import AboutUs from "./pages/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import MoveToUp from "./components/MoveToUp/MoveToUp";
import HeaderZhCht from "./components/Header/Header.zh-cht";
import FooterZhCht from "./components/Footer/Footer.zh-cht";
import MainZhCht from "./pages/Main/Main.zh-cht";
import ContactZhCht from "./pages/Contact/Contact.zh-cht";
import AboutUsZhCht from "./pages/AboutUs/AboutUs.zh-cht";
import SidebarZhCht from "./components/Sidebar/Sidebar.zh-cht";

function App() {
  const [sending, setSending] = useState(false);
  const lang = navigator.language.toLowerCase().substring(0.2);
  const navigate = useNavigate();
  useEffect(() => {
    if (lang === "zh-tw") {
      navigate("/zh-cht");
    } else {
      navigate("/");
    }
  }, [lang]);
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

        <HeaderZhCht />
        <Outlet />
        <FooterZhCht />
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
          <Route
            path="/zh-cht/contact"
            element={<ContactZhCht setSending={setSending} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
