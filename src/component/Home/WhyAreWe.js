import { CgWebsite } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { activeCollapse } from "../../features/collapse/collapseSlice";

const WhyAreWe = () => {
  const dispatch = useDispatch();
  const {collapseName} = useSelector((state) => state.collapse);
  const handleCollapse = name => {
    dispatch(activeCollapse(name))
  }
  console.log(collapseName)
    return (
        <section className="ttm-row tab-section clearfix">
          <div className="container contain">
            <div className="row">
              <div className="col-md-12">
                {/* <!-- section title --> */}
                <div className="section-title text-center with-desc clearfix">
                  <div className="title-header">
                    <h5>Why Are We Different From Others</h5>
                    <h2 className="title">
                      We are not like traditional outsourcing providers where
                      they only focus on cost reduction. We focus on quality
                      first followed by other aspects. We do not want to be a
                      cheap provider rather than quality solution provider
                      within <span>affordable cost. </span>
                    </h2>
                  </div>
                </div>
                {/* <!-- section title end --> */}
              </div>
            </div>

            {/* <!-- row end --> */}

            {/* <!-- row --> */}
            <div className="row">
              <div className="col-lg-12">
                <div className="ttm-tabs text-center ttm-tab-style-classic style1">
                  <ul className="tabs mb-20">
                    {/* <!-- tabs --> */}
                    <li className={`tab h-fit ${collapseName==="Costs" && "active"}`}>
                      <a onClick={() => handleCollapse("Costs")}>
                        <CgWebsite className="i text-6xl mx-auto"></CgWebsite> <span>Reduce your costs</span>
                      </a>
                    </li>
                    <li className={`tab h-fit ${collapseName==="WorkFlow" && "active"}`}>
                      <a onClick={() => handleCollapse("WorkFlow")}>
                        <CgWebsite className="i text-6xl mx-auto"></CgWebsite> <span>Simple Workflow</span>
                      </a>
                    </li>
                    <li className={`tab h-fit ${collapseName==="Service" && "active"}`}>
                      <a onClick={() => handleCollapse("Service")}>
                        <CgWebsite className="i text-6xl mx-auto"></CgWebsite> <span>24 Hour Service</span>
                      </a>
                    </li>
                  </ul>
                  {/* <!-- tabs end--> */}
                  <div className="content-tab width-100 box-shadow">
                    {/* <!--content-tabs --> */}

                    {/* <!-- content-inner --> */}
                    {collapseName==="Costs" && <div className={`content-inner ${collapseName==="Costs" && "active"}`}>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="text-left">
                            <h3 className="title fs-30">
                              {" "}
                              Reduce your project costs
                            </h3>
                            <p>
                              In comparison to Western European and North
                              American prices we can reduce your costs by 50%
                              when it comes to Web development, Mobile
                              Application development, HTML5, Flash production
                              &amp; Graphics Design (Clipping Path, Image
                              masking, Newspaper Ads design, Magazine makeup,
                              Company branding etc.)
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- row end --> */}
                    </div>}
                    
                    {/* <!-- content-inner --> */}
                    {/* <!-- row end--> */}

                    {/* <!-- content-inner --> */}
                    {collapseName==="WorkFlow" && <div className={`content-inner ${collapseName==="WorkFlow" && "active"}`}>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="text-left res-991-mt-30">
                            <h3 className="title fs-30">Our Process Workflow</h3>
                            <p>
                              We provide a well proven and efficient workflow.
                              Just send the assignment through our FTP and get
                              your finished materials back within few hours
                              based on job complexity.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- row end --> */}
                    </div>}
                    
                    {/* <!-- content-inner --> */}
                    {/* <!-- row end--> */}

                    {/* <!-- content-inner --> */}
                    {collapseName==="Service" && <div className={`content-inner ${collapseName==="Service" && "active"}`}>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="text-left">
                            <h3 className="title fs-30">Our 24-hour service</h3>
                            <p>
                              We are with you 24/7/365 to ensure your operations
                              run smoothly. We are committed to make sure that
                              your business is always running-without
                              interruption.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- row end --> */}
                    </div>}
                    
                    {/* <!-- content-inner --> */}
                    {/* <!-- row end--> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default WhyAreWe;