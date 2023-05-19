import React from 'react';

const KnockUs = () => {
    return (
        <section className="ttm-row zero-padding-section mt_95 res-991-mt-0 clearfix">
          <div className="container contain">
            <div className="row no-gutters">
              <div className="col-lg-3">
                {/* <!-- col-bg-img-three --> */}
                <div className="col-bg-img-three ttm-bg ttm-col-bgimage-yes res-991-h-auto">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                    <div className="ttm-bg-layer-inner"></div>
                  </div>
                </div>

                {/* <!-- Responsive View image --> */}
                <img
                  src="http://www.shehala.com/public/frontend/images/bg-image/Save_money.png"
                  className="ttm-equal-height-image"
                  alt="col-bgimage-3"
                />
              </div>
              <div className="col-lg-9">
                <div className="ttm-bgcolor-skincolor ttm-bg ttm-col-bgcolor-yes ttm-right-span">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                    <div className="ttm-bg-layer-inner"></div>
                  </div>
                  <div className="layer-content">
                    <div className="spacing-6 ttm-textcolor-white">
                      <h3 className="mb-5">
                        Knock Us if you need to create an awesome website &amp;
                        web application!
                      </h3>
                      <p className="mb-0">
                        Shehala IT is one of the fastest growing and forward
                        thinking IT solution companies in Bangladesh, delivering
                        outstanding software outsourcing services to clients in
                        EU (Denmark, Norway, Germeny, Sweden), North America and
                        Japan since 2006.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default KnockUs;