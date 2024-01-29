import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Sending from "./components/Sending/Sending";
import Main from "./pages/Main/Main";
import AboutUs from "./pages/AboutUs/AboutUs";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import ContactBar from "./components/ContactBar/ContactBar"
// import Header from "./components/Header/Header";

function App() {
  const [sending, setSending] = useState(false);
  return (
    <div>

      <Header />
      <Sidebar />
      <ContactBar />
      <Sending sending={sending} />
      <Routes>
        
        <Route path="/" element={<Main />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact setSending={setSending} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
