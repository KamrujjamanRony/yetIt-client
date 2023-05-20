// import Swiper core and required modules
import { A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Blog = () => {
  return (
    <section className="ttm-row blog-section clearfix">
      <div className="container contain">
        <div className="row">
          <div className="col-md-12">
            {/* <!-- section title --> */}
            <div className="section-title text-center with-desc clearfix">
              <div className="title-header">
                <h5>Our Blog</h5>
                <h2 className="title">
                  Check out our <span>Latest News</span>
                </h2>
              </div>
            </div>
            {/* <!-- section title end --> */}
          </div>
        </div>

        {/* <!-- row --> */}
        <div className="row">
          {/* <!-- blog-slide --> */}
          <div
            className="blog-slide owl-carousel owl-theme owl-loaded owl-rtl"
            data-item="3"
            data-nav="false"
            data-dots="false"
            data-auto="false"
          >
            {/* <!-- featured-imagebox-blog --> */}
            <Swiper
              // install Swiper modules
              modules={[A11y]}
              spaceBetween={50}
              slidesPerView={3}
              loop={true}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className="featured-imagebox featured-imagebox-blog">
                  <div className="featured-thumbnail">
                    {/* <!-- featured-thumbnail --> */}
                    <img
                      className="img-fluid"
                      src="http://www.shehala.com/public/frontend/images/blog/online_business.png"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href="http://www.shehala.com/7-image-editing-tips-to-dominate-in-online-business">
                        <i className="ti ti-plus"></i>
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay"></div>
                  </div>
                  <div className="featured-content">
                    {/* <!-- featured-content --> */}
                    <div className="ttm-box-post-date">
                      {/* <!-- ttm-box-post-date --> */}
                      <span className="ttm-entry-date">
                        <time
                          className="entry-date"
                          dateTime="2019-01-16T07:07:55+00:00"
                        >
                          10
                          <span className="entry-month entry-year">Feb</span>
                        </time>
                      </span>
                    </div>
                    <div className="featured-title">
                      {/* <!-- featured-title --> */}
                      <h5>
                        <a href="http://www.shehala.com/7-image-editing-tips-to-dominate-in-online-business">
                          Seven Image Editing Tips To Dominate In Online
                          Business
                        </a>
                      </h5>
                    </div>
                    <div className="post-meta">
                      {/* <!-- post-meta --> */}
                      <span className="ttm-meta-line">
                        <i className="fa fa-comments"></i> comments
                      </span>
                      <span className="ttm-meta-line">
                        <i className="fa fa-user"></i> Shehala
                      </span>
                    </div>
                    <div className="featured-desc">
                      {/* <!-- featured-description --> */}
                      <p>
                        If you are planning to set up an online business or take
                        your business ahead, you should consider...
                      </p>
                    </div>
                    <a
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20"
                      href="http://www.shehala.com/7-image-editing-tips-to-dominate-in-online-business"
                    >
                      Read More <i className="ti ti-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="featured-imagebox featured-imagebox-blog">
                  <div className="featured-thumbnail">
                    {/* <!-- featured-thumbnail --> */}
                    <img
                      className="img-fluid"
                      src="http://www.shehala.com/public/frontend/images/blog/visual_content.png"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href="http://www.shehala.com/8-reasons-why-visual-content-is-important-for-online-marketing">
                        <i className="ti ti-plus"></i>
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay"></div>
                  </div>
                  <div className="featured-content">
                    {/* <!-- featured-content --> */}
                    <div className="ttm-box-post-date">
                      {/* <!-- ttm-box-post-date --> */}
                      <span className="ttm-entry-date">
                        <time
                          className="entry-date"
                          dateTime="2019-01-16T07:07:55+00:00"
                        >
                          13
                          <span className="entry-month entry-year">Feb</span>
                        </time>
                      </span>
                    </div>
                    <div className="featured-title">
                      {/* <!-- featured-title --> */}
                      <h5>
                        <a href="http://www.shehala.com/8-reasons-why-visual-content-is-important-for-online-marketing">
                          Eight Reasons Why Visual Content is Important for
                          Online Marketing
                        </a>
                      </h5>
                    </div>
                    <div className="post-meta">
                      {/* <!-- post-meta --> */}
                      <span className="ttm-meta-line">
                        <i className="fa fa-comments"></i> comments
                      </span>
                      <span className="ttm-meta-line">
                        <i className="fa fa-user"></i> Shehala
                      </span>
                    </div>
                    <div className="featured-desc">
                      {/* <!-- featured-description --> */}
                      <p>
                        Every day millions of contents are posted online in
                        different forms of posts like blog articles, e-books
                      </p>
                    </div>
                    <a
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20"
                      href="http://www.shehala.com/8-reasons-why-visual-content-is-important-for-online-marketing"
                    >
                      Read More <i className="ti ti-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="featured-imagebox featured-imagebox-blog">
                  <div className="featured-thumbnail">
                    {/* <!-- featured-thumbnail --> */}
                    <img
                      className="img-fluid"
                      src="http://www.shehala.com/public/frontend/images/blog/shehala-ecommerce.png"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href="http://www.shehala.com/role-and-essence-of-clipping-path-services-for-modern-ecommerce">
                        <i className="ti ti-plus"></i>
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay"></div>
                  </div>
                  <div className="featured-content">
                    {/* <!-- featured-content --> */}
                    <div className="ttm-box-post-date">
                      {/* <!-- ttm-box-post-date --> */}
                      <span className="ttm-entry-date">
                        <time
                          className="entry-date"
                          dateTime="2019-01-16T07:07:55+00:00"
                        >
                          8<span className="entry-month entry-year">Feb</span>
                        </time>
                      </span>
                    </div>
                    <div className="featured-title">
                      {/* <!-- featured-title --> */}
                      <h5>
                        <a href="http://www.shehala.com/role-and-essence-of-clipping-path-services-for-modern-ecommerce">
                          Role and Essence of Clipping Path Services for Modern
                          Ecommerce
                        </a>
                      </h5>
                    </div>
                    <div className="post-meta">
                      {/* <!-- post-meta --> */}
                      <span className="ttm-meta-line">
                        <i className="fa fa-comments"></i> comments
                      </span>
                      <span className="ttm-meta-line">
                        <i className="fa fa-user"></i> Shehala
                      </span>
                    </div>
                    <div className="featured-desc">
                      {/* <!-- featured-description --> */}
                      <p>
                        It is now common knowledge that clipping path design has
                        a dominant role in modern online marketing. Among
                        most...
                      </p>
                    </div>
                    <a
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20"
                      href="http://www.shehala.com/role-and-essence-of-clipping-path-services-for-modern-ecommerce"
                    >
                      Read More <i className="ti ti-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="featured-imagebox featured-imagebox-blog">
                  <div className="featured-thumbnail">
                    {/* <!-- featured-thumbnail --> */}
                    <img
                      className="img-fluid"
                      src="http://www.shehala.com/public/frontend/images/blog/online_business.png"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href="http://www.shehala.com/7-image-editing-tips-to-dominate-in-online-business">
                        <i className="ti ti-plus"></i>
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay"></div>
                  </div>
                  <div className="featured-content">
                    {/* <!-- featured-content --> */}
                    <div className="ttm-box-post-date">
                      {/* <!-- ttm-box-post-date --> */}
                      <span className="ttm-entry-date">
                        <time
                          className="entry-date"
                          dateTime="2019-01-16T07:07:55+00:00"
                        >
                          10
                          <span className="entry-month entry-year">Feb</span>
                        </time>
                      </span>
                    </div>
                    <div className="featured-title">
                      {/* <!-- featured-title --> */}
                      <h5>
                        <a href="http://www.shehala.com/7-image-editing-tips-to-dominate-in-online-business">
                          Seven Image Editing Tips To Dominate In Online
                          Business
                        </a>
                      </h5>
                    </div>
                    <div className="post-meta">
                      {/* <!-- post-meta --> */}
                      <span className="ttm-meta-line">
                        <i className="fa fa-comments"></i> comments
                      </span>
                      <span className="ttm-meta-line">
                        <i className="fa fa-user"></i> Shehala
                      </span>
                    </div>
                    <div className="featured-desc">
                      {/* <!-- featured-description --> */}
                      <p>
                        If you are planning to set up an online business or take
                        your business ahead, you should consider...
                      </p>
                    </div>
                    <a
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20"
                      href="http://www.shehala.com/7-image-editing-tips-to-dominate-in-online-business"
                    >
                      Read More <i className="ti ti-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="featured-imagebox featured-imagebox-blog">
                  <div className="featured-thumbnail">
                    {/* <!-- featured-thumbnail --> */}
                    <img
                      className="img-fluid"
                      src="http://www.shehala.com/public/frontend/images/blog/visual_content.png"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href="http://www.shehala.com/8-reasons-why-visual-content-is-important-for-online-marketing">
                        <i className="ti ti-plus"></i>
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay"></div>
                  </div>
                  <div className="featured-content">
                    {/* <!-- featured-content --> */}
                    <div className="ttm-box-post-date">
                      {/* <!-- ttm-box-post-date --> */}
                      <span className="ttm-entry-date">
                        <time
                          className="entry-date"
                          dateTime="2019-01-16T07:07:55+00:00"
                        >
                          13
                          <span className="entry-month entry-year">Feb</span>
                        </time>
                      </span>
                    </div>
                    <div className="featured-title">
                      {/* <!-- featured-title --> */}
                      <h5>
                        <a href="http://www.shehala.com/8-reasons-why-visual-content-is-important-for-online-marketing">
                          Eight Reasons Why Visual Content is Important for
                          Online Marketing
                        </a>
                      </h5>
                    </div>
                    <div className="post-meta">
                      {/* <!-- post-meta --> */}
                      <span className="ttm-meta-line">
                        <i className="fa fa-comments"></i> comments
                      </span>
                      <span className="ttm-meta-line">
                        <i className="fa fa-user"></i> Shehala
                      </span>
                    </div>
                    <div className="featured-desc">
                      {/* <!-- featured-description --> */}
                      <p>
                        Every day millions of contents are posted online in
                        different forms of posts like blog articles, e-books
                      </p>
                    </div>
                    <a
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20"
                      href="http://www.shehala.com/8-reasons-why-visual-content-is-important-for-online-marketing"
                    >
                      Read More <i className="ti ti-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="featured-imagebox featured-imagebox-blog">
                  <div className="featured-thumbnail">
                    {/* <!-- featured-thumbnail --> */}
                    <img
                      className="img-fluid"
                      src="http://www.shehala.com/public/frontend/images/blog/shehala-ecommerce.png"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href="http://www.shehala.com/role-and-essence-of-clipping-path-services-for-modern-ecommerce">
                        <i className="ti ti-plus"></i>
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay"></div>
                  </div>
                  <div className="featured-content">
                    {/* <!-- featured-content --> */}
                    <div className="ttm-box-post-date">
                      {/* <!-- ttm-box-post-date --> */}
                      <span className="ttm-entry-date">
                        <time
                          className="entry-date"
                          dateTime="2019-01-16T07:07:55+00:00"
                        >
                          8<span className="entry-month entry-year">Feb</span>
                        </time>
                      </span>
                    </div>
                    <div className="featured-title">
                      {/* <!-- featured-title --> */}
                      <h5>
                        <a href="http://www.shehala.com/role-and-essence-of-clipping-path-services-for-modern-ecommerce">
                          Role and Essence of Clipping Path Services for Modern
                          Ecommerce
                        </a>
                      </h5>
                    </div>
                    <div className="post-meta">
                      {/* <!-- post-meta --> */}
                      <span className="ttm-meta-line">
                        <i className="fa fa-comments"></i> comments
                      </span>
                      <span className="ttm-meta-line">
                        <i className="fa fa-user"></i> Shehala
                      </span>
                    </div>
                    <div className="featured-desc">
                      {/* <!-- featured-description --> */}
                      <p>
                        It is now common knowledge that clipping path design has
                        a dominant role in modern online marketing. Among
                        most...
                      </p>
                    </div>
                    <a
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20"
                      href="http://www.shehala.com/role-and-essence-of-clipping-path-services-for-modern-ecommerce"
                    >
                      Read More <i className="ti ti-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="featured-imagebox featured-imagebox-blog">
                  <div className="featured-thumbnail">
                    {/* <!-- featured-thumbnail --> */}
                    <img
                      className="img-fluid"
                      src="http://www.shehala.com/public/frontend/images/blog/online_business.png"
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <a href="http://www.shehala.com/7-image-editing-tips-to-dominate-in-online-business">
                        <i className="ti ti-plus"></i>
                      </a>
                    </div>
                    <div className="ttm-box-view-overlay"></div>
                  </div>
                  <div className="featured-content">
                    {/* <!-- featured-content --> */}
                    <div className="ttm-box-post-date">
                      {/* <!-- ttm-box-post-date --> */}
                      <span className="ttm-entry-date">
                        <time
                          className="entry-date"
                          dateTime="2019-01-16T07:07:55+00:00"
                        >
                          10
                          <span className="entry-month entry-year">Feb</span>
                        </time>
                      </span>
                    </div>
                    <div className="featured-title">
                      {/* <!-- featured-title --> */}
                      <h5>
                        <a href="http://www.shehala.com/7-image-editing-tips-to-dominate-in-online-business">
                          Seven Image Editing Tips To Dominate In Online
                          Business
                        </a>
                      </h5>
                    </div>
                    <div className="post-meta">
                      {/* <!-- post-meta --> */}
                      <span className="ttm-meta-line">
                        <i className="fa fa-comments"></i> comments
                      </span>
                      <span className="ttm-meta-line">
                        <i className="fa fa-user"></i> Shehala
                      </span>
                    </div>
                    <div className="featured-desc">
                      {/* <!-- featured-description --> */}
                      <p>
                        If you are planning to set up an online business or take
                        your business ahead, you should consider...
                      </p>
                    </div>
                    <a
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20"
                      href="http://www.shehala.com/7-image-editing-tips-to-dominate-in-online-business"
                    >
                      Read More <i className="ti ti-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* <!-- featured-imagebox-blog end --> */}
          </div>
        </div>
        {/* <!-- row end --> */}
      </div>
    </section>
  );
};

export default Blog;
