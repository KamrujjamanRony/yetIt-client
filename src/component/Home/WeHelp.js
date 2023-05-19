import { FaPlay } from "react-icons/fa";

const WeHelp = () => {
    return (
        <section className="ttm-row second-row-title-section mt_90 ttm-bgcolor-darkgrey ttm-bg ttm-bgimage-yes bg-img9 clearfix">
          <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
          <div className="container contain">
            <div className="row">
              {/* <!-- row --> */}
              <div className="col-lg-8 offset-lg-2">
                <div className="text-center">
                  <div className="ttm-play-icon-btn mb-35">
                    <div className="ttm-play-icon-animation">
                      <a
                        href="https://www.youtube.com/embed/9fidoaaOn_4"
                        target="_blank"
                        rel="noreferrer"
                        className="ttm_prettyphotouuu"
                      >
                        <div className="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-sm ttm-icon_element-style-round items-center justify-center">
                          <FaPlay className='text-3xl text-white'></FaPlay>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* <!-- section-title --> */}
                  <div className="section-title row-title clearfix">
                    <div className="title-header">
                      <h2 className="title">
                        {" "}
                        We help to create your business identity &amp;{" "}
                        <span>stunning on online,</span>
                      </h2>
                    </div>
                    <div className="title-desc">
                      with Basic Website, Web Application, CMS Web Development,
                      Dynamic Website to Advanced Level of Ecommerce
                      Development.
                    </div>
                  </div>
                  {/* <!-- section-title end --> */}
                  <div className="mt-40">
                    <a
                      href="http://www.shehala.com/portfolio"
                      className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-white"
                    >
                      View Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default WeHelp;