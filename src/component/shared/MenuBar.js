import React from 'react';

const MenuBar = () => {
    return (
        <div id="site-header-menu" className="site-header-menu">
              <div className="site-header-menu-inner ttm-stickable-header visible-title">
                <div className="container contain">
                  {/* <!-- site-branding --> */}

                  <div className="site-branding">
                    <a
                      className="home-link"
                      href="http://www.google.com"
                      title="Altech"
                      rel="home"
                    >
                      <img
                        id="logo-img"
                        className="img-center mx-auto mt-6"
                        src="http://www.shehala.com/public/frontend/images/shehalaitlimited.png"
                        alt="logo"
                      />
                    </a>
                  </div>
                  {/* <!-- site-branding end --> */}

                  {/* <!--site-navigation --> */}

                  <div id="site-navigation" className="site-navigation">
                    <div className="ttm-rt-contact">
                      {/* <!-- header-icons --> */}

                      <div className="ttm-header-icons "></div>
                      {/* <!-- header-icons end --> */}
                    </div>

                    <div className="ttm-menu-toggle">
                      <input type="checkbox" id="menu-toggle-form" />

                      <label
                        htmlFor="menu-toggle-form"
                        className="ttm-menu-toggle-block"
                      >
                        <span className="toggle-block toggle-blocks-1"></span>

                        <span className="toggle-block toggle-blocks-2"></span>

                        <span className="toggle-block toggle-blocks-3"></span>
                      </label>
                    </div>

                    <nav id="menu" className="menu">
                      <ul className="dropdown">
                        <li className="active">
                          <a href="http://www.google.com">Home</a>{" "}
                        </li>

                        <li className="null">
                          <a href="http://www.google.com">About Us</a>
                        </li>

                        <li className="has-submenu">
                          <a href="http://www.google.com">Services</a>

                          <ul className="sub-menu">
                            <li className="null has-submenu">
                              <a href="http://www.google.com">
                                Web Development
                              </a>

                              <ul className="sub-menu">
                                <li className="null">
                                  <a href="http://www.google.com">
                                    Web Application
                                  </a>
                                </li>

                                <li className="null">
                                  <a href="http://www.google.com">
                                    Digital Catalog System
                                  </a>
                                </li>

                                <li className="null">
                                  <a href="http://www.google.com">
                                    CMS Banner System
                                  </a>
                                </li>

                                <li className="null">
                                  <a href="http://www.google.com">
                                    Content Management System
                                  </a>
                                </li>

                                <li className="null">
                                  <a href="http://www.google.com">
                                    Website Maintenance
                                  </a>
                                </li>

                                <li className="null">
                                  <a href="http://www.google.com">
                                    Banner Order System
                                  </a>
                                </li>
                              </ul>
                            </li>

                            <li className="null">
                              <a href="http://www.google.com">
                                Software Development
                              </a>{" "}
                            </li>

                            <li className="has-submenu">
                              <a href="http://www.google.com">
                                Website Design
                              </a>

                              <ul className="sub-menu">
                                <li className="null">
                                  <a href="http://www.google.com">
                                    Responsive Web Design{" "}
                                  </a>
                                </li>

                                <li className="null">
                                  <a href="http://www.google.com">
                                    Logo Design
                                  </a>
                                </li>

                                <li className="null">
                                  <a href="http://www.google.com">
                                    PSD to XHTML/CSS3
                                  </a>
                                </li>

                                <li className="null">
                                  <a href="http://www.google.com">
                                    PSD Design
                                  </a>
                                </li>
                              </ul>
                            </li>

                            <li className="has-submenu">
                              <a href="http://www.google.com">
                                Ecommerce Development
                              </a>

                              <ul className="sub-menu">
                                <li className="null">
                                  <a href="http://www.google.com">
                                    WordPress WooCommerce{" "}
                                  </a>
                                </li>

                                <li className="null">
                                  <a href="http://www.google.com">
                                    Joomla VirtueMart
                                  </a>
                                </li>

                                <li className="null">
                                  <a href="http://www.google.com">
                                    Magento Ecommerce
                                  </a>
                                </li>

                                <li className="null">
                                  <a href="http://www.google.com">
                                    Opencart Ecommerce
                                  </a>
                                </li>
                              </ul>
                            </li>

                            <li className="null">
                              <a href="http://www.google.com">
                                {" "}
                                Digital Marketing
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="null">
                          <a href="#">
                            Portfolio
                          </a>{" "}
                        </li>

                        <li className="null">
                          <a href="#">Blog</a>
                        </li>

                        <li className="null">
                          <a href="#">
                            Contact Us
                          </a>
                        </li>
                        <li className="null">
                          <a href="#">CSR</a>
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