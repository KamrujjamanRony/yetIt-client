import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import useBlogs from "../hook/useBlogs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Blog = () => {
  const [blogs] = useBlogs();
  return (
    <div className="blog">
      <div className="about-bg">
        <div className="ttm-page-title-row">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title-box text-center">
                  <div className="page-title-heading">
                    <h1 className="title"> Blog</h1>
                  </div>
                  {/* /.page-title-captions  */}
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
                    <span> Blog</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-main">
        <div className="sidebar ttm-bgcolor-white clearfix">
          <div className="container contain">
            {/* row  */}
            <div className="row">
              <div className="col-lg-9 content-area">
                {
                  blogs?.map(blog=><article key={blog?.id} className="post ttm-blog-classic clearfix">
                  <div className="ttm-post-featured-wrapper ttm-featured-wrapper">
                    <div className="ttm-post-featured">
                      <img
                        className="img-fluid"
                        src={blog?.image}
                        alt="post-01"
                      />
                    </div>
                  </div>
                  <div className="ttm-blog-classic-content">
                    <div className="ttm-post-entry-header">
                      <div className="post-meta">
                        <span className="ttm-meta-line byline">
                          <i className="fa fa-user"></i>By {blog?.author}
                        </span>
                        <span className="ttm-meta-line entry-date">
                          <i className="fa fa-calendar"></i>
                          <time
                            className="entry-date published"
                            dateTime="2018-07-28T00:39:29+00:00"
                          >
                            {blog?.date}
                          </time>
                        </span>
                        <span className="ttm-meta-line tags-links">
                          <i className="fa fa-comment-o"></i>{blog?.comment}
                        </span>
                      </div>
                    </div>
                    <div className="entry-content">
                      <header className="entry-header">
                        <h2 className="entry-title">
                          <Link to={`/blog/${blog?.id}`}>
                            {blog?.title}
                          </Link>
                        </h2>
                      </header>
                      <div className="ttm-box-desc-text">
                      {blog?.description?.map((d,index)=><p key={index} className={`${d.length < 100 ? "font-bold" : ""}`}>{d}</p>).splice(0,3)}
                      </div>
                      {/* separator  */}
                      <div className="separator">
                        <div className="sep-line mt-25 mb-25"></div>
                      </div>
                      {/* separator  */}
                      <div className="ttm-blogbox-desc-footer">
                        <div className="ttm-blogbox-footer-readmore d-inline-block">
                        <Link
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right"
                      to={`/blog/${blog?.id}`}
                    >
                      Read More <MdKeyboardDoubleArrowRight className="inline text-xl mb-1"></MdKeyboardDoubleArrowRight>
                    </Link>
                        </div>
                        <div className="ttm-commentbox d-inline-block float-right">
                          <span>
                            <i className="fa fa-comments"></i>3
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>)
                }
              </div>
              <div className="col-lg-3 widget-area">
                <aside className="widget widget-search">
                  <form
                    role="search"
                    method="get"
                    className="search-form  box-shadow"
                    action="#"
                  >
                    <div className="form-group">
                      <input
                        name="search"
                        type="text"
                        className="form-control bg-white"
                        placeholder="Search...."
                      />
                      <i className="fa fa-search"></i>
                    </div>
                  </form>
                </aside>
                <aside className="widget widget-categories">
                  <h3 className="widget-title">Categories</h3>
                  <ul>
                    <li>
                      <Link to="/blog/1">
                        Online Marketing
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog/2">
                        Online Business
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog/3">
                        Ecommerce
                      </Link>
                    </li>
                  </ul>
                </aside>
                <aside className="widget post-widget">
                  <h3 className="widget-title">Latest News</h3>
                  <ul className="widget-post ttm-recent-post-list">
                  {blogs?.map(blog=><li key={blog?.id}>
                      <Link to={`/blog/${blog?.id}`}>
                        <img
                          src={blog?.image}
                          alt="post-img"
                        />
                      </Link>
                      <Link to={`/blog/${blog?.id}`}>
                        {blog?.title}
                      </Link>
                      <span className="post-date">
                        <i className="fa fa-calendar"></i> {blog?.date}
                      </span>
                    </li>).reverse()}
                  </ul>
                </aside>
              </div>
            </div>
            {/* row end  */}
          </div>
        </div>
        {/* sidebar end  */}
      </div>
    </div>
  );
};

export default Blog;
