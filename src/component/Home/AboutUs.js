import { TfiMedall, TfiBookmarkAlt } from "react-icons/tfi";

const AboutUs = () => {
    return (
        <section className="ttm-row aboutus-section-style2 clearfix home-page">
          <div className="container contain">
            <div className="row no-gutters align-items-center">
              {/* <!-- row --> */}
              <div className="col-lg-6">
                {/* <!-- ttm_single_image-wrapper --> */}
                <div className="ttm_single_image-wrapper">
                  <img
                    className="img-fluid p-1"
                    src="http://www.shehala.com/public/frontend/images/about2.jpg"
                    title="single-img-two"
                    alt="single-img-two"
                  />
                </div>
                {/* <!-- ttm_single_image-wrapper end --> */}
              </div>

              <div className="col-lg-6">
                <div className="spacing-4 ttm-bgcolor-grey res-991-mt-30">
                  {/* <!-- section title --> */}
                  <div className="section-title with-desc clearfix">
                    <div className="title-header">
                      <h5>About Shehala IT Limited</h5>
                      <h3 className="title text-3xl bold font-medium">
                        Shehala IT grew from four persons company to a 100
                        persons company with in 14 years by repeatedly
                        delivering client satisfaction.
                      </h3>
                    </div>
                    <div className="title-desc">
                      <p>
                        Shehala IT is one of the fastest growing and forward
                        thinking IT solution companies in Bangladesh, delivering
                        outstanding software outsourcing services to clients in
                        EU (Denmark, Norway, Germeny, Sweden), North America and
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
                  {/* <!-- section title end --> */}
                  {/* <!-- row --> */}
                  <div className="row no-gutters mt-20">
                    <div className="col-md-6 col-lg-6 col-sm-6">
                      {/* <!--  featured-icon-box -->  */}
                      <div className="featured-icon-box style3 left-icon icon-align-top featured-content2">
                        <div className="featured-icon">
                          {/* <!--  featured-icon -->  */}
                          <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                            <TfiMedall className='text-5xl'></TfiMedall>
                            {/*  ttm-icon  */}
                          </div>
                        </div>
                        <div className="featured-content featured-contenttest">
                          {/* <!--  featured-content --> */}
                          <div className="featured-title">
                            {/* <!--  featured-title --> */}
                            <h5>100% Satisfaction</h5>
                          </div>
                          <div className="featured-desc">
                            {/* <!--  featured-desc --> */}
                            <p>
                              We are with you 24/7/365 to ensure your operations
                              run smoothly.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!--  featured-icon-box END --> */}
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6">
                      {/* <!--  featured-icon-box -->  */}
                      <div className="featured-icon-box style3 left-icon icon-align-top">
                        <div className="featured-icon">
                          {/* <!--  featured-icon -->  */}
                          <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                            <TfiBookmarkAlt className='text-5xl'></TfiBookmarkAlt>
                            {/* <!--  ttm-icon -->  */}
                          </div>
                        </div>
                        <div className="featured-content">
                          {/* <!--  featured-content --> */}
                          <div className="featured-title">
                            {/* <!--  featured-title --> */}
                            <h5>Reduce Your Costs</h5>
                          </div>
                          <div className="featured-desc">
                            <p>
                              In comparison to Western European and North
                              American prices we can reduce your costs by 50%
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!--  featured-icon-box END --> */}
                    </div>
                  </div>
                  {/* <!-- row END--> */}
                  {/* <!-- separator --> */}
                  <div className="separator">
                    <div className="sep-line mt-30 mb-15"></div>
                  </div>
                  {/* <!-- separator --> */}
                </div>
              </div>
            </div>
            {/* <!-- row end --> */}
            {/* <!-- row --> */}
            <div className="row"></div>
            {/* <!-- row end--> */}
          </div>
        </section>
    );
};

export default AboutUs;