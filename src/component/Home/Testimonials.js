import { MdOutlineContactPhone } from "react-icons/md";
// import Swiper core and required modules
import { A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Testimonials = () => {
  return (
    <section className="ttm-row bottomzero-padding-section ttm-bgcolor-grey ttm-bg ttm-bgimage-yes bg-img8 clearfix">
      <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
      <div className="container contain">
        <div className="row">
          {/* <!-- row --> */}
          <div className="col-lg-6">
            <div className="position-relative z-1">
              {/* <!-- spacing-2 --> */}

              {/* <!-- section title --> */}
              <div className="section-title with-desc clearfix">
                <div className="title-header">
                  <h5>About us</h5>
                  <h2 className="title">
                    We deal with the aspects of professional{" "}
                    <span>Web Services</span>
                  </h2>
                </div>
              </div>
              {/* <!-- section title end --> */}
              <div
                className="testimonial-slide box-sahdow ttm-bgcolor-white col-bg-img-four style1 owl-carousel owl-theme owl-rtl owl-loaded"
                data-item="1"
                data-nav="false"
                data-dots="true"
                data-auto="false"
              >
                {/* <!-- testimonials --> */}
                <Swiper
                  // install Swiper modules
                  modules={[A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  loop={true}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <div className="testimonials text-center">
                      <div className="testimonial-content">
                        {/* <!-- testimonials-content --> */}
                        <div className="testimonial-avatar">
                          <div className="testimonial-img flex justify-center">
                            {/* <!-- testimonials-img --> */}
                            <img
                              className="img-center"
                              src="http://www.shehala.com/public/frontend/images/testimonial/man.jpg"
                              alt="testimonial-img"
                            />
                          </div>
                        </div>
                        <blockquote>
                          I am working with Shehala IT for the past 5 years. I
                          find Shehala is very professional and always putting
                          the needs of their customers first. You can always be
                          assured the work produced by Shehala IT is top quality
                          on all levels. Always a pleasure working with Shehala.
                        </blockquote>
                        <div className="rating rating-xs">
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                            checked
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                        </div>
                        <div className="testimonial-caption">
                          {/* <!-- testimonials-caption --> */}
                          <h6>Eddle Cipolla</h6>
                          <label>
                            Account Director at St. Joseph Communications,
                            Canada
                          </label>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonials text-center">
                      <div className="testimonial-content">
                        {/* <!-- testimonials-content --> */}
                        <div className="testimonial-avatar">
                          <div className="testimonial-img flex justify-center">
                            {/* <!-- testimonials-img --> */}
                            <img
                              className="img-center"
                              src="http://www.shehala.com/public/frontend/images/testimonial/man.jpg"
                              alt="testimonial-img"
                            />
                          </div>
                        </div>
                        <blockquote>
                          I have worked with many different outsourcing
                          companies (suppliers of different products), Shehala
                          is without doubt, one of the best companies. They work
                          fast, good and for a fair price. They are not the
                          cheapest but, you can’t get better quality cheaper.
                          Quality and price go hand in hand.
                        </blockquote>
                        <div className="rating rating-xs">
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                            checked
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                        </div>
                        <div className="testimonial-caption">
                          {/* <!-- testimonials-caption --> */}
                          <h6>Chris Mikkelsen</h6>
                          <label>Production Chief at enVision</label>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonials text-center">
                      <div className="testimonial-content">
                        {/* <!-- testimonials-content --> */}
                        <div className="testimonial-avatar">
                          <div className="testimonial-img flex justify-center">
                            {/* <!-- testimonials-img --> */}
                            <img
                              className="img-center"
                              src="http://www.shehala.com/public/frontend/images/testimonial/man.jpg"
                              alt="testimonial-img"
                            />
                          </div>
                        </div>
                        <blockquote>
                          I am working with Shehala IT for the past 5 years. I
                          find Shehala is very professional and always putting
                          the needs of their customers first. You can always be
                          assured the work produced by Shehala IT is top quality
                          on all levels. Always a pleasure working with Shehala.
                        </blockquote>
                        <div className="rating rating-xs">
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                            checked
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                        </div>
                        <div className="testimonial-caption">
                          {/* <!-- testimonials-caption --> */}
                          <h6>Eddle Cipolla</h6>
                          <label>
                            Account Director at St. Joseph Communications,
                            Canada
                          </label>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonials text-center">
                      <div className="testimonial-content">
                        {/* <!-- testimonials-content --> */}
                        <div className="testimonial-avatar">
                          <div className="testimonial-img flex justify-center">
                            {/* <!-- testimonials-img --> */}
                            <img
                              className="img-center"
                              src="http://www.shehala.com/public/frontend/images/testimonial/man.jpg"
                              alt="testimonial-img"
                            />
                          </div>
                        </div>
                        <blockquote>
                          I have worked with many different outsourcing
                          companies (suppliers of different products), Shehala
                          is without doubt, one of the best companies. They work
                          fast, good and for a fair price. They are not the
                          cheapest but, you can’t get better quality cheaper.
                          Quality and price go hand in hand.
                        </blockquote>
                        <div className="rating rating-xs">
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                            checked
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                        </div>
                        <div className="testimonial-caption">
                          {/* <!-- testimonials-caption --> */}
                          <h6>Chris Mikkelsen</h6>
                          <label>Production Chief at enVision</label>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonials text-center">
                      <div className="testimonial-content">
                        {/* <!-- testimonials-content --> */}
                        <div className="testimonial-avatar">
                          <div className="testimonial-img flex justify-center">
                            {/* <!-- testimonials-img --> */}
                            <img
                              className="img-center"
                              src="http://www.shehala.com/public/frontend/images/testimonial/man.jpg"
                              alt="testimonial-img"
                            />
                          </div>
                        </div>
                        <blockquote>
                          I am working with Shehala IT for the past 5 years. I
                          find Shehala is very professional and always putting
                          the needs of their customers first. You can always be
                          assured the work produced by Shehala IT is top quality
                          on all levels. Always a pleasure working with Shehala.
                        </blockquote>
                        <div className="rating rating-xs">
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                            checked
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                        </div>
                        <div className="testimonial-caption">
                          {/* <!-- testimonials-caption --> */}
                          <h6>Eddle Cipolla</h6>
                          <label>
                            Account Director at St. Joseph Communications,
                            Canada
                          </label>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonials text-center">
                      <div className="testimonial-content">
                        {/* <!-- testimonials-content --> */}
                        <div className="testimonial-avatar">
                          <div className="testimonial-img flex justify-center">
                            {/* <!-- testimonials-img --> */}
                            <img
                              className="img-center"
                              src="http://www.shehala.com/public/frontend/images/testimonial/man.jpg"
                              alt="testimonial-img"
                            />
                          </div>
                        </div>
                        <blockquote>
                          I have worked with many different outsourcing
                          companies (suppliers of different products), Shehala
                          is without doubt, one of the best companies. They work
                          fast, good and for a fair price. They are not the
                          cheapest but, you can’t get better quality cheaper.
                          Quality and price go hand in hand.
                        </blockquote>
                        <div className="rating rating-xs">
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                            checked
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-400"
                          />
                        </div>
                        <div className="testimonial-caption">
                          {/* <!-- testimonials-caption --> */}
                          <h6>Chris Mikkelsen</h6>
                          <label>Production Chief at enVision</label>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>

                {/* <!-- testimonials END --> */}
              </div>

              {/* <!-- separator --> */}
              <div className="separator">
                <div className="sep-line"></div>
              </div>

              {/* <!-- separator END--> */}
              <div className="card border-0 rounded-none">
                <div className="card-body">
                  {/* <!-- featured-icon-box --> */}
                  <div className="featured-icon-box style2 left-icon icon-align-top">
                    <div className="featured-icon">
                      {/* <!-- featured-icon --> */}
                      <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                        <MdOutlineContactPhone className="text-5xl"></MdOutlineContactPhone>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-desc">
                        {/* <!-- featured desc --> */}
                        <p>Need a service &amp; ready to order? Call us</p>
                      </div>
                      <div className="featured-title">
                        {/* <!-- featured title --> */}
                        <h5>
                          Contact Us:{" "}
                          <strong className="ttm-textcolor-skincolor">
                            +1 (416) 686-3111
                          </strong>
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* <!-- featured-icon-box END--> */}
                </div>
              </div>
            </div>
            {/* <!-- spacing-2 END --> */}
          </div>
          <div className="col-lg-6">
            <div className="position-relative res-991-mt-30">
              {/* <!-- ttm_single_image-wrapper --> */}
              <div className="ttm_single_image-wrapper text-right">
                <img
                  className="img-fluid inline-block"
                  src="http://www.shehala.com/public/frontend/images/indicate2.jpg"
                  title="single-img-four"
                  alt="single-img-four"
                />
              </div>
              {/* <!-- ttm_single_image-wrapper end --> */}
              <div className="ttm-highlight-fid-style-1">
                {/* <!--ttm-fid--> */}
                <div className="ttm-fid inside without-icon">
                  <div className="ttm-fid-contents text-left">
                    <h4 className="ttm-fid-inner">
                      <span
                        data-appear-animation="animateDigits"
                        data-from="0"
                        data-to="14"
                        data-interval="2"
                        data-before=""
                        data-before-style="sup"
                        data-after=""
                        data-after-style="sub"
                      >
                        14
                      </span>
                    </h4>
                    <h3 className="ttm-fid-title">
                      Years of Experience Web Solution{" "}
                    </h3>
                  </div>
                </div>
                {/* <!-- ttm-fid end--> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- row end --> */}
      </div>
    </section>
  );
};

export default Testimonials;
