import { CgWebsite } from "react-icons/cg";
import { BsCodeSquare } from "react-icons/bs";
import { AiOutlineCode } from "react-icons/ai";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <section className="ttm-row services-section ttm-bgcolor-darkgrey ttm-bg ttm-bgimage-yes bg-img7 clearfix">
          <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
          <div className="container contain">
            <div className="row service-section">
              {/* <!-- row --> */}
              <div className="col-lg-8 offset-lg-4">
                {/* <!-- section title --> */}
                <div className="section-title with-desc text-center clearfix">
                  <div className="title-header">
                    <h5>Our Services</h5>
                    <h2 className="title">
                      We run all kinds of Web Development, Image Design &amp; 3D
                      services with 14+ years of <span>experience</span>
                    </h2>
                  </div>
                </div>
                {/* <!-- section title end --> */}
              </div>
            </div>

            {/* <!-- row end --> */}

            {/* <!-- row --> */}
            <div className="row">
              <div className="col-lg-4 col-md-4">
                {/* <!-- featured-icon-box --> */}
                <div className="featured-icon-box style5 text-left mb-20">
                  <div className="featured-icon">
                    {/* <!-- featured-icon--> */}
                    <div className="ttm-icon ttm-icon_element-color-white ttm-icon_element-size-lg">
                      <AiOutlineCode className="text-white text-6xl"></AiOutlineCode>
                    </div>
                  </div>
                  {/* <!-- featured-icon --> */}
                  <div className="featured-content">
                    {/* <!-- featured-content --> */}
                    <div className="featured-title">
                      <h5>Software Development</h5>
                      {/* <!-- featured-title --> */}
                    </div>
                    <div className="featured-desc">
                      {/* <!-- featured-description --> */}
                      <p>
                        A highly skilled team of developers using proven
                        methodologies to develop well-planned &amp; designed
                        solutions. These are applications of high-quality
                        irrespective of the type of industry.
                      </p>
                    </div>
                    <Link
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-white btn-inline ttm-icon-btn-right mt-15"
                      to="/service/cms"
                    >
                      Read More <TfiAngleDoubleRight className="inline"></TfiAngleDoubleRight>
                    </Link>
                  </div>
                  {/* <!-- featured-content END--> */}
                </div>
                {/* <!-- featured-icon-box --> */}
              </div>

              <div className="col-lg-4 col-md-4">
                {/* <!-- featured-icon-box --> */}
                <div className="featured-icon-box style5 text-left mb-20">
                  <div className="featured-icon">
                    {/* <!-- featured-icon--> */}
                    <div className="ttm-icon ttm-icon_element-color-white ttm-icon_element-size-lg">
                      <BsCodeSquare className="text-white text-5xl"></BsCodeSquare>
                    </div>
                  </div>
                  {/* <!-- featured-icon --> */}
                  <div className="featured-content">
                    {/* <!-- featured-content --> */}
                    <div className="featured-title">
                      <h5>Web Development</h5>
                      {/* <!-- featured-title --> */}
                    </div>
                    <div className="featured-desc">
                      {/* <!-- featured-description --> */}
                      <p>
                        Shehala IT Ltd. offers custom web application
                        development on various technologies like Objective C,
                        Java for Android, .NET, PHP, Action Script, CakePHP,
                        MySQL, HTML5. As per the client's custom need
                      </p>
                    </div>
                    <Link
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-white btn-inline ttm-icon-btn-right mt-15"
                      to="/service/web-development"
                    >
                      Read More <TfiAngleDoubleRight className="inline"></TfiAngleDoubleRight>
                    </Link>
                  </div>
                  {/* <!-- featured-content END--> */}
                </div>
                {/* <!-- featured-icon-box --> */}
              </div>
              <div className="col-lg-4 col-md-4">
                {/* <!-- featured-icon-box --> */}
                <div className="featured-icon-box style5 text-left mb-20">
                  <div className="featured-icon">
                    {/* <!-- featured-icon--> */}
                    <div className="ttm-icon ttm-icon_element-color-white ttm-icon_element-size-lg">
                      <CgWebsite className="text-white text-6xl"></CgWebsite>
                    </div>
                  </div>
                  {/* <!-- featured-icon --> */}
                  <div className="featured-content">
                    {/* <!-- featured-content --> */}
                    <div className="featured-title">
                      <h5>Website Design</h5>
                      {/* <!-- featured-title --> */}
                    </div>
                    <div className="featured-desc">
                      {/* <!-- featured-description --> */}
                      <p>
                        Web Design is essential to provider a user friendly
                        experience for all users across all platforms (Desktops,
                        Tablets &amp; Smartphones).{" "}
                      </p>
                    </div>
                    <Link
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-white btn-inline ttm-icon-btn-right mt-15"
                      to="/service/page"
                    >
                      Read More <TfiAngleDoubleRight className="inline"></TfiAngleDoubleRight>
                    </Link>
                  </div>
                  {/* <!-- featured-content END--> */}
                </div>
                {/* <!-- featured-icon-box --> */}
              </div>
            </div>
            {/* <!-- row end--> */}

            {/* <!-- row --> */}
            <div className="row">
              <div className="col-lg-4 col-md-4">
                {/* <!-- featured-icon-box --> */}
                <div className="featured-icon-box style5 text-left mb-20">
                  <div className="featured-icon">
                    {/* <!-- featured-icon--> */}
                    <div className="ttm-icon ttm-icon_element-color-white ttm-icon_element-size-lg">
                    <BsCodeSquare className="text-white text-5xl"></BsCodeSquare>
                    </div>
                  </div>
                  {/* <!-- featured-icon --> */}
                  <div className="featured-content">
                    {/* <!-- featured-content --> */}
                    <div className="featured-title">
                      <h5>Ecommerce Development</h5>
                      {/* <!-- featured-title --> */}
                    </div>
                    <div className="featured-desc">
                      {/* <!-- featured-description --> */}
                      <p>
                        Ecommerce development platforms to lunch a modern
                        website. However, you would still need skillful experts
                        to get a professional website for your business.{" "}
                      </p>
                    </div>
                    <Link
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-white btn-inline ttm-icon-btn-right mt-15"
                      to="/service/ecommerce"
                    >
                      Read More <TfiAngleDoubleRight className="inline"></TfiAngleDoubleRight>
                    </Link>
                  </div>
                  {/* <!-- featured-content END--> */}
                </div>
                {/* <!-- featured-icon-box --> */}
              </div>

              <div className="col-lg-4 col-md-4">
                {/* <!-- featured-icon-box --> */}
                <div className="featured-icon-box style5 text-left mb-20">
                  <div className="featured-icon">
                    {/* <!-- featured-icon--> */}
                    <div className="ttm-icon ttm-icon_element-color-white ttm-icon_element-size-lg">
                    <BsCodeSquare className="text-white text-5xl"></BsCodeSquare>
                    </div>
                  </div>
                  {/* <!-- featured-icon --> */}
                  <div className="featured-content">
                    {/* <!-- featured-content --> */}
                    <div className="featured-title">
                      <h5>Mobile Application Development</h5>
                      {/* <!-- featured-title --> */}
                    </div>
                    <div className="featured-desc">
                      {/* <!-- featured-description --> */}
                      <p>
                        At Shehala IT Limited, we are aware of the applications
                        you need for your phone. Therefore, we ensure that we
                        create the application from the beginning through to the
                        end to ensure the end users of the application can
                        utilize the application to their liking.{" "}
                      </p>
                    </div>
                    <Link
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-white btn-inline ttm-icon-btn-right mt-15"
                      to="/service/"
                    >
                      Read More <TfiAngleDoubleRight className="inline"></TfiAngleDoubleRight>
                    </Link>
                  </div>
                  {/* <!-- featured-content END--> */}
                </div>
                {/* <!-- featured-icon-box --> */}
              </div>

              <div className="col-lg-4 col-md-4">
                {/* <!-- featured-icon-box --> */}
                <div className="featured-icon-box style5 text-left mb-20">
                  <div className="featured-icon">
                    {/* <!-- featured-icon--> */}
                    <div className="ttm-icon ttm-icon_element-color-white ttm-icon_element-size-lg">
                    <BsCodeSquare className="text-white text-5xl"></BsCodeSquare>
                    </div>
                  </div>
                  {/* <!-- featured-icon --> */}
                  <div className="featured-content">
                    {/* <!-- featured-content --> */}
                    <div className="featured-title">
                      <h5>Image Production</h5>
                      {/* <!-- featured-title --> */}
                    </div>
                    <div className="featured-desc">
                      {/* <!-- featured-description --> */}
                      <p>
                        Shehala IT Limited is one of the most fascinating images
                        editing service provider. That provides excellent
                        quality of isolating image editing services. Our company
                        will guarantee you the best quality done images.{" "}
                      </p>
                    </div>
                    <Link
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-white btn-inline ttm-icon-btn-right mt-15"
                      to="/service/image"
                    >
                      Read More <TfiAngleDoubleRight className="inline"></TfiAngleDoubleRight>
                    </Link>
                  </div>
                  {/* <!-- featured-content END--> */}
                </div>
                {/* <!-- featured-icon-box --> */}
              </div>
            </div>
            {/* <!-- row end--> */}
          </div>
        </section>
    );
};

export default Services;