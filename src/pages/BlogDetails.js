import { AiOutlineHome } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getBlog } from "../features/blogs/blogsSlice";
import { useEffect } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(()=>{dispatch(getBlog(id))},[dispatch, id]);
  const {blog} = useSelector((state) => state.blogs);
  const {title, image, date, comment, author, description} = blog;
  return (
    <div className="blog-details">
      <div className="about-bg">
        <div className="ttm-page-title-row">
          <div className="container contain">
            <div className="row">
              <div className="col-md-12">
                <div className="title-box text-center">
                  <div className="page-title-heading">
                    <h1 className="title">
                      {title}
                    </h1>
                  </div>
                  {/*  /.page-title-captions  */}
                  <div className="breadcrumb-wrapper">
                    <span>
                      <Link title="Homepage" to="/">
                      <AiOutlineHome className="inline-block text-xl mr-2 mb-1"></AiOutlineHome><span>  Home</span>
                      </Link>
                    </span>
                    <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                    <span> Blog</span>
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
      <div className="site-main">
        {/*  sidebar  */}
        <div className="sidebar ttm-bgcolor-white clearfix">
          <div className="container contain">
            <div className="row">
              <div className="col-lg-12 content-area">
                {/*  ttm-service-single-content-are  */}
                <article className="post ttm-blog-classic clearfix">
                  {/*  post-featured-wrapper  */}
                  <div className="ttm-post-featured-wrapper ttm-featured-wrapper">
                    <div className="ttm-post-featured">
                      <img
                        className="img-fluid mx-auto"
                        src={image}
                        alt="post-01"
                      />
                    </div>
                  </div>
                  {/*  post-featured-wrapper end  */}
                  {/*  ttm-blog-classic-content  */}
                  <div className="ttm-blog-classic-content">
                    <div className="ttm-post-entry-header">
                      <div className="post-meta">
                        <span className="ttm-meta-line byline">
                          <i className="fa fa-user"></i>By {author}
                        </span>
                        <span className="ttm-meta-line entry-date">
                          <i className="fa fa-calendar"></i>
                          <time
                            className="entry-date published"
                            dateTime="2018-07-28T00:39:29+00:00"
                          >
                            {date}
                          </time>
                        </span>
                        <span className="ttm-meta-line tags-links">
                          <i className="fa fa-comment-o"></i>{comment}
                        </span>
                      </div>
                    </div>
                    <div className="entry-content">
                      <header className="entry-header">
                        <h2 className="entry-title">
                          <Link to="/blog/">
                            {title}
                          </Link>
                        </h2>
                      </header>
                      <div className="ttm-box-desc-text">
                        {description?.map((d,index)=><p key={index} className={`${d.length < 100 ? "font-bold" : ""}`}>{d}</p>)}
                      </div>
                      {/*  separator  */}
                      <div className="separator">
                        <div className="sep-line mt-25 mb-25"></div>
                      </div>
                      {/*  separator  */}
                    </div>
                  </div>
                  {/*  ttm-blog-classic-content end  */}
                </article>
                {/*  ttm-service-single-content-are end  */}
              </div>
            </div>
            {/*  row end  */}
          </div>
        </div>
        {/*  sidebar end  */}
      </div>
    </div>
  );
};

export default BlogDetails;
