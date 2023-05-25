import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { MdDeveloperMode } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";

const Image = () => {
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
                    <h1 className="title">Clipping Path</h1>
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
                    <span>Image Production</span>
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
                    <img
                      className="img-fluid"
                      src="http://www.shehala.com/public/frontend/images/grap.jpg"
                      alt="single-img-twelve"
                    />
                  </div>
                  <div className="ttm-service-description">
                    <p>
                      Shehala IT Limited is one of the most fascinating images
                      editing service provider. That provides excellent quality
                      of isolating image editing services. Our company will
                      guarantee you the best quality done images. Basically we
                      know-clipping path is an outline which allows you to
                      remove a picture from its background .It is likely cutting
                      an image out of a document with scissor. You may also
                      catch a clipping path mentioned as a close vector path or
                      shape. You can change its background and can include
                      shadow. Anything you don’t went to appear in the edited
                      image, whether it’s background or other unexpected element
                      like a shadow or display stand can be banished.
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

                    <h5>CLIPPING PATH SERVICE IS REQUIRED FOR:</h5>
                    <ul>
                      <li>
                        <i className="fa fa-check-circle ttm-textcolor-skincolor"></i>{" "}
                        Removing background of an images
                      </li>
                      <li>
                        <i className="fa fa-check-circle ttm-textcolor-skincolor"></i>{" "}
                        Cutout or isolate the chosen images
                      </li>
                      <li>
                        <i className="fa fa-check-circle ttm-textcolor-skincolor"></i>{" "}
                        Make the Image Background Transparent
                      </li>
                      <li>
                        <i className="fa fa-check-circle ttm-textcolor-skincolor"></i>{" "}
                        Make the Image Background white
                      </li>
                      <li>
                        <i className="fa fa-check-circle ttm-textcolor-skincolor"></i>{" "}
                        Change the Image Background
                      </li>
                      <li>
                        <i className="fa fa-check-circle ttm-textcolor-skincolor"></i>{" "}
                        Create ads, Magazine Covers &amp; lot of other items in
                        Print Media
                      </li>
                      <li>
                        <i className="fa fa-check-circle ttm-textcolor-skincolor"></i>{" "}
                        Save Silhouette Selection with the images for future use
                      </li>
                      <li>
                        <i className="fa fa-check-circle ttm-textcolor-skincolor"></i>{" "}
                        Create desired layers, even multiple clipping path
                        layers by multiple selection
                      </li>
                      <li>
                        <i className="fa fa-check-circle ttm-textcolor-skincolor"></i>{" "}
                        Shadowing or Dropping Shadows of Desired Image
                      </li>
                      <li>
                        <i className="fa fa-check-circle ttm-textcolor-skincolor"></i>{" "}
                        Create Text or Photo Wrap for Special Effects
                      </li>
                      <li>
                        <i className="fa fa-check-circle ttm-textcolor-skincolor"></i>{" "}
                        Make separate components for animation
                      </li>
                    </ul>
                    <br />
                    <p>
                      We have a many expert designer and image editor. Our
                      skilled designer is the highly precise pen tool to outline
                      areas of a photo for Manipulation. By the way we can also
                      use the background remove to change the shape of image
                      edit a certain area or create a collage of several images
                      for an outstanding design. To be able to do this at
                      Shehala IT Limited, we make use of clipping path service
                      techniques.
                    </p>

                    <p>
                      Plain clipping path means background removal of objects
                      such as square, without slums. It is a basic selection of
                      the overall area of an object. By selecting an object in
                      Photoshop, we can dwell the object easily in any
                      appropriate background.
                    </p>

                    <p>
                      Basic clipping path is a normal clipping path which images
                      has standard turning with some holes. These kinds of
                      images are so simple to knock-out the background. It may
                      have 8-12 turns on it.
                    </p>

                    <p>
                      If you are searching for a service that can provide you
                      with a sharp, defined margin proper for publishing our
                      company has a reputation for delivering is each and every
                      time. We are proud of our finished product. Our trained
                      operators have years of experience on background removal,
                      Photo Editing, color correction, Neck Joint, Hair Masking,
                      Retouching and Restoration, Raster to vector etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 widget-area">
                <aside className="widget widget-nav-menu">
                  <ul className="widget-menu">
                    <li className="null">
                      <Link to="/service/web-development">Web Development</Link>
                    </li>
                    <li className="null">
                      <Link to="/service/ecommerce">Ecommerce Development</Link>
                    </li>
                    <li className="null">
                      <Link to="/service/cms">CMS Extensions</Link>
                    </li>
                    <li className="null">
                      <Link to="/service/banner">Banner Production</Link>
                    </li>
                    <li className="active">
                      <Link to="/service/image">Image Production</Link>
                    </li>
                    <li className="null">
                      <Link to="/service/page">Page Production</Link>
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

export default Image;
