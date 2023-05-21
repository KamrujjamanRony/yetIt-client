import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { MdDeveloperMode } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";

const AboutUs = () => {
  return (
    <div class="page">

      {/* site-main start */}

      <div class="site-main">
        {/*  page-title  */}
        <div class="about-bg">
          <div class="ttm-page-title-row">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="aboutbg">
                    <div class="title-box text-center">
                      <div class="page-title-heading">
                        <h1 class="title">About Us</h1>
                      </div>
                      {/*  /.page-title-captions  */}
                      <div class="breadcrumb-wrapper flex justify-center items-center">
                        <span>
                          <a title="Homepage" className=" flex justify-center items-center" href="http://www.shehala.com">
                            <AiOutlineHome className="text-xl mr-2"></AiOutlineHome>Home
                          </a>
                        </span>
                        <span class="ttm-bread-sep">&nbsp; : : &nbsp;</span>
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
        <div class="site-main">
          {/*  aboutus-section  */}
          <section class="ttm-row aboutus-section clearfix">
            <div class="container contain">
              <div class="row">
                {/*  row  */}
                <div class="col-lg-12">
                  {/*  section title  */}
                  <div class="section-title with-desc clearfix">
                    <div class="title-header">
                      <h5>About us</h5>
                      <h2 class="title">
                        We are here to Web Solution with 14 years of{" "}
                        <span>experience</span>
                      </h2>
                    </div>
                    <div class="title-desc">
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

                  <p class="mb-0">
                    <b>
                      Shehala IT grew from four persons company to a 100 persons
                      company with in 14 years by repeatedly delivering client
                      satisfaction.
                    </b>
                  </p>
                  <a
                    href="http://www.shehala.com/portfolio"
                    class="ttm-btn ttm-btn-bgcolor-skincolor ttm-btn-size-md mt-35"
                  >
                    PORTFOLIO
                  </a>
                </div>
              </div>
              {/*  row end  */}
            </div>
          </section>
          {/*  aboutus-section end  */}

          {/*  about-us-section  */}
          <section class="ttm-row zero-padding-section ttm-bgcolor-white clearfix">
            <div class="container contain">
              <div class="row no-gutters">
                <div class="col-md-12">
                  <div class="ttm-bgcolor-grey ttm-bg ttm-col-bgcolor-yes ttm-left-span spacing-7 position-relative z-1">
                    <div class="ttm-col-wrapper-bg-layer ttm-bg-layer">
                      <div class="ttm-bg-layer-inner"></div>
                    </div>
                    <div class="layer-content">
                      <div class="row">
                        <div class="col-lg-6">
                          {/*  ttm_single_image-wrapper  */}
                          <div class="ttm_single_image-wrapper">
                            <iframe
                              width="100%"
                              height="675px"
                              src="https://www.youtube.com/embed/9fidoaaOn_4"
                              frameborder="0"
                              allowfullscreen=""
                            ></iframe>
                          </div>
                          {/*  ttm_single_image-wrapper end  */}
                          <div class="about-overlay-02">
                            <h3>14 Years of</h3>
                            <p>Web Business Experience</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="res-991-mt-30">
                            {/*  section title  */}
                            <div class="section-title with-desc clearfix">
                              <div class="title-header">
                                <h5>About Shehala IT</h5>
                                <h2 class="title font-medium">
                                  Shehala IT grew from four persons company to a
                                  100 persons company with in 14 years by
                                  repeatedly delivering
                                  <span className="block">client satisfaction.</span>
                                </h2>
                              </div>
                              <div class="title-desc">
                                <p></p>
                              </div>
                            </div>
                            {/*  section title end  */}
                            <div class="mt-30">
                              {/*  progress-bar  */}
                              <div class="ttm-progress-bar" data-percent="95%">
                                <div class="progress-bar-title">
                                  UI/UX Design
                                </div>
                                {/*  progress-bar-title  */}
                                <div class="progress-bar-inner">
                                  <div
                                    class="progress-bar progress-bar-color-bar_skincolor"
                                    style={{width: "95%"}}
                                  ></div>
                                </div>
                                <div
                                  class="progress-bar-percent"
                                  data-percentage="95"
                                >
                                  95%
                                </div>
                                {/*  progress-bar-percent  */}
                              </div>
                              <div class="ttm-progress-bar" data-percent="95%">
                                <div class="progress-bar-title">
                                  Web/CMS Design
                                </div>
                                {/*  progress-bar-title  */}
                                <div class="progress-bar-inner">
                                  <div
                                    class="progress-bar progress-bar-color-bar_skincolor"
                                    style={{width: "95%"}}
                                  ></div>
                                </div>
                                <div
                                  class="progress-bar-percent"
                                  data-percentage="95"
                                >
                                  95%
                                </div>
                                {/*  progress-bar-percent  */}
                              </div>
                              {/*  progress-bar END  */}
                              {/*  progress-bar  */}
                              <div class="ttm-progress-bar" data-percent="90%">
                                <div class="progress-bar-title">
                                  Web Application Development
                                </div>
                                {/*  progress-bar-title  */}
                                <div class="progress-bar-inner">
                                  <div
                                    class="progress-bar progress-bar-color-bar_skincolor"
                                    style={{width: "90%"}}
                                  ></div>
                                </div>
                                <div
                                  class="progress-bar-percent"
                                  data-percentage="90"
                                >
                                  90%
                                </div>
                                {/*  progress-bar-percent  */}
                              </div>
                              {/*  progress-bar END  */}
                              {/*  progress-bar  */}
                              <div class="ttm-progress-bar" data-percent="95%">
                                <div class="progress-bar-title">
                                  Banner Production
                                </div>
                                {/*  progress-bar-TITLE  */}
                                <div class="progress-bar-inner">
                                  <div
                                    class="progress-bar progress-bar-color-bar_skincolor"
                                    style={{width: "95%"}}
                                  ></div>
                                </div>
                                <div
                                  class="progress-bar-percent"
                                  data-percentage="95"
                                >
                                  95%
                                </div>
                                {/*  progress-bar-PERCENT  */}
                              </div>
                              {/*  progress-bar END  */}
                              {/*  progress-bar  */}
                              <div class="ttm-progress-bar" data-percent="98%">
                                <div class="progress-bar-title">
                                  Image Production
                                </div>
                                {/*  progress-bar-title  */}
                                <div class="progress-bar-inner">
                                  <div
                                    class="progress-bar progress-bar-color-bar_skincolor"
                                    style={{width: "98%"}}
                                  ></div>
                                </div>
                                <div
                                  class="progress-bar-percent"
                                  data-percentage="98"
                                >
                                  98%
                                </div>
                                {/*  progress-bar-percent  */}
                              </div>
                              {/*  progress-bar END  */}
                              {/*  progress-bar  */}
                              <div class="ttm-progress-bar" data-percent="95%">
                                <div class="progress-bar-title">
                                  Page Production
                                </div>
                                {/*  progress-bar-TITLE  */}
                                <div class="progress-bar-inner">
                                  <div
                                    class="progress-bar progress-bar-color-bar_skincolor"
                                    style={{width: "95%"}}
                                  ></div>
                                </div>
                                <div
                                  class="progress-bar-percent"
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
          <section class="ttm-row fid-section ttm-bgcolor-darkgrey ttm-bg ttm-bgimage-yes bg-img10 mt_225 res-991-mt-0 clearfix">
            <div class="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
            <div class="container">
              {/*  row  */}
              <div class="row">
                <div class="col-md-3 col-sm-6">
                  {/*   ttm-icon  */}
                  <div class="ttm-fid inside ttm-fid-view-topicon">
                    <div class="ttm-fid-icon-wrapper">
                      <div class="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-lg">
                        <HiOutlineBuildingLibrary className="text-white text-5xl inline-block m-auto"></HiOutlineBuildingLibrary>
                        {/*   ttm-icon  */}
                      </div>
                    </div>
                    <div class="ttm-fid-contents">
                      {/*   ttm-fid-contents  */}
                      <h4>
                        <span
                          data-appear-animation="animateDigits"
                          data-from="0"
                          data-to="25"
                          data-interval="5"
                          data-before=""
                          data-before-style="sup"
                          data-after=""
                          data-after-style="sub"
                        >
                          0
                        </span>
                      </h4>
                      <h3 class="ttm-fid-title">Markets</h3>
                      {/*   ttm-fid-title  */}
                    </div>
                    {/*  ttm-fid-contents end  */}
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  {/*   ttm-icon  */}
                  <div class="ttm-fid inside ttm-fid-view-topicon">
                    <div class="ttm-fid-icon-wrapper">
                      <div class="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-lg">
                        <MdDeveloperMode className="text-white text-5xl inline-block m-auto"></MdDeveloperMode>
                        {/*   ttm-icon  */}
                      </div>
                    </div>
                    <div class="ttm-fid-contents">
                      {/*   ttm-fid-contents  */}
                      <h4>
                        <span
                          data-appear-animation="animateDigits"
                          data-from="0"
                          data-to="90"
                          data-interval="5"
                          data-before=""
                          data-before-style="sup"
                          data-after=""
                          data-after-style="sub"
                        >
                          0
                        </span>
                      </h4>
                      <h3 class="ttm-fid-title">FTE</h3>
                      {/*   ttm-fid-title  */}
                    </div>
                    {/*  ttm-fid-contents end  */}
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  {/*   ttm-icon  */}
                  <div class="ttm-fid inside ttm-fid-view-topicon">
                    <div class="ttm-fid-icon-wrapper">
                      <div class="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-lg">
                        <Ri24HoursLine className="text-white text-5xl inline-block m-auto"></Ri24HoursLine>
                        {/*   ttm-icon  */}
                      </div>
                    </div>
                    <div class="ttm-fid-contents">
                      {/*   ttm-fid-contents  */}
                      <h4>
                        <span
                          data-appear-animation="animateDigits"
                          data-from="0"
                          data-to="13214"
                          data-interval="5"
                          data-before=""
                          data-before-style="sup"
                          data-after=""
                          data-after-style="sub"
                        >
                          0
                        </span>
                      </h4>
                      <h3 class="ttm-fid-title">Jobs Completed</h3>
                      {/*   ttm-fid-title  */}
                    </div>
                    {/*  ttm-fid-contents end  */}
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  {/*   ttm-icon  */}
                  <div class="ttm-fid inside ttm-fid-view-topicon">
                    <div class="ttm-fid-icon-wrapper">
                      <div class="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-lg">
                        <TbReportSearch className="text-white text-5xl inline-block m-auto"></TbReportSearch>
                        {/*   ttm-icon  */}
                      </div>
                    </div>
                    <div class="ttm-fid-contents">
                      {/*   ttm-fid-contents  */}
                      <h4>
                        <span
                          data-appear-animation="animateDigits"
                          data-from="0"
                          data-to="323510"
                          data-interval="5"
                          data-before=""
                          data-before-style="sup"
                          data-after=""
                          data-after-style="sub"
                        >
                          0
                        </span>
                      </h4>
                      <h3 class="ttm-fid-title">Deliverables</h3>
                      {/*   ttm-fid-title  */}
                    </div>
                    {/*  ttm-fid-contents end  */}
                  </div>
                </div>
              </div>
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
