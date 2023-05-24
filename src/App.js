import React from "react";
import Navbar from "./component/shared/Navbar";
import Footer from "./component/shared/Footer";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div>
      <Navbar />
      <ContactUs />
      <div style={{clear: "both"}}></div>
      <Footer />
    </div>
  );
}

export default App;
