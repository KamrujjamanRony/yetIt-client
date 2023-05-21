import { GoLocation } from "react-icons/go";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { TfiAlarmClock } from "react-icons/tfi";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaFlickr, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer widget-footer clearfix block">
        <div className="first-footer ttm-bgcolor-skincolor ttm-bg ttm-bgimage-yes bg-img1">
          <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>

          <div className="container contain">
            <div className="row align-items-md-center">
              <div className="col-lg-4 col-md-4 col-sm-12 order-md-2">
                <div className="footer-logo text-sm-center">
                  <img
                    id="logo-img"
                    className="img-center"
                    src="http://www.shehala.com/public/frontend/images/shehalaitlimited.png"
                    alt="logo"
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 order-md-1">
                <div className="text-left">
                  {/* featured-icon-box -->  */}

                  <div className="featured-icon-box left-icon icon-align-top">
                    <div className="featured-icon">
                      {/* featured-icon -->  */}

                      <div className="ttm-icon ttm-icon_element-color-white ttm-icon_element-size-md">
                        <GoLocation className="text-white text-3xl"></GoLocation>
                        {/* ttm-icon -->  */}
                      </div>
                    </div>

                    <div className="featured-content">
                      {/* featured-content -->  */}

                      <div className="featured-desc">
                        <p>
                          House #06, Road #02, Block #H, Sector #2 Aftabnagar,
                          Dhaka 1212 Bangladesh.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* featured-icon-box END --> */}
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 order-md-3">
                <div className="text-sm-right relative">
                  <a
                    className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-icon-btn-left ttm-btn-color-white flex justify-center items-center"
                    href="mailto:info@shehala.com"
                    title=""
                  >
                  <HiOutlineEnvelope className="text-xl inline-block"></HiOutlineEnvelope>  <span>info@shehala.com</span> 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="second-footer ttm-textcolor-white bg-img2">
          <div className="container contain">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                <div className="widget widget_text  clearfix">
                  <h3 className="widget-title">About Our Company</h3>

                  <div className="textwidget widget-text">
                    Shehala IT is one of the fastest growing and forward
                    thinking IT solution companies in Bangladesh, delivering
                    outstanding software outsourcing services to clients in EU
                    (Denmark, Norway, Germeny, Sweden), North America and Japan
                    since 2006.
                  </div>

                  <div className="quicklink-box">
                    {/* featured-icon-box -->  */}

                    <div className="featured-icon-box left-icon">
                      <div className="featured-icon">
                        {/* featured-icon -->  */}

                        <div className="ttm-icon ttm-icon_element-style-round ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-md ttm-icon_element-style-round flex justify-center items-center">
                          <TfiAlarmClock className="text-3xl"></TfiAlarmClock>
                          {/* ttm-icon -->  */}
                        </div>
                      </div>

                      <div className="featured-content">
                        {/* featured-content --> */}

                        <div className="featured-desc">
                          {/* featured-desc --> */}

                          <p>Talk To Our Support</p>
                        </div>

                        <div className="featured-title">
                          {/* featured-title --> */}

                          <h5>+1 (416) 686-3111 </h5>
                        </div>

                        <div></div>
                      </div>
                    </div>
                    {/* featured-icon-box END --> */}
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                <div className="widget link-widget clearfix">
                  <h3 className="widget-title">Quick Links</h3>

                  <ul id="menu-footer-services list-disc">
                    <li>
                      <a href="http://www.shehala.com/why-shehala-it-limited">
                        Why Shehala IT Limited?
                      </a>
                    </li>

                    <li>
                      <a href="http://www.shehala.com/code-of-conduct">
                        Code of Conduct
                      </a>
                    </li>

                    <li>
                      <a href="http://www.shehala.com/our-mission">
                        Our Mission and Vision
                      </a>
                    </li>

                    <li>
                      <a href="http://www.shehala.com/hse-policy">HSE Policy</a>
                    </li>

                    <li>
                      <a href="http://www.shehala.com/development-life-cycle">
                        Development Life Cycle
                      </a>
                    </li>

                    <li>
                      <a href="http://www.shehala.com/offshore-development-centre">
                        Offshore Development Centre
                      </a>
                    </li>

                    <li>
                      <a href="http://www.shehala.com/technology-expertise">
                        Technology Expertise
                      </a>
                    </li>

                    <li>
                      <a href="http://www.shehala.com/about-us">About Us</a>
                    </li>
                  </ul>

                  <div style={{marginTop: "25px"}}>
                      <img
                        src="https://www.positivessl.com/images/seals/positivessl_trust_seal_md_167x42.png"
                        border="0"
                        onMouseDown="return tLKB(event,'http://www.trustlogo.com/ttb_searcher/trustlogo?v_querytype=W&amp/;v_shortname=POSDV&amp;v_search=http://www.shehala.com/&amp;x=6&amp;y=5');"
                        onContextMenu="return tLLB(event);"
                        alt=""
                      />
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 widget-area">
                <div className="widget flicker_widget clearfix">
                  <h3 className="widget-title">Contact Information</h3>

                  <div className="row">
                    <div className="col-lg-6">
                      <h6>Dhaka Office</h6>

                      <p>
                        House #06, Road #02, Block #H, Sector #2 Aftabnagar,
                        Dhaka 1212 Bangladesh.
                        <br />
                        <BsTelephoneFill className="inline-block"></BsTelephoneFill> +88 09611741741
                        <br />
                        <HiOutlineEnvelope className="text-xl inline-block"></HiOutlineEnvelope>
                        <a href="mailto:info@shehala.com"> info@shehala.com</a>
                      </p>
                      <br />

                      <h6>Danish Office</h6>

                      <p>
                        Højvangsvej 41 2600 Glostrup Denmark
                        <br />
                        <BsTelephoneFill className="inline-block"></BsTelephoneFill> +45 89 87 06 63
                        <br />
                        <HiOutlineEnvelope className="text-xl inline-block"></HiOutlineEnvelope>
                        <a href="mailto:info@shehala.com"> info@shehala.com</a>
                      </p>
                    </div>

                    <div className="col-lg-6">
                      <h6> Canada Office</h6>

                      <p>
                        7 Chatterson Street, Whitby, Ontario, Canada, L1R 0B1
                        <br />
                        <BsTelephoneFill className="inline-block"></BsTelephoneFill> +1 (416) 686-3111
                        <br />
                        <BsTelephoneFill className="inline-block"></BsTelephoneFill> +1 (888) 340-9240 ( Toll
                        free )<br />
                        <HiOutlineEnvelope className="text-xl inline-block"></HiOutlineEnvelope>
                        <a href="mailto:contact@shehala.com">
                          {" "}
                          contact@shehala.com{" "}
                        </a>
                      </p>
                      <br />

                      <h6>U.S.A Office</h6>

                      <p>
                        410 Mercedes Street Benbrook TX-76126 U.S.A <br />
                        <BsTelephoneFill className="inline-block"></BsTelephoneFill> +1 (817) 249-9595
                        <br />
                        <HiOutlineEnvelope className="text-xl inline-block"></HiOutlineEnvelope>
                        <a href="mailto:contact@shehala.com">
                          {" "}
                          contact@shehala.com{" "}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="textwidget widget-text">
                    <h5 className="my-6">Follow Us On</h5>

                    <div className="social-icons circle social-hover">
                      <ul className="list-inline">
                        <li className="social-facebook">
                          <a
                            className="tooltip-top flex justify-center items-center"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.facebook.com/Shehala.IT.Limited"
                            data-tooltip="Facebook"
                          >
                            <FaFacebookF className="inline-block"></FaFacebookF>
                          </a>
                        </li>

                        <li className="social-twitter">
                          <a
                            className="tooltip-top flex justify-center items-center"
                            target="_blank"
                            rel="noreferrer"
                            href="https://twitter.com/ShehalaItLtd"
                            data-tooltip="Twitter"
                          >
                            <FaTwitter className="inline-block"></FaTwitter>
                          </a>
                        </li>

                        <li className="social-flickr">
                          <a
                            className=" tooltip-top flex justify-center items-center"
                            target="_blank"
                            rel="noreferrer"
                            href="https://twitter.com/ShehalaItLtd"
                            data-tooltip="flickr"
                          >
                            <FaFlickr className="inline-block"></FaFlickr>
                          </a>
                        </li>

                        <li className="social-linkedin">
                          <a
                            className=" tooltip-top flex justify-center items-center"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/authwall?trk=gf&amp;trkInfo=AQGrWWUn-p-ELQAAAXdIzb24Kb97ekE7HeXllo0OtCZiMqDU7httxeRyLhXiQ0ZYvx_RJMq-IDXCFrMzWKHaiZuWdC-1KcIQaQ-O6dPMoDquzxGDxPgpSpURbBflJhc6-t-hxz8=&amp;originalReferer=http://localhost/shehala.com/&amp;sessionRedirect=https%3A%2F%2Fbd.linkedin.com%2Fin%2Fshehala"
                            data-tooltip="LinkedIn"
                          >
                            <FaLinkedinIn className="inline-block"></FaLinkedinIn>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-footer-text ttm-bgcolor-darkgrey ttm-textcolor-white">
          <div className="container contain">
            <div className="row copyright">
              <div className="col-md-6">
                <div className="">
                  <span>
                    Copyright © 2021&nbsp;Shehala IT Limited - All right
                    reserved.
                  </span>
                </div>
              </div>

              <div className="col-md-6">
                <div className="text-md-right res-767-mt-10">
                  <div className="d-lg-inline-flex">
                    <ul id="menu-footer-menu" className="footer-nav-menu">
                      <li>
                        <a href="http://www.shehala.com/about-us">About Us</a>
                      </li>

                      <li>
                        <a href="http://www.shehala.com/code-of-conduct">
                          Code of Conduct
                        </a>
                      </li>

                      <li>
                        <a href="http://www.shehala.com/hse-policy">Privacy</a>
                      </li>
                    </ul>

                    <div className="float-md-right ml-20 res-767-ml-0">
                      <img
                        src="http://www.shehala.com/public/frontend/images/footer-payment-img.png"
                        alt="payment-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;