// import Swiper core and required modules
import { A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Partner = () => {
  return (
    <div className="ttm-row our-partner-section ttm-bgcolor-skincolor mt_90 res-991-mt-0 clearfix">
      <div className="container contain">
      <Swiper
      // install Swiper modules
      modules={[ A11y]}
      spaceBetween={50}
      slidesPerView={4}
      loop={true}
    >
      <SwiperSlide>
        <div className="client-box ttm-box-view-boxed-logo">
          <div className="client">
            <div className="ttm-client-logo-tooltip" data-tooltip="client-02">
              <img
                className="img-fluid"
                src="http://www.shehala.com/public/frontend/images/client/client-2.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-box ttm-box-view-boxed-logo">
          <div className="client">
            <div className="ttm-client-logo-tooltip" data-tooltip="client-03">
              <img
                className="img-fluid"
                src="http://www.shehala.com/public/frontend/images/client/client-3.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-box ttm-box-view-boxed-logo">
          <div className="client">
            <div className="ttm-client-logo-tooltip" data-tooltip="client-04">
              <img
                className="img-fluid"
                src="http://www.shehala.com/public/frontend/images/client/client-4.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-box ttm-box-view-boxed-logo">
          <div className="client">
            <div className="ttm-client-logo-tooltip" data-tooltip="client-05">
              <img
                className="img-fluid"
                src="http://www.shehala.com/public/frontend/images/client/client-5.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-box ttm-box-view-boxed-logo">
          <div className="client">
            <div className="ttm-client-logo-tooltip" data-tooltip="client-01">
              <img
                className="img-fluid"
                src="http://www.shehala.com/public/frontend/images/client/client-01.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-box ttm-box-view-boxed-logo">
          <div className="client">
            <div className="ttm-client-logo-tooltip" data-tooltip="client-02">
              <img
                className="img-fluid"
                src="http://www.shehala.com/public/frontend/images/client/client-2.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-box ttm-box-view-boxed-logo">
          <div className="client">
            <div className="ttm-client-logo-tooltip" data-tooltip="client-03">
              <img
                className="img-fluid"
                src="http://www.shehala.com/public/frontend/images/client/client-3.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-box ttm-box-view-boxed-logo">
          <div className="client">
            <div className="ttm-client-logo-tooltip" data-tooltip="client-04">
              <img
                className="img-fluid"
                src="http://www.shehala.com/public/frontend/images/client/client-4.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-box ttm-box-view-boxed-logo">
          <div className="client">
            <div className="ttm-client-logo-tooltip" data-tooltip="client-05">
              <img
                className="img-fluid"
                src="http://www.shehala.com/public/frontend/images/client/client-5.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-box ttm-box-view-boxed-logo">
          <div className="client">
            <div className="ttm-client-logo-tooltip" data-tooltip="client-01">
              <img
                className="img-fluid"
                src="http://www.shehala.com/public/frontend/images/client/client-01.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-box ttm-box-view-boxed-logo">
          <div className="client">
            <div className="ttm-client-logo-tooltip" data-tooltip="client-02">
              <img
                className="img-fluid"
                src="http://www.shehala.com/public/frontend/images/client/client-2.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-box ttm-box-view-boxed-logo">
          <div className="client">
            <div className="ttm-client-logo-tooltip" data-tooltip="client-03">
              <img
                className="img-fluid"
                src="http://www.shehala.com/public/frontend/images/client/client-3.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-box ttm-box-view-boxed-logo">
          <div className="client">
            <div className="ttm-client-logo-tooltip" data-tooltip="client-04">
              <img
                className="img-fluid"
                src="http://www.shehala.com/public/frontend/images/client/client-4.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
    </div>
  );
};

export default Partner;
