import React from "react";
import { Content } from "../components/content/Content";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

import "./App.css";
document.addEventListener("gesturestart", function (e) {
  e.preventDefault();
});

function App() {
  return (
    <div className="main min-h-screen">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
