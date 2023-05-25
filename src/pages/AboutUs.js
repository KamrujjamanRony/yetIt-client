import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { MdDeveloperMode } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const AboutUs = () => {
  const [countOn, setCountOn] = useState(false);
  return (
    <div className="page">
      {/* site-main start */}

      <div className="site-main">
        {/*  page-title  */}
        <div className="about-bg">
          <div className="ttm-page-title-row">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="aboutbg">
                    <div className="title-box text-center">
                      <div className="page-title-heading">
                        <h1 className="title">About Us</h1>
                      </div>
                      {/*  /.page-title-captions  */}
                      <div className="breadcrumb-wrapper flex justify-center">
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
                        <span>About Us</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  /.col-md-12  */}
              </div>
              {/*  /.row  */}
            </div>
            {/*  /.container  */}
          </div>
          {/*  page-title end */}
        </div>
        {/* site-main start */}
        {/* site-main start */}
        <div className="site-main">
          {/*  aboutus-section  */}
          <section className="ttm-row aboutus-section clearfix">
            <div className="container contain">
              <div className="row">
                {/*  row  */}
                <div className="col-lg-12">
                  {/*  section title  */}
                  <div className="section-title with-desc clearfix">
                    <div className="title-header">
                      <h5>About us</h5>
                      <h2 className="title">
                        We are here to Web Solution with 14 years of{" "}
                        <span>experience</span>
                      </h2>
                    </div>
                    <div className="title-desc">
                      <p>
                        Shehala IT is one of the fastest growing and forward
                        thinking IT solution companies in Bangladesh, delivering
                        outstanding software outsourcing services to clients in
                        EU (Denmark, Norway, Germany, Sweden), North America and
                        Japan since 2006. We have a successful track record in
                        serving our customers across the globe with vast
                        experience in technical domain such as ASP .Net, C#,
                        Java, PHP, iOS, Android. We have global presence in
                        different time zones. We use latest technology and
                        software for Web, e-commerce, Mobile Technology and
                        Print Media.
                      </p>
                    </div>
                  </div>
                  {/*  section title end  */}
                  {/*  row  */}

                  <p className="mb-0">
                    <b>
                      Shehala IT grew from four persons company to a 100 persons
                      company with in 14 years by repeatedly delivering client
                      satisfaction.
                    </b>
                  </p>
                  <Link
                    to="/portfolio"
                    className="ttm-btn ttm-btn-bgcolor-skincolor ttm-btn-size-md mt-35"
                  >
                    PORTFOLIO
                  </Link>
                </div>
              </div>
              {/*  row end  */}
            </div>
          </section>
          {/*  aboutus-section end  */}

          {/*  about-us-section  */}
          <section className="ttm-row zero-padding-section ttm-bgcolor-white clearfix">
            <div className="container contain">
              <div className="row no-gutters">
                <div className="col-md-12">
                  <div className="ttm-bgcolor-grey ttm-bg ttm-col-bgcolor-yes ttm-left-span spacing-7 position-relative z-1">
                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                      <div className="ttm-bg-layer-inner"></div>
                    </div>
                    <div className="layer-content">
                      <div className="row">
                        <div className="col-lg-6">
                          {/*  ttm_single_image-wrapper  */}
                          <div className="ttm_single_image-wrapper">
                            <iframe
                              title="youtube video"
                              width="100%"
                              height="675px"
                              src="https://www.youtube.com/embed/9fidoaaOn_4"
                              frameBorder="0"
                              allowfullscreen=""
                            ></iframe>
                          </div>
                          {/*  ttm_single_image-wrapper end  */}
                          <div className="about-overlay-02">
                            <h3>14 Years of</h3>
                            <p>Web Business Experience</p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="res-991-mt-30">
                            {/*  section title  */}
                            <div className="section-title with-desc clearfix">
                              <div className="title-header">
                                <h5>About Shehala IT</h5>
                                <h2 className="title font-medium">
                                  Shehala IT grew from four persons company to a
                                  100 persons company with in 14 years by
                                  repeatedly delivering
                                  <span className="block">
                                    client satisfaction.
                                  </span>
                                </h2>
                              </div>
                              <div className="title-desc">
                                <p></p>
                              </div>
                            </div>
                            {/*  section title end  */}
                            <div className="mt-30">
                              {/*  progress-bar  */}
                              <div
                                className="ttm-progress-bar"
                                data-percent="95%"
                              >
                                <div className="progress-bar-title">
                                  UI/UX Design
                                </div>
                                {/*  progress-bar-title  */}
                                <div className="progress-bar-inner">
                                  <div
                                    className="progress-bar progress-bar-color-bar_skincolor"
                                    style={{ width: "95%" }}
                                  ></div>
                                </div>
                                <div
                                  className="progress-bar-percent"
                                  data-percentage="95"
                                >
                                  95%
                                </div>
                                {/*  progress-bar-percent  */}
                              </div>
                              <div
                                className="ttm-progress-bar"
                                data-percent="95%"
                              >
                                <div className="progress-bar-title">
                                  Web/CMS Design
                                </div>
                                {/*  progress-bar-title  */}
                                <div className="progress-bar-inner">
                                  <div
                                    className="progress-bar progress-bar-color-bar_skincolor"
                                    style={{ width: "95%" }}
                                  ></div>
                                </div>
                                <div
                                  className="progress-bar-percent"
                                  data-percentage="95"
                                >
                                  95%
                                </div>
                                {/*  progress-bar-percent  */}
                              </div>
                              {/*  progress-bar END  */}
                              {/*  progress-bar  */}
                              <div
                                className="ttm-progress-bar"
                                data-percent="90%"
                              >
                                <div className="progress-bar-title">
                                  Web Application Development
                                </div>
                                {/*  progress-bar-title  */}
                                <div className="progress-bar-inner">
                                  <div
                                    className="progress-bar progress-bar-color-bar_skincolor"
                                    style={{ width: "90%" }}
                                  ></div>
                                </div>
                                <div
                                  className="progress-bar-percent"
                                  data-percentage="90"
                                >
                                  90%
                                </div>
                                {/*  progress-bar-percent  */}
                              </div>
                              {/*  progress-bar END  */}
                              {/*  progress-bar  */}
                              <div
                                className="ttm-progress-bar"
                                data-percent="95%"
                              >
                                <div className="progress-bar-title">
                                  Banner Production
                                </div>
                                {/*  progress-bar-TITLE  */}
                                <div className="progress-bar-inner">
                                  <div
                                    className="progress-bar progress-bar-color-bar_skincolor"
                                    style={{ width: "95%" }}
                                  ></div>
                                </div>
                                <div
                                  className="progress-bar-percent"
                                  data-percentage="95"
                                >
                                  95%
                                </div>
                                {/*  progress-bar-PERCENT  */}
                              </div>
                              {/*  progress-bar END  */}
                              {/*  progress-bar  */}
                              <div
                                className="ttm-progress-bar"
                                data-percent="98%"
                              >
                                <div className="progress-bar-title">
                                  Image Production
                                </div>
                                {/*  progress-bar-title  */}
                                <div className="progress-bar-inner">
                                  <div
                                    className="progress-bar progress-bar-color-bar_skincolor"
                                    style={{ width: "98%" }}
                                  ></div>
                                </div>
                                <div
                                  className="progress-bar-percent"
                                  data-percentage="98"
                                >
                                  98%
                                </div>
                                {/*  progress-bar-percent  */}
                              </div>
                              {/*  progress-bar END  */}
                              {/*  progress-bar  */}
                              <div
                                className="ttm-progress-bar"
                                data-percent="95%"
                              >
                                <div className="progress-bar-title">
                                  Page Production
                                </div>
                                {/*  progress-bar-TITLE  */}
                                <div className="progress-bar-inner">
                                  <div
                                    className="progress-bar progress-bar-color-bar_skincolor"
                                    style={{ width: "95%" }}
                                  ></div>
                                </div>
                                <div
                                  className="progress-bar-percent"
                                  data-percentage="95"
                                >
                                  95%
                                </div>
                                {/*  progress-bar-PERCENT  */}
                              </div>
                              {/*  progress-bar END  */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  about-us-section  */}

          {/*  fid-section  */}
          <section className="ttm-row fid-section ttm-bgcolor-darkgrey ttm-bg ttm-bgimage-yes bg-img10 mt_225 res-991-mt-0 clearfix">
            <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
            <div className="container">
              {/*  row  */}
              <ScrollTrigger
                        onEnter={() => setCountOn(true)}
                        onExit={() => setCountOn(false)}
                      >
                        <div className="row">
                <div className="col-md-3 col-sm-6">
                  {/*   ttm-icon  */}
                  <div className="ttm-fid inside ttm-fid-view-topicon">
                    <div className="ttm-fid-icon-wrapper">
                      <div className="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-lg">
                        <HiOutlineBuildingLibrary className="text-white text-5xl inline-block m-auto"></HiOutlineBuildingLibrary>
                        {/*   ttm-icon  */}
                      </div>
                    </div>
                    <div className="ttm-fid-contents">
                      {/*   ttm-fid-contents  */}
                      <h4 className="my-7">
                      {countOn && (
                                    <CountUp
                                      start={0}
                                      end={25}
                                      delay={0}
                                      duration={3}
                                    >
                                      {({ countUpRef }) => (
                                        <div>
                                          <span ref={countUpRef} className="text-4xl" />
                                        </div>
                                      )}
                                    </CountUp>
                                  )}
                      </h4>
                      <h3 className="ttm-fid-title">Markets</h3>
                      {/*   ttm-fid-title  */}
                    </div>
                    {/*  ttm-fid-contents end  */}
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  {/*   ttm-icon  */}
                  <div className="ttm-fid inside ttm-fid-view-topicon">
                    <div className="ttm-fid-icon-wrapper">
                      <div className="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-lg">
                        <MdDeveloperMode className="text-white text-5xl inline-block m-auto"></MdDeveloperMode>
                        {/*   ttm-icon  */}
                      </div>
                    </div>
                    <div className="ttm-fid-contents">
                      {/*   ttm-fid-contents  */}
                      <h4 className="my-7">
                      {countOn && (
                                    <CountUp
                                      start={0}
                                      end={90}
                                      delay={0}
                                      duration={3}
                                    >
                                      {({ countUpRef }) => (
                                        <div>
                                          <span ref={countUpRef} className="text-4xl" />
                                        </div>
                                      )}
                                    </CountUp>
                                  )}
                      </h4>
                      <h3 className="ttm-fid-title">FTE</h3>
                      {/*   ttm-fid-title  */}
                    </div>
                    {/*  ttm-fid-contents end  */}
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  {/*   ttm-icon  */}
                  <div className="ttm-fid inside ttm-fid-view-topicon">
                    <div className="ttm-fid-icon-wrapper">
                      <div className="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-lg">
                        <Ri24HoursLine className="text-white text-5xl inline-block m-auto"></Ri24HoursLine>
                        {/*   ttm-icon  */}
                      </div>
                    </div>
                    <div className="ttm-fid-contents">
                      {/*   ttm-fid-contents  */}
                      <h4 className="my-7">
                      {countOn && (
                                    <CountUp
                                      start={0}
                                      end={13214}
                                      delay={0}
                                      duration={3}
                                    >
                                      {({ countUpRef }) => (
                                        <div>
                                          <span ref={countUpRef} className="text-4xl" />
                                        </div>
                                      )}
                                    </CountUp>
                                  )}
                      </h4>
                      <h3 className="ttm-fid-title">Jobs Completed</h3>
                      {/*   ttm-fid-title  */}
                    </div>
                    {/*  ttm-fid-contents end  */}
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  {/*   ttm-icon  */}
                  <div className="ttm-fid inside ttm-fid-view-topicon">
                    <div className="ttm-fid-icon-wrapper">
                      <div className="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-lg">
                        <TbReportSearch className="text-white text-5xl inline-block m-auto"></TbReportSearch>
                        {/*   ttm-icon  */}
                      </div>
                    </div>
                    <div className="ttm-fid-contents">
                      {/*   ttm-fid-contents  */}
                      <h4 className="my-7">
                      {countOn && (
                                    <CountUp
                                      start={0}
                                      end={323510}
                                      delay={0}
                                      duration={3}
                                    >
                                      {({ countUpRef }) => (
                                        <div>
                                          <span ref={countUpRef} className="text-4xl" />
                                        </div>
                                      )}
                                    </CountUp>
                                  )}
                      </h4>
                      <h3 className="ttm-fid-title">Deliverables</h3>
                      {/*   ttm-fid-title  */}
                    </div>
                    {/*  ttm-fid-contents end  */}
                  </div>
                </div>
              </div>
                      </ScrollTrigger>
              {/*  row end */}
            </div>
          </section>
          {/*  fid-section end  */}
        </div>
        {/* site-main end */}
      </div>
      {/* site-main end */}
    </div>
  );
};

export default AboutUs;
