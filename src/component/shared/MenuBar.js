import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { activeMenu } from '../../features/collapse/collapseSlice';

const MenuBar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const {menuName} = useSelector((state) => state.collapse);
  const handleMenu = name => {
    dispatch(activeMenu(name))
  }
  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
    return (
        <div id="site-header-menu" className="site-header-menu">
              <div className="site-header-menu-inner ttm-stickable-header visible-title">
                <div className="container contain">
                  {/* site-branding */}

                  <div className="site-branding">
                    <Link
                      className="home-link"
                      to="/"
                      title="Altech"
                      rel="home"
                    >
                      <img
                        id="logo-img"
                        className="img-center mx-auto mt-6"
                        src="http://www.shehala.com/public/frontend/images/shehalaitlimited.png"
                        alt="logo"
                      />
                    </Link>
                  </div>

                  {/* site-navigation */}

                  <div id="site-navigation" className="site-navigation">
                    <div className="ttm-rt-contact">
                      {/* header-icons */}

                      <div className="ttm-header-icons "></div>
                    </div>

                    <div className="ttm-menu-toggle">
                      <input type="checkbox" id="menu-toggle-form"
        checked={isChecked}
        onChange={handleCheckboxChange} />

                      <label
                        htmlFor="menu-toggle-form"
                        className="ttm-menu-toggle-block"
                      >
                        <span className="toggle-block toggle-blocks-1"></span>

                        <span className="toggle-block toggle-blocks-2"></span>

                        <span className="toggle-block toggle-blocks-3"></span>
                      </label>
                    </div>

                    <nav id="menu" className={`${isChecked===true ? "menu active" : "menu"}`}>
                      <ul className="dropdown">
                        <li className={`${menuName==="home" ? "active" : "null"}`}  onClick={() => handleMenu("home")}>
                          <Link to="/">Home</Link>
                        </li>

                        <li className={`${menuName==="about" ? "active" : "null"}`}  onClick={() => handleMenu("about")}>
                          <Link to="/about">About Us</Link>
                        </li>

                        <li className={`${menuName==="service" ? "active" : "null"}`}  onClick={() => handleMenu("service")}>
                          <Link to="/service">Services</Link>
                        </li>

                        <li className={`${menuName==="portfolio" ? "active" : "null"}`}  onClick={() => handleMenu("portfolio")}>
                          <Link to="/portfolio">
                            Portfolio
                          </Link>
                        </li>

                        <li className={`${menuName==="blog" ? "active" : "null"}`}  onClick={() => handleMenu("blog")}>
                          <Link to="/blog">Blog</Link>
                        </li>

                        <li className={`${menuName==="contact" ? "active" : "null"}`}  onClick={() => handleMenu("contact")}>
                          <Link to="/contact">
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* <!-- site-navigation end--> */}
                </div>
              </div>
            </div>
    );
};

export default MenuBar;