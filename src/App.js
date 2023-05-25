import React from "react";
import Navbar from "./component/shared/Navbar";
import Footer from "./component/shared/Footer";
import ContactUs from "./pages/ContactUs";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import WebAppDevelopment from "./pages/service/WebAppDevelopment";
import Ecommerce from "./pages/service/Ecommerce";
import Cms from "./pages/service/Cms";
import Banner from "./pages/service/Banner";
import Image from "./pages/service/Image";
import Page from "./pages/service/Page";
import WebDevelopment from "./pages/service/WebDevelopment";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service">
          <Route path="/service/" element={<WebAppDevelopment />} />
          <Route path="/service/web-development" element={<WebDevelopment />} />
          <Route path="/service/ecommerce" element={<Ecommerce />} />
          <Route path="/service/cms" element={<Cms />} />
          <Route path="/service/banner" element={<Banner />} />
          <Route path="/service/image" element={<Image />} />
          <Route path="/service/page" element={<Page />} />
        </Route>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <div className="clear-both"></div>
      <Footer />
    </div>
  );
}

export default App;
