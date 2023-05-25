import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { MdDeveloperMode } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";

const WebAppDevelopment = () => {
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
                    <h1 className="title">Web Application Development</h1>
                  </div>
                  {/*  /.page-title-captions  */}
                  <div className="breadcrumb-wrapper flex justify-center items-center">
                  <span>
                      <Link
                        title="Homepage"
                        className="flex justify-center items-center"
                        to="/"
                      >
                        <AiOutlineHome className="text-xl mr-2"></AiOutlineHome>
                        Home
                      </Link>
                    </span>
                    <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                    <span>Web Development</span>
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
                {/*  ttm-service-single-content-are  */}
                {/*  ttm-service-single-content-are  */}
                <div className="ttm-service-single-content-area">
                  <div className="ttm_single_image-wrapper mb-35">
                    <img
                      className="img-fluid"
                      src="http://www.shehala.com/public/frontend/images/webdevelopment.jpg"
                      alt="single-img-twelve"
                    />
                  </div>
                  <div className="ttm-service-description">
                    <h5>Iphone and Android Application:</h5>
                    <p>
                      Mobile application for Brand Shops all over the Europe. It
                      is possible to find YOUR favorite brand of clothes, shoes
                      and accessories through our application, City Brands. It
                      helps you to get a quick overview of the shops that just
                      sell your favorite brand in a city you do not know much
                      about. With a few clicks you can get guidance via map mode
                      view store contact information (phone number and email
                      address) and identify which other brands store retailer.
                      City Brands affects a wide range of Danish cities, and
                      make your search for specific brands much easier.
                    </p>
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
                    <h5>Iphone Application:</h5>
                    <p>
                      With Classic Race Aarhus app you all the time is updated
                      in relation to the latest news, maps, program, race
                      program, drivers, live results, tickets, sponsors, videos,
                      photo gallery and much else that moves in connection with
                      the Classic Race Aarhus. If you have with this app so all
                      the information you need in connection with the Classic
                      Race Aarhus, allowing you to easily and quickly in
                      connection with the race can keep up – either from the
                      sidelines when the cars whiz past, or if you just want to
                      be updated.
                    </p>
                    <h5>Online Christmas Calendar System:</h5>
                    <p>
                      During all the Christmas day starting with December 1 the
                      client will get the opportunity to insert questions,
                      sponsors as well as choosing winners for the Interactive
                      Christmas Quiz calendar.
                    </p>

                    <h5>File Manager Desktop Application:</h5>
                    <p>
                      Description: Managing, Uploading, Downloading, Checking
                      and Deleting Print Ready PDF for the group of Agencies and
                      Customers. It makes easy while there is an option for
                      chatting/commenting on each files and see the output live.
                    </p>

                    <h5>HTML5 Banner with Dynamic Backend:</h5>
                    <p>
                      Banner items can be changed dynamically from the backend
                      by the backend users/clients. There are also options to
                      see the click counts on every banners.
                    </p>

                    <h5>Online system for ordering the banners:</h5>
                    <p>
                      Through this online ordering system the banner clients can
                      send banner jobs directly, they can even check the status,
                      change the banner animations if necessary etc.
                    </p>

                    <h5>Catalog conversion system to flipbook:</h5>
                    <p>
                      Online catalog conversion from PDF to interactive Flipbook
                      format.
                    </p>

                    <h5>Mobile and Desktop Games:</h5>
                    <p>
                      We have developed several games both for mobile and
                      desktop platform. The mobile games in the app store and
                      google play are: Fly Copter, Tennis Juggle and for the
                      desktop platform the game names are – Co2 Connie(Shooting)
                    </p>
                  </div>
                </div>
                {/*  ttm-service-single-content-are end  */}
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
                    <li className="null">
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

export default WebAppDevelopment;
