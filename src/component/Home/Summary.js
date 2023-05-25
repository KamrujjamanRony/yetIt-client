import { Ri24HoursLine } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import {
  AiOutlineDatabase,
  AiOutlineInteraction,
  AiOutlineGlobal,
} from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const Summary = () => {
  const [countOn, setCountOn] = useState(false);
  return (
    <section className="ttm-row bottomzero-padding-section bg-img6 position-relative z-1 clearfix">
      <div className="container contain">
        <div className="row no-gutters">
          <div className="col-lg-10">
            <div className="ttm-bgcolor-skincolor ttm-bg ttm-col-bgcolor-yes ttm-left-span mb_80 res-991-mb-0">
              <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                <div className="ttm-bg-layer-inner"></div>
              </div>
              <div className="layer-content">
                <div className="row">
                  <div className="col-lg-11">
                    <div className="spacing-5">
                      {/* <!-- section title --> */}
                      <div className="section-title with-desc mb-40 clearfix">
                        <div className="title-header">
                          <h5>About Shehala IT</h5>
                          <h2 className="title">
                            Trusted by 5,000+ <span>Happy Clients</span>
                          </h2>
                        </div>
                        <div className="title-desc">
                          <p>
                            Shehala IT grew from four persons company to a 100
                            persons company with in 14 years by repeatedly
                            delivering client satisfaction.
                          </p>
                        </div>
                      </div>
                      {/* <!-- section title end --> */}
                      <div className="row">
                        <div className="col-md-4">
                          {/* <!--  featured-icon-box -->  */}
                          <div className="featured-icon-box style4 left-icon">
                            <div className="featured-icon">
                              {/* <!--  featured-icon -->  */}
                              <div className="ttm-icon ttm-icon_element-color-white ttm-icon_element-size-md">
                                <Ri24HoursLine className="text-white text-4xl"></Ri24HoursLine>
                                {/* <!--  ttm-icon -->  */}
                              </div>
                            </div>
                            <div className="featured-content">
                              {/* <!--  featured-content --> */}
                              <div className="featured-title">
                                {/* <!--  featured-title --> */}
                                <h5 className="fw-500">100% Satisfaction</h5>
                              </div>
                            </div>
                          </div>
                          {/* <!--  featured-icon-box END --> */}
                        </div>
                        <div className="col-md-4">
                          {/* <!--  featured-icon-box -->  */}
                          <div className="featured-icon-box style4 left-icon">
                            <div className="featured-icon">
                              {/* <!--  featured-icon -->  */}
                              <div className="ttm-icon ttm-icon_element-color-white ttm-icon_element-size-md">
                                <FaLaptopCode className="text-white text-4xl"></FaLaptopCode>
                                {/* <!--  ttm-icon -->  */}
                              </div>
                            </div>
                            <div className="featured-content">
                              {/* <!--  featured-content --> */}
                              <div className="featured-title">
                                {/* <!--  featured-title --> */}
                                <h5 className="fw-500">
                                  World Class Developer
                                </h5>
                              </div>
                            </div>
                          </div>
                          {/* <!--  featured-icon-box END --> */}
                        </div>
                        <div className="col-md-4">
                          {/* <!--  featured-icon-box -->  */}
                          <div className="featured-icon-box style4 left-icon">
                            <div className="featured-icon">
                              {/* <!--  featured-icon -->  */}
                              <div className="ttm-icon ttm-icon_element-color-white ttm-icon_element-size-md">
                                <AiOutlineDatabase className="text-white text-4xl"></AiOutlineDatabase>
                                {/* <!--  ttm-icon -->  */}
                              </div>
                            </div>
                            <div className="featured-content">
                              {/* <!--  featured-content --> */}
                              <div className="featured-title">
                                {/* <!--  featured-title --> */}
                                <h5 className="fw-500">
                                  World Class Designer &amp; 3D Artist
                                </h5>
                              </div>
                            </div>
                          </div>
                          {/* <!--  featured-icon-box END --> */}
                        </div>
                      </div>
                      <ScrollTrigger
                        onEnter={() => setCountOn(true)}
                        onExit={() => setCountOn(false)}
                      >
                        <div className="row ttm-fid-row-wrapper">
                          <div className="col-md-3 col-sm-3 Completedbox">
                            {/* <!--ttm-fid--> */}
                            <div className="ttm-fid inside ttm-fid-view-lefticon style1">
                              <div className="ttm-fid-left">
                                {/* <!--ttm-fid-left--> */}
                                <div className="ttm-fid-icon-wrapper">
                                  <MdDeveloperMode className="text-white text-6xl"></MdDeveloperMode>
                                </div>
                              </div>
                              <div className="ttm-fid-contents text-left">
                                {/* <!--ttm-fid-contents--> */}
                                <h4 className="ttm-fid-inner">
                                  {countOn && (
                                    <CountUp
                                      start={0}
                                      end={14}
                                      delay={0}
                                      duration={3}
                                      className="text-4xl"
                                    >
                                      {({ countUpRef }) => (
                                        <div>
                                          <span ref={countUpRef} className="text-4xl" />
                                        </div>
                                      )}
                                    </CountUp>
                                  )}
                                </h4>
                                <h3 className="ttm-fid-title text-3xl">
                                  Markets
                                </h3>
                                {/* <!--ttm-fid-title--> */}
                              </div>
                            </div>
                            {/* <!-- ttm-fid end--> */}
                          </div>
                          <div className="col-md-3 col-sm-3 Completedbox">
                            {/* <!--ttm-fid--> */}
                            <div className="ttm-fid inside ttm-fid-view-lefticon style1">
                              <div className="ttm-fid-left">
                                {/* <!--ttm-fid-left--> */}
                                <div className="ttm-fid-icon-wrapper">
                                  <MdDeveloperMode className="text-white text-6xl"></MdDeveloperMode>
                                </div>
                              </div>
                              <div className="ttm-fid-contents text-left">
                                {/* <!--ttm-fid-contents--> */}
                                <h4 className="ttm-fid-inner">
                                {countOn && (
                                    <CountUp
                                      start={0}
                                      end={90}
                                      delay={0}
                                      duration={3}
                                      className="text-4xl"
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
                                {/* <!--ttm-fid-title--> */}
                              </div>
                            </div>
                            {/* <!-- ttm-fid end--> */}
                          </div>
                          <div className="col-md-3 col-sm-3 Completedbox">
                            {/* <!--ttm-fid--> */}
                            <div className="ttm-fid inside ttm-fid-view-lefticon style1">
                              <div className="ttm-fid-left">
                                <div className="ttm-fid-icon-wrapper">
                                  <AiOutlineInteraction className="text-white text-6xl pr-5"></AiOutlineInteraction>
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
                                      className="text-4xl"
                                    >
                                      {({ countUpRef }) => (
                                        <div>
                                          <span ref={countUpRef} className="text-4xl" />
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
                            {/* <!-- ttm-fid end--> */}
                          </div>
                          <div className="col-md-3 col-sm-3 Completedbox">
                            {/* <!--ttm-fid--> */}
                            <div className="ttm-fid inside ttm-fid-view-lefticon style1">
                              <div className="ttm-fid-left">
                                <div className="ttm-fid-icon-wrapper">
                                  <AiOutlineGlobal className="text-white text-6xl pr-5"></AiOutlineGlobal>
                                </div>
                              </div>
                              <div className="ttm-fid-contents text-left">
                                <h4 className="ttm-fid-inner">
                                {countOn && (
                                    <CountUp
                                      start={0}
                                      end={323510}
                                      delay={0}
                                      duration={3}
                                      className="text-4xl"
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
                              </div>
                            </div>
                            {/* <!-- ttm-fid end--> */}
                          </div>
                        </div>
                      </ScrollTrigger>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
