import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { MdDeveloperMode } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";

const Cms = () => {
  const [countOn, setCountOn] = useState(false);
    return (
        <div className="site-main">
      {/*  page-title  */}
      <div className="webdesign-bg">
        <div className="ttm-page-title-row">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title-box text-center">
                  <div className="page-title-heading">
                    <h1 className="title">Wordpress Plugin Development</h1>
                  </div>
                  {/*  /.page-title-captions  */}
                  <div className="breadcrumb-wrapper flex justify-center items-center">
                    <span>
                      <a
                        title="Homepage"
                        className="flex justify-center items-center"
                        href="http://www.shehala.com"
                      >
                        <AiOutlineHome className="text-xl mr-2"></AiOutlineHome>
                        Home
                      </a>
                    </span>
                    <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                    <span>CMS Extensions</span>
                  </div>
                </div>
              </div>
              {/*  /.col-md-12  */}
            </div>
            {/*  /.row  */}
          </div>
          {/*  /.container  */}
        </div>
      </div>
      {/*  page-title end */}
      {/* site-main start */}
      <div className="site-main">
        {/*  sidebar  */}
        <div className="sidebar ttm-sidebar ttm-bgcolor-white clearfix">
          <div className="container contain">
            {/*  row  */}
            <div className="row">
            <div className="col-lg-9 content-area order-lg-2">
                        <div className="ttm-service-single-content-area">
                            <div className="ttm_single_image-wrapper mb-35">
                                <img className="img-fluid" src="http://www.shehala.com/public/frontend/images/Responsive-Design-1.jpg" alt="single-img-twelve"/>
                            </div>
                            <div className="ttm-service-description">

                            <p>We at Shehala IT Limited are proud of being the best WordPress plugin development solution across the nation and worldwide. We aren’t just limited to Plugins, we also specialize in theme designs &amp; developments.In fact, here at Shehala IT Limited, we have a dedicated team of experienced and innovative WordPress Plugin developers ready to meet your needs. During the last two years, our expert developers have helped hundreds of businesses get and maintain WordPress Plugins— with ease &amp; efficiency.</p>
                            <ScrollTrigger
                        onEnter={() => setCountOn(true)}
                        onExit={() => setCountOn(false)}
                      >
                        <div className="row no-gutters box-shadow mb-35">
                          <div className="col-md-4 col-sm-4">
                            <div className="ttm-fid inside ttm-fid-view-lefticon style2">
                              <div className="ttm-fid-left">
                                <div className="ttm-fid-icon-wrapper">
                                  <HiOutlineBuildingLibrary className="text-5xl text-primary" />
                                </div>
                              </div>
                              <div className="ttm-fid-contents text-left">
                                <h4 className="ttm-fid-inner">
                                  {countOn && (
                                    <CountUp
                                      start={0}
                                      end={14}
                                      delay={0}
                                      duration={3}
                                      suffix="+"
                                    >
                                      {({ countUpRef }) => (
                                        <div>
                                          <span
                                            ref={countUpRef}
                                            className="text-4xl"
                                          />
                                        </div>
                                      )}
                                    </CountUp>
                                  )}
                                </h4>
                                <h3 className="ttm-fid-title">
                                  Years Experience
                                </h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            <div className="ttm-fid inside ttm-fid-view-lefticon style2">
                              <div className="ttm-fid-left">
                                <div className="ttm-fid-icon-wrapper">
                                  <MdDeveloperMode className="text-5xl text-primary" />
                                </div>
                              </div>
                              <div className="ttm-fid-contents text-left">
                                <h4 className="ttm-fid-inner">
                                  {countOn && (
                                    <CountUp
                                      start={0}
                                      end={90}
                                      delay={0}
                                      duration={3}
                                      suffix="+"
                                    >
                                      {({ countUpRef }) => (
                                        <div>
                                          <span
                                            ref={countUpRef}
                                            className="text-4xl"
                                          />
                                        </div>
                                      )}
                                    </CountUp>
                                  )}
                                </h4>
                                <h3 className="ttm-fid-title">Happy Clients</h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            <div className="ttm-fid inside ttm-fid-view-lefticon style2">
                              <div className="ttm-fid-left">
                                <div className="ttm-fid-icon-wrapper">
                                  <TbReportSearch className="text-5xl text-primary" />
                                </div>
                              </div>
                              <div className="ttm-fid-contents text-left">
                                <h4 className="ttm-fid-inner">
                                  {countOn && (
                                    <CountUp
                                      start={0}
                                      end={13214}
                                      delay={0}
                                      duration={3}
                                      suffix="+"
                                    >
                                      {({ countUpRef }) => (
                                        <div>
                                          <span
                                            ref={countUpRef}
                                            className="text-4xl"
                                          />
                                        </div>
                                      )}
                                    </CountUp>
                                  )}
                                </h4>
                                <h3 className="ttm-fid-title">
                                  Jobs Completed
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollTrigger>

                                <h5>We are committed to provide for your multiplex requirement:</h5>
                                <ul>
                                <li><i className="fa fa-check-circle ttm-textcolor-skincolor"></i> WP Plugin Development</li>
                                <li><i className="fa fa-check-circle ttm-textcolor-skincolor"></i> WP Plugin Installation</li>
                                <li><i className="fa fa-check-circle ttm-textcolor-skincolor"></i> WP Plugin Customization</li>
                                <li><i className="fa fa-check-circle ttm-textcolor-skincolor"></i> WP Plugin Integration</li>
                                <li><i className="fa fa-check-circle ttm-textcolor-skincolor"></i> WP Plugin Upgrades</li>
                                </ul><br/>
                                <h5>After Service Support:</h5>

                                <p>If you have ever installed a WordPress Plugin, then you know what it means when you realize all kinds of ugly red flashing banners or text on your dashboard. With Shehala IT Limited, you will never need to worry about those messages because:</p>
                                <ul>
                                <li><i className="fa fa-check-circle ttm-textcolor-skincolor"></i> We handle all improvements to our Custom Plugins, nevertheless of the theme you choose</li>
                                <li><i className="fa fa-check-circle ttm-textcolor-skincolor"></i> Our Plugins are carefully designed with future changes &amp; updates in mind</li>
                                <li><i className="fa fa-check-circle ttm-textcolor-skincolor"></i> We promise our custom WordPress Plugins will never leave your site or information weak to hackers or identity thieves</li>
                                <li><i className="fa fa-check-circle ttm-textcolor-skincolor"></i> 24/6 Customer &amp; Technical Support available by Chat &amp; Email</li>
                                </ul><br/>
                           <p> Business Owners that want professional websites with useful dynamic elements need look no further than the WordPress platform &amp; our Custom Plugin developers.</p>
                            </div>
                        </div>
                    </div>
              <div className="col-lg-3 widget-area">
                <aside className="widget widget-nav-menu">
                  <ul className="widget-menu">
                    <li className="null">
                      <Link to="/service/web-development">
                        Web Development
                      </Link>
                    </li>
                    <li className="null">
                      <Link to="/service/ecommerce">
                        Ecommerce Development
                      </Link>
                    </li>
                    <li className="active">
                      <Link to="/service/cms">
                        CMS Extensions
                      </Link>
                    </li>
                    <li className="null">
                      <Link to="/service/banner">
                        Banner Production
                      </Link>
                    </li>
                    <li className="null">
                      <Link to="/service/image">
                        Image Production
                      </Link>
                    </li>
                    <li className="null">
                      <Link to="/service/page">
                        Page Production
                      </Link>
                    </li>
                  </ul>
                </aside>
                <aside className="widget widget-text">
                  <h3 className="widget-title">About Us</h3>
                  <div className="ttm-author-widget">
                    <h4 className="author-name">Altech-author</h4>
                    <p className="author-widget_text">
                      Shehala IT is one of the fastest growing and forward
                      thinking IT solution companies in Bangladesh, delivering
                      outstanding software outsourcing services to clients in EU
                      (Denmark, Norway, Germeny, Sweden), North America and
                      Japan since 2006.
                    </p>
                  </div>
                </aside>

                <aside className="widget widget_media_image">
                  <div className="banner-img-box ttm-textcolor-white text-left">
                    <div className="featured-content featured-content-banner">
                      <Ri24HoursLine className="text-5xl"></Ri24HoursLine>
                      <div className="featured-title ttm-box-title">
                        <h5>How Can We Help?</h5>
                      </div>
                      <div className="featured-desc">
                        <p>
                          If you need any help, please
                          <br /> feel free to contact us.
                        </p>
                      </div>
                      <ul>
                        <li>
                          <i className="fa fa-phone"></i>+1 (416) 686-3111{" "}
                        </li>
                        <li>
                          <i className="fa fa-envelope-o"></i>
                          <a href="mailto:info@example.com">info@shehala.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
            {/*  row end  */}
          </div>
        </div>
        {/*  sidebar end  */}
      </div>
      {/* site-main end */}
    </div>
    );
};

export default Cms;