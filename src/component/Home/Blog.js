// import Swiper core and required modules
import { A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { FiPlus } from "react-icons/fi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";
import useBlogs from "../../hook/useBlogs";

const Blog = () => {
  const [blogs] = useBlogs();
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
          {/* <!-- blog-slide --> */}
          <div
            className="blog-slide"
          >
            <Swiper
              // install Swiper modules
              modules={[A11y]}
              spaceBetween={50}
              slidesPerView={3}
              loop={true}
            >
              {blogs?.map(blog=><SwiperSlide key={blog?.id}>
                <div className="featured-imagebox featured-imagebox-blog">
                  <div className="featured-thumbnail">
                    {/* <!-- featured-thumbnail --> */}
                    <img
                      className="img-fluid"
                      src={blog?.image}
                      alt=""
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <Link to={`/blog/${blog?.id}`}>
                        <FiPlus className="text-4xl"></FiPlus>
                      </Link>
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
                        >{blog?.date.split(" ")[1].slice(0,2)}
                          <span className="entry-month entry-year">{blog?.date.split(" ")[0].slice(0,3)}</span>
                        </time>
                      </span>
                    </div>
                    <div className="featured-title">
                      {/* <!-- featured-title --> */}
                      <h5>
                        <Link to={`/blog/${blog?.id}`}>
                          {blog?.title}
                        </Link>
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
                        {blog?.description[0].slice(0,100)}...
                      </p>
                    </div>
                    <Link
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20"
                      to={`/blog/${blog?.id}`}
                    >
                      Read More <MdKeyboardDoubleArrowRight className="inline text-xl mb-1"></MdKeyboardDoubleArrowRight>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>)}
            </Swiper>
          </div>
        </div>
        {/* <!-- blog-slide end --> */}
    </section>
  );
};

export default Blog;
